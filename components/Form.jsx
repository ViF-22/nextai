import React, { useState } from "react";
import ButtonJoin from "./ButtonJoin";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux"; //for accessing values
import { useDispatch } from "react-redux";
import { appearModal } from "@/features/modal";

function Form() {
  const modality = useSelector((state) => state.modal.value);
  console.log(modality);
  const dispatch = useDispatch();

  return (
    <div
      className={
        modality
          ? `h-full md:h-full w-full flex items-center justify-center fixed z-50 backdrop-blur-lg `
          : `hidden overflow-hidden`
      }
    >
      <div className="w-full h-full py-3 md:py-0 flex items-center justify-center fixed z-50 ">
        <form className="bg-white text-black rounded-xl px-[50px] relative md:max-w-[654px] flex flex-col gap-y-[10px] mx-2 md:mx-0 overflow-auto h-full md:h-auto ">
          <div className="absolute right-2 p-4">
            <AiOutlineClose
              className="hover:text-[#633DFF]"
              onClick={() => {
                dispatch(appearModal(false));
              }}
            />
          </div>
          <div className="flex flex-row  gap-x-[40px] items-baseline md:pt-[39px] pt-[20px]">
            <h2 className="spmono md:text-[45px] text-[35px] font-bold leading-[67px] inline">
              Waitlist
            </h2>
            <h3 className="md:text-[20px] text-[15px] font-bold leading-[67px] spmono inline">
              AI Events
            </h3>
          </div>
          {/* first line */}
          <div className="grid grid-cols-2  outfit md:text-[15px] text-[13px]  w-full gap-x-[10px] items-end">
            <div className=" flex flex-col gap-y-[2px] ">
              <label for="name" className="font-semibold  ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="your answer here"
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full  focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <label for="email" className="font-semibold ">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your answer here"
                required
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
          </div>
          {/* second line */}
          <div className=" grid md:grid-cols-2 gri-cols-1 gap-y-[10px] md:gap-y-0 w-full md:text-[15px] text-[13px] outfit gap-x-[10px]">
            <div className="flex flex-col gap-y-[2px]">
              <label for="company" className="font-semibold">
                Company / organization name:
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                placeholder="your answer here"
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
            <div className="flex flex-col">
              <label for="job" className="font-semibold">
                Job role / Title
              </label>
              <input
                type="text"
                name="job"
                id="job"
                placeholder="your answer here"
                required
                className="border-[1px] border-black rounded-md  self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
          </div>
          {/* third line */}
          <div className="grid grid-cols-2 w-full  md:text-[15px] text-[13px]  outfit gap-x-[10px] items-end">
            <div className="flex flex-col">
              <label for="typeOfEvents" className="font-semibold">
                Type of events organized
              </label>
              <select
                name="type"
                id="typeOfEvents"
                required
                placeholder="your answer here"
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[13px] py-[11px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              >
                <option value="">Select an option</option>
                <option value="work_meetings">work meetings</option>
                <option value="personal_schedule">personal schedule</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label for="numEvents" className="font-semibold">
                A number of events
              </label>
              <input
                type="number"
                name="job"
                id="numEvents"
                required
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
          </div>
          {/* fourth line */}
          <div className="md:text-[15px] text-[13px]  outfit flex flex-col">
            <label for="curMethods" className="font-semibold">
              Current methods of managing your inquiries
            </label>
            <select
              name="type"
              id="typeOfEvents"
              required
              placeholder="your answer here"
              className="border-[1px] border-black rounded-md w-full px-[11px] py-[11px]  focus:outline-[#633DFF] focus:outline-[1.5px]"
            >
              <option value="">Select an option</option>
              <option value="byemail">email</option>
              <option value="bymessenger">messenger</option>
            </select>
          </div>
          {/* fifth line */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[10px] md:gap-y-0 w-full md:text-[15px] text-[13px]  outfit gap-x-[10px]">
            <div className="flex flex-col">
              <label for="feature" className="font-semibold">
                Does any AI Chatbot feature you would need?
              </label>
              <input
                type="text"
                name="feature"
                id="feature"
                required
                placeholder="your answer here"
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
            <div className="flex flex-col">
              <label for="source" className="font-semibold">
                How did they hear about the AI Event Chatbot ?
              </label>
              <input
                type="text"
                name="source"
                id="source"
                placeholder="your answer here"
                required
                className="border-[1px] border-black rounded-md self-start px-[11px] md:py-[11px] py-[9px] w-full focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
            </div>
          </div>
          {/* sixth line with button and agreement */}
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-x-[10px] mt-[20px] mb-[50px]">
            <div className="outfit md:text-[15px] text-[13px] flex gap-x-[6px] items-start md:order-2 pb-[10px] md:pb-0">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="relative top-[4px] focus:outline-[#633DFF] focus:outline-[1.5px]"
              />
              <label for="agree">
                I agree to receive updates and marketing communications from
                Salle Privée / Event Spaces
              </label>
            </div>
            <div>
              <ButtonJoin className="font-semibold" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
