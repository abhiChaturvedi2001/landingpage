import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner flex justify-around items-center flex-wrap max-lg:py-5   ">
        <div className="left max-lg:mt-[100px]">
          <h1 className="text-5xl max-md:text-3xl font-bold text-text-color-2 font-Oswald">
            HARBOURS LIGHTS
          </h1>
          <h1 className="text-5xl max-md:text-3xl font-bold font-Oswald text-text-color-2">
            DE <span className=" text-text-primary-Color ">GRESOGONO</span>
          </h1>
          <p className="text-text-color-2 font-bold mt-5 text-2xl max-md:text-xl">
            1,2&3 Bedrooms Seaside Apartments <br /> in Dubai Maritime City
          </p>
          <div className="mt-4">
            <p className=" bg-custom-rgba2 backdrop-blur-custom-blur border-l-4  border-border-custom  px-4 font-bold text-text-color-2 py-2">
              Rental returns of UPTO 11%
            </p>
            <p className=" bg-custom-rgba2 backdrop-blur-custom-blur border-l-4 px-4 border-border-custom  font-bold text-text-color-2 py-2 mt-4">
              Capital Appreciation of UPTO 32%**
            </p>
          </div>
        </div>
        <div className="right bg-custom-rgba shadow-custom-shadow relative backdrop-blur-custom-blur min-h-[50vh] rounded-lg w-[26rem] max-md:w-[22rem] max-md:h-[40vh] max-lg:mt-4 ">
          <div className="px-4 py-4">
            <h6 className="uppercase tracking-widest  text-text-color-2">
              Pricing starts from
            </h6>
            <h1 className="text-6xl mt-2 font-bold text-text-color-2 font-Oswald">
              $ 425,000
            </h1>
            <h3 className="text-text-color-2 mt-2  font-Oswald text-xl ">
              AED 1.3 Million
            </h3>
            <button className="px-2 py-3 rounded-md bg-custom-bg2  text-text-color-2 font-bold w-full my-5">
              Get a Presentation
            </button>
          </div>
          <div className="bg-custom-rgba absolute bottom-0 px-3 py-4">
            <p>
              Get on experts presentation of real estate in Dubai for life and
              investment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
