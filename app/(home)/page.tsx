import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";

const Page = () => {
  return (
    <div className="w-full h-full bg-[#000814]">
      <Navbar/>
      <Home />
    </div>
  );
};

export default Page;
