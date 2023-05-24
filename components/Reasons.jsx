import React, { useEffect, useRef } from "react";
import Squares from "./Squares";
import { reasonsConstants } from "@/constants/reasonsConstants";
import StarPoint from "./StarPoint";
import Reveal from "./Reveal";
import { motion, useInView, useAnimation } from "framer-motion";

function Reasons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible"); //change to what was in animate
    }
  }, [inView]);
  return (
    <div className="bg-black w-full h-full  text-white ">
      <div className="max-w-[1800px] mx-auto">
        <div className=" md:px-[100px] h-full w-full relative flex flex-col items-center md:items-start bg-bg-two bg-blend-darken bg-cover bg-no-repeat">
          <div className=" w-full">
            <h2 className="text-[22px] leading-[42px] md:leading-[67px] md:text-[45px] spmono font-bold text-center md:text-left pb-[55px] max-w-[300px] md:max-w-[730px] mx-auto md:mx-1">
              <span className="inline-block border-[#633DFF] px-[9px] py-[2px] border-[1px] font-bold relative  bg-[#633dff1c]">
                <Squares />
                Transform your event
              </span>
              <br /> space management experience
            </h2>
          </div>
          <div className="w-full">
            {reasonsConstants.map((reason) => (
              <div
                id={reason.id}
                className={`flex gap-x-14 xl:gap-x-0 md:flex flex-col-reverse md:justify-between mx-8 md:mx-0 pb-[120px] md:pb-[160px] ${
                  reason.class === "row" ? "lg:flex-row" : "lg:flex-row-reverse"
                }
                `}
              >
                <div className="max-h-screen sm:h-full mx-3 sm:mx-0 relative">
                  <img src={reason.phone} className="object-contain m-auto " />
                </div>
                <div className="relative">
                  <h2 className="text-[18px] md:text-[34px] md:leading-[50px] leading-[34px] spmono text-center md:text-left font-bold rectangle relative md:max-w-[613px] ">
                    {reason.title}
                  </h2>

                  <div className="py-[50px] m-auto w-full">
                    {reason.subtitle.map((sub) => (
                      <Reveal>
                        <div className="flex md:max-w-[700px] gap-x-[20px] ">
                          <StarPoint />
                          <p className="outfit text-[15px] leading-[25px] pb-[40px] max-w-[540px]">
                            {sub}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
