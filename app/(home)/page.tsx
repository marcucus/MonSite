import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Real from "../components/real/real";

const Page = () => {
  return (
    <div>
      <Home />

      <div className="grid xl:grid-cols-3 2xl:grid-cols-3">
        <span className="xl:col-span-2 2xl:col-span-2">
          <Skills/>
        </span>
        <About/>
      </div>

      <div className="bg-[#010120] ">
        <Real/>
      </div>

    </div>
  );
};

export default Page;
