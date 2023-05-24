import React, { useState } from "react";
import { faqConstants } from "@/constants/faqConstants";

function FAQ() {
  const [toggle, setToggle] = useState("none");

  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  return (
    <div className="bg-black py-[100px] text-white">
      {" "}
      <div className="flex flex-col md:px-[100px] px-8 ">
        {faqConstants.map((faq) => (
          <div
            className="flex flex-col justify-between border-t-2 border-l-2 border-r-2 items-center px-5 first:rounded-t-md last:rounded-b-md last:border-b-2 "
            key={faq.id}
          >
            <div className="flex justify-between items-center w-full ">
              <div
                className="w-full py-[22px] flex gap-x-5 items-center"
                key={faq.id}
              >
                <h3 className="spmono md:text-[35px] text-[20px] font-bold text-[#633DFF]">
                  {faq.id}
                </h3>
                <h3 className="md:text-[18px] text-[15px] outfit">
                  {faq.title}
                </h3>
              </div>
              <div
                key={faq.id}
                onClick={() => {
                  toggleFunction(faq.id);
                }}
                className="px-4 "
              >
                <img src="arrow.svg" alt="" />
              </div>
            </div>
            {toggle[faq.id] && (
              <div className="w-full pb-6">
                <h2 className="text-left">{faq?.subtitle}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
