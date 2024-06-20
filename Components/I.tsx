import { data } from "@/constant/constant";
import React from "react";

const I = () => {
  return (
    <>
      <div className="bg-[#F4F9FF] min-h-[40vh] w-full max-md:py-5">
        <div className="flex items-center justify-around h-[40vh] w-[70%] mx-auto flex-wrap max-md:gap-y-5">
          {data.map((items) => {
            return (
              <>
                <div key={items.id} className="text-center">
                  <img
                    className="w-[70px] mx-auto"
                    src={items.imageLink}
                    alt=""
                  />
                  <h2 className="uppercase mt-2 text-[#6ca9cd]">
                    {items.name}
                  </h2>
                  <h2 className="uppercase font-Oswald text-[#00357B] text-3xl font-bold">
                    {items.statement}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default I;
