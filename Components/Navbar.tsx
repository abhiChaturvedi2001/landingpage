import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around min-h-[12vh] absolute w-full z-20 ">
        <div className="logo italic font-bold text-4xl text-white ">DAMAC</div>
        <button className="border border-[#17ABFF] rounded-md font-bold uppercase text-[#17ABFF] px-5 py-2 ">
          Enquire Now
        </button>
      </nav>
    </>
  );
};

export default Navbar;
