import React from "react";
import { PinInput, Group } from "@mantine/core";

function Pin() {
  return (
    <Group position="center">
      <PinInput
        classNames={{
          input:
            "placeholder:!text-black placeholder:!font-bold placeholder:!0 !w-[52px]",
        }}
        type="number"
        length={6}
      />
    </Group>
  );
}
export default Pin;
