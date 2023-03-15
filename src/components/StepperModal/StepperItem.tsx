import React from "react";

export interface StepperItemState {
  id: string;
  title: React.ReactNode | string;
  disabled?: boolean;
  onNext?: (
    current: StepperModalStep,
    currentIndex: number
  ) => Promise<void> | void;
}

export interface StepperModalStep extends StepperItemState {
  children: (state: ItemState) => React.ReactNode;
}

export interface ItemState extends StepperItemState {
  index: number;
  isActive: boolean;
}

interface StepperItemProps extends ItemState {
  children: (state: ItemState) => React.ReactNode;
}

export default function StepperItem({ children, ...props }: StepperItemProps) {
  const { isActive, isError, error } = props;

  return (
    <div className={"flex flex-col w-full"}>
      {isActive && (
        <>
          {children(props)}
          {isError && <p>{error?.message || "Unknown Error"}</p>}
        </>
      )}
    </div>
  );
}
