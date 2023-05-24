import React, { useState } from "react";
import ButtonJoin from "./ButtonJoin";
import Squares from "./Squares";
import { HowDoesItWorkConstants } from "@/constants/HowDoesItWorkConstants";
import Reveal from "./Reveal";
import Form from "./Form";

function HowDoesItWork() {
  const [toggle, setToggle] = useState("none");

  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }

  return (
    <div className="text-white  w-full relative bg-black h-full">
      <div className="max-w-[1800px] mx-auto">
        <div
          className=" md:px-[100px]  bg-bg-three  bg-no-repeat bg-cover bg-top  bg-local bg-blend-darken w-full h-full 
      "
        >
          {/* intro with button */}
          <Reveal>
            <div className="md:pb-[170px] pb-[105px] md:py-0 flex flex-col items-center md:items-start w-full ">
              <h2 className="text-[22px] leading-[42px] md:leading-[67px] md:text-[45px] spmono font-bold text-center md:text-left pb-[55px] max-w-[300px] md:max-w-[1000px] mx-auto md:mx-1 mt-[50px] md:mt-0">
                <span className="inline-block border-[#633DFF] px-[9px] py-[2px] border-[1px] font-bold relative  bg-[#633dff1c]">
                  Join the waitlist today
                  <Squares />
                </span>{" "}
                to transform your event space management experience
              </h2>
              <div
                onClick={() => {
                  setModalActive(true);
                }}
              >
                <ButtonJoin />
              </div>
            </div>
          </Reveal>
          {/* table with title and pic */}
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:items-end w-full pb-[170px] relative mt-[70px] ">
            {/* right side */}
            <div className=" relative  w-full lg:order-2">
              <div className="flex flex-col md:max-h-[70vh] relative md:justify-end  w-full items-center lg:items-end mb-[50px] lg:mb-0">
                <h3 className="md:text-[45px] text-[18px] font-bold spmono md:pb-[56px] pb-[50px] ">
                  <span>How</span> does it work?
                </h3>
                <div className="rounded-xl max-w-[65%] h-auto block">
                  <img
                    src="ai.png"
                    alt="ai how does it work"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="flex flex-col  mx-8 md:mx-0 items-center md:items-start backdrop-brightness-75">
              {HowDoesItWorkConstants.map((how) => (
                <div
                  className="flex flex-col justify-between border-t-2 border-l-2 border-r-2 items-center px-5 first:rounded-t-md md:max-w-[565px] w-full   last:rounded-b-md last:border-b-2 "
                  key={how.id}
                >
                  <div className="flex justify-between items-center w-full ">
                    <div
                      className="w-full py-[22px] flex gap-x-3 items-center"
                      key={how.id}
                    >
                      <img src={how.img}></img>
                      <h3 className="md:text-[18px] outfit">{how.title}</h3>
                    </div>
                    <div
                      key={how.id}
                      onClick={() => {
                        toggleFunction(how.id);
                      }}
                    >
                      <img src="arrow.svg" alt="" />
                    </div>
                  </div>
                  {toggle[how.id] && (
                    <div className="w-full pb-6">
                      <h2 className="text-left">{how.subtitle}</h2>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default HowDoesItWork;
