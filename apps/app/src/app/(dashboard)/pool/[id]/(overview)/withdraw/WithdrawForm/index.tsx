"use client";

import WithdrawFormInner, {
  type WithdrawFormInnerProps,
  type WithdrawData,
} from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/WithdrawFormInner";
import Form from "@/components/Form";
import { PropsWithChildren } from "react";
import { Box } from "@splitfi/ui";

type WithdrawFormProps = PropsWithChildren<WithdrawFormInnerProps>;

export default function WithdrawForm(props: WithdrawFormProps) {
  const assets = props.balance?.assets ?? [];

  return (
    <Form<WithdrawData>
      values={{ assets, distribute: false }}
      flex={"1"}
      overflow={"hidden"}
      spacing={"0"}
    >
      <WithdrawFormInner {...props} />
    </Form>
  );
}
