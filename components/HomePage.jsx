import React, { useState } from "react";
import { homePagePoints } from "@/constants/homePageConstants";
import Squares from "./Squares";
import StarPoint from "./StarPoint";
import ButtonJoin from "./ButtonJoin";
import Form from "./Form";

function HomePage() {
  //modal window
  //const [modalActive, setModalActive] = useState(false);
  return (
    <div className=" w-full h-full   bg-black">
      <div className="max-w-[1800px] mx-auto">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-x-10 md:px-[100px]  pt-[80px] pb-[60px] bg-bg-one bg-no-repeat bg-cover ">
          {/* title with button */}
          <div className="text-white text-center md:text-left mx-8 md:mx-0 md:max-w-[700px] flex flex-col items-center md:items-start">
            <div className="w-full">
              <span className="spmono text-[15px] md:text-[20px] inline-block border-[#633DFF] px-[9px] py-[2px] border-[1px] font-bold  relative  bg-[#633dff1c]">
                AI For Event Spaces is Here
                <Squares />
              </span>
            </div>
            <h2 className="text-[22px] leading-[42px] md:leading-[67px] md:text-[45px] spmono font-bold pb-[38px] pt-[30px] w-full">
              Revolutionize Your Event Space Management with Our AI-Powered
              Chatbot
            </h2>
            <h3 className="text-[15px] leading-[30px] pb-[61px] outfit w-full">
              Introducing our AI Event Space Chatbot, a state-of-the-art
              solution designed to revolutionize the way event spaces manage
              inquiries and bookings. By leveraging the power of artificial
              intelligence, our chatbot offers numerous benefits that cater to
              the unique needs of your event space..
            </h3>
            <div>
              <ButtonJoin />
            </div>
          </div>
          {/* phone */}
          <div className="mt-[70px] md:mt-0 mx-3 sm:mx-0 flex items-center md:justify-end justify-center max-h-screen sm:h-full">
            <img src="phone1.png" className=" object-contain" />
          </div>
        </div>
        {/* </div> */}
        <div className="flex flex-col gap-y-[50px] md:gap-y-0 justify-between  items-center md:flex-row md:px-[100px]  bg-black text-center md:text-left pb-[150px] ">
          {homePagePoints.map((point) => (
            <div
              key={point.id}
              className="flex flex-col sm:items-left items-center"
            >
              <StarPoint />
              <p className="text-white outfit max-w-[260px] md:text-[15px] md:leading-[28px]">
                {point.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
}

export default HomePage;
