import React from "react";
interface Btn {
  text: string;
}

const Button = ({ text }: Btn) => {
  return (
    <button
      type="submit"
      className="w-[386px] h-[54px] rounded-[8px] bg-[#BF2018] text-white text-center font-switzer font-bold hover:bg-[#65110D]"
    >
      {text}
    </button>
  );
};
export default Button;
