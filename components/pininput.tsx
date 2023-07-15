import React, { useState } from "react";
import { PinInput, Group } from "@mantine/core";

function Pin() {
  const [otp, setOtp] = useState(1);
  return (
    <>
      <Group position="center">
        <PinInput
          classNames={{
            input:
              "placeholder:!text-black placeholder:!font-bold placeholder:!0 !w-[52px]",
          }}
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          length={6}
        />
      </Group>

      {console.log(otp)}
    </>
  );
}
export default Pin;
