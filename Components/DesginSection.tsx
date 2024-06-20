import {
  imageLink1,
  imageLink2,
  imageLink3,
  imageLink4,
} from "@/constant/constant";
import React from "react";

const DesginSection = () => {
  return (
    <>
      <div className="min-h-[100vh] py-5">
        <div className="flex justify-end mr-[144px] mb-4 max-md:w-[50%] max-md:mx-auto">
          <button className="px-3 py-2  bg-custom-bg3 rounded-md cursor-pointer font-bold uppercase w-[10rem] text-text-color-2">
            Exteriros
          </button>
          <button className="ml-3 border-2 px-3 py-2 w-[10rem] rounded-md cursor-pointer uppercase font-bold border-border-custom2  ">
            Interiros
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto">
          <div className="col-span-1 md:col-span-3">
            <img
              className="w-full h-[60vh] object-cover rounded-lg"
              src={imageLink1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={imageLink2}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={imageLink3}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={imageLink4}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesginSection;
