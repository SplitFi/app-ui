import { Allocation, AllocationType } from "@/types";
import { isAddress } from "viem";
import { InvalidArgumentError } from "@/errors";

export const validateAddress = (address: string): void => {
  if (!isAddress(address))
    throw new InvalidArgumentError(`Invalid address: ${address}`);
};

export const validateAllocations = (allocations: Allocation[]): void => {
  validateNumAllocations(allocations.length);
  allocations.forEach((allocation, index) => {
    if (!isAddress(allocation.recipient))
      throw new InvalidArgumentError(
        `Invalid recipient address: ${allocation.recipient}`,
      );

    validateAllocation(allocation);
  });
};

const validateNumAllocations = (numAllocations: number): void => {
  if (numAllocations < 2) {
    throw new InvalidArgumentError(
      "Invalid number of allocations, at least two are required",
    );
  }
};

const validateAllocation = (allocation: Allocation): void => {
  if (
    allocation.allocationType == AllocationType.PercentagePrioritized ||
    allocation.allocationType == AllocationType.FixedPrioritized ||
    allocation.allocationType == AllocationType.PercentageTimed ||
    allocation.allocationType == AllocationType.FixedTimed
  ) {
    if (!isAddress(allocation.recipient) && !isAddress(allocation.target))
      throw new InvalidArgumentError(
        `Invalid recipient or target address: ${allocation.recipient}`,
      );
  } else {
    if (!isAddress(allocation.recipient))
      throw new InvalidArgumentError(
        `Invalid recipient address: ${allocation.recipient}`,
      );
  }
};
