import { data } from "@/constant/constant";
import React from "react";

const I = () => {
  return (
    <>
      <div className="bg-[#F4F9FF] h-[30vh] w-full">
        <div className="flex items-center justify-around h-[30vh] w-[70%] mx-auto">
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
