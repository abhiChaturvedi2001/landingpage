import React from "react";

const DesginSection = () => {
  return (
    <>
      <div className="min-h-[100vh] py-5">
        <div className="flex justify-end mr-[144px] mb-4 max-md:w-[50%] max-md:mx-auto">
          <button className="px-3 py-2 bg-[#00357B] rounded-md cursor-pointer font-bold uppercase w-[10rem] text-white ">
            Exteriros
          </button>
          <button className="ml-3 border-2 px-3 py-2 w-[10rem] rounded-md cursor-pointer uppercase font-bold border-[#00357B]">
            Interiros
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto">
          <div className="col-span-1 md:col-span-3">
            <img
              className="w-full h-[60vh] object-cover rounded-lg"
              src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_640.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://cdn.pixabay.com/photo/2019/07/30/14/12/woman-4373078_960_720.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src="https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesginSection;
