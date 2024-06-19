import { featuresImage } from "@/constant/constant";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="text-center mt-[50px] px-5 py-5">
          <h1 className="text-4xl tracking-wider text-[#00357B]">HARBOURS</h1>
          <h1 className="text-4xl tracking-wider text-[#00357B]">Lights</h1>
          <h6 className="mt-2 text-[#00357B]">
            de <span className="uppercase">Grisogono</span>
          </h6>
          <p>Geneve</p>
          <h1 className="mt-4 font-Oswald text-5xl text-[#00357B] font-bold">
            Features & Amenties
          </h1>
          <p className="w-[50%] max-md:w-[80%] mx-auto my-5 text-gray-600">
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.
          </p>
          <div className="flex items-center justify-center space-x-8 max-md:space-x-4 max-md:gap-y-6 flex-wrap">
            {featuresImage.map((items) => {
              return (
                <>
                  <div
                    key={items.id}
                    className="shadow-xl px-4 py-4 rounded-2xl"
                  >
                    <img
                      className="w-[200px] object-cover h-[200px] rounded-full"
                      src={items.image}
                      alt=""
                    />
                    <h6 className="mt-4 font-bold">{items.name}</h6>
                    <h6 className="font-bold">{items.extras}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
