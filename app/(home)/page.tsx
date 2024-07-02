import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Real from "../components/real/real";
import Contact from "../components/contact/contact";

const Page = () => {
  return (
    <div>
      <Home />

      <div className="grid xl:grid-cols-3 2xl:grid-cols-3">
        <span className="xl:col-span-2 2xl:col-span-2">
          <Skills />
        </span>
        <About />
      </div>

      <div className="bg-[#010120] px-10 pt-24 pb-36">
        <Real />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Page;
