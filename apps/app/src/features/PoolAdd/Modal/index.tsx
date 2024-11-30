import { useStateList } from "react-use";
import StepperModal, { StepperDialogProps } from "@/components/StepperModal";
import { LoadingStep, ReviewStep, SuccessStep } from "./steps";
import { PoolAddData } from "@/features/PoolAdd/types";
import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { useCreatePool } from "@mutuals/sdk-react";

interface PoolAddModalProps
  extends Omit<StepperDialogProps, "activeStep" | "steps" | "onNext">,
    UseFormReturn<PoolAddData, unknown> {}

export default function PoolAddModal({
  open,
  onOpenChange,
  ...methods
}: PoolAddModalProps) {
  const { getValues } = methods;
  const { status, error, createPool, poolAddress } = useCreatePool();

  const steps = [
    {
      id: "review",
      title: "Review",
      children: () => ReviewStep(methods),
    },
    {
      id: "sign",
      title: "Approve",
      disabled: true,
      children: () =>
        LoadingStep({
          error,
          isError: status == "error",
          isSuccess: status == "txInProgress",
          description:
            "Please confirm the transaction in your wallet. This will create your Split.",
          status:
            status == "error"
              ? "Confirmation error"
              : status == "txInProgress"
                ? "Successfully confirmed"
                : "Waiting for you to confirm",
        }),
    },
    {
      id: "wait",
      title: "Wait",
      disabled: true,
      children: () =>
        LoadingStep({
          error,
          isError: status == "error",
          isSuccess: status == "complete",
          description:
            "Please wait for the transaction to be confirmed by the network. This may take a moment, depending on the current workload.",
          status:
            status == "error"
              ? "Confirmation error"
              : status == "complete"
                ? "Successfully confirmed"
                : "Waiting for transaction confirmation",
        }),
    },
    {
      id: "success",
      title: "End",
      disabled: true,
      children: () => SuccessStep({ contractAddress: poolAddress }),
    },
  ];

  const {
    currentIndex: activeStepIndex,
    state: _,
    next: goToNext,
    setStateAt: setActiveStep,
  } = useStateList(steps);

  function reset() {
    setTimeout(() => {
      // resetCreatePoolTx ();
      setActiveStep(0);
    }, 200);
  }

  const onNext = useCallback(async () => {
    const data = getValues();
    await createPool({
      ownerAddress: data.ownerAddress,
      salt: BigInt(0),
      allocations: data.allocations,
    });
    goToNext();
  }, [getValues, createPool, goToNext]);

  return (
    <StepperModal
      steps={steps}
      onNext={onNext}
      onOpenChange={({ open }) => {
        if (!open) {
          reset();
        }
        onOpenChange?.({ open });
      }}
      activeStep={activeStepIndex}
      open={open}
    />
  );
}
