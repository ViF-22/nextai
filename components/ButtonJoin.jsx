import React from "react";
import { useDispatch } from "react-redux"; //for modifying values
import { useSelector } from "react-redux"; //for accessing values
import { appearModal } from "@/features/modal";

function ButtonJoin() {
  const dispatch = useDispatch();
  return (
    <button
      className="py-[14px] px-[48px] md:text-[15px] text-[13px] md:px-14 md:py-5 border-2 border-[#633DFF] hover:border-[#9a85f0] hover:bg-gradient-to-r hover:from-violet-500 hover:to-black-500 shadow-lg rounded-md shadow-[#633dff8c] outfit block font-semibold"
      onClick={() => {
        dispatch(appearModal(true));
      }}
    >
      Join the Waitlist
    </button>
  );
}

export default ButtonJoin;
