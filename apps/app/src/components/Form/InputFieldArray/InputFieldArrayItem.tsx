import { Box, HStack, IconButton, StackDivider } from "@splitfi/ui";
import React from "react";
import { IoAdd, IoTrashOutline } from "react-icons/io5";

interface InputFieldArrayItemProps {
  removeDisabled: boolean;
  onAdd?(): void;
  onRemove(): void;
}

export function InputFieldArrayItem({
  children,
  removeDisabled,
  onAdd,
  onRemove,
}: React.PropsWithChildren<InputFieldArrayItemProps>) {
  return (
    <HStack alignItems={"flex-end"} spacing={"3"} flex={"1"}>
      {children}
      <HStack alignItems="center" spacing={"1"}>
        {!!onAdd && (
          <IconButton
            aria-label={"Add item"}
            type={"button"}
            onClick={() => onAdd()}
            icon={<IoAdd />}
          />
        )}
        <IconButton
          aria-label={"Remove item"}
          isDisabled={removeDisabled}
          type={"button"}
          onClick={() => onRemove()}
          icon={<IoTrashOutline />}
        />
      </HStack>
    </HStack>
  );
}
