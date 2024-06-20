import React from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around min-h-[12vh] absolute w-full z-20 ">
        <div className="logo italic font-bold text-4xl text-white ">DAMAC</div>
        <button className=" max-md:hidden border border-[#17ABFF] rounded-md font-bold uppercase text-[#17ABFF] px-5 py-2 ">
          Enquire Now
        </button>
        <FaBars className="hidden max-md:block text-3xl text-white cursor-pointer" />
      </nav>
    </>
  );
};

export default Navbar;
