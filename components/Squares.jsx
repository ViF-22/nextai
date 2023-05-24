import React from "react";

function Squares() {
  return (
    <div>
      <div className="firstsq w-[6px] h-[6px] bg-[#633dff] absolute -bottom-[4px] -left-[4px]"></div>
      <div className="secondsq w-[6px] h-[6px] bg-[#633dff] absolute -top-[4px] -right-[4px]"></div>
      <div className="thirdsq w-[6px] h-[6px] bg-[#633dff] absolute -top-[4px] -left-[4px]"></div>
      <div className="fourthsq w-[6px] h-[6px] bg-[#633dff] absolute -bottom-[4px] -right-[4px]"></div>
    </div>
  );
}

export default Squares;
