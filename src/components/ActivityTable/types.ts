import { FragmentType } from "@/lib/graphql/__generated__";
import { transactionDetailsFragment } from "@/lib/graphql/fragments";

export enum EventType {
  ContractURIUpdate = "ContractURIUpdate",
  PaymentReceive = "PaymentReceive",
  PaymentRelease = "PaymentRelease",
}

export interface SplitEvent {
  event: EventType;
  price: string;
  by: string;
  to: string;
  timestamp: string;
}

export interface ActivityTableProps {
  transactions: FragmentType<typeof transactionDetailsFragment>[];
}
