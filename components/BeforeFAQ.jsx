import React from "react";
import ButtonJoin from "./ButtonJoin";
import Reveal from "./Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
import FAQ from "./FAQ";
import Form from "./Form";

function BeforeFAQ() {
  return (
    <div className="  bg-black w-full">
      <div className="max-w-[1800px] mx-auto">
        <Reveal>
          <div className="justify-center flex flex-col  text-white items-center md:items-start w-full md:px-[100px] h-full pb-20 bg-bg-four bg-cover bg-no-repeat bg-blend-darken bg-center">
            <h2 className="text-[22px] leading-[42px] md:leading-[67px] md:text-[45px] spmono font-bold text-center md:text-left pb-[55px]  md:max-w-[990px] mx-8 md:mx-0 ">
              Position your{" "}
              <span className="inline-block border-[#633DFF] px-[9px] py-[2px] border-[1px] font-bold relative  bg-[#633dff1c]">
                venue as a leader
              </span>{" "}
              in the industry and differentiate yourself from competitors.
            </h2>
            <ButtonJoin />
          </div>
        </Reveal>

        <FAQ />
      </div>
    </div>
  );
}

export default BeforeFAQ;
