import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar/>
      <Home />
    </div>
  );
};

export default Page;
