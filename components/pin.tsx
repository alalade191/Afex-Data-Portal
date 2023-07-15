import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OtpPin() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="tel"
        inputStyle="w-24 h-10 caret-black text-center outline-none transition-all4 border-b-2 border-b-slate-700 focus:border-b-primary text-lg"
        containerStyle="flex items-center justify-center gap-x-2 mt-7"
        renderInput={(props) => (
          <input {...props} style={{ width: "3.3rem" }} />
        )}
      />
    </div>
  );
}
