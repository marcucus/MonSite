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

      <div className="bg-[#010120] border-t-2 border-[#47478d]" id="apropos">
        <div className="grid xl:grid-cols-3 2xl:grid-cols-3 md:p-20">
          <span className="hidden xl:block xl:col-span-2 2xl:col-span-2">
            <Skills />
          </span>
          <About />
          <span className="xl:hidden">
            <Skills />
          </span>
        </div>
      </div>

      <div className="bg-[#010120] px-10 pt-16 pb-[120px] border-b-2 border-[#47478d]" id="projets">
        <Real />
      </div>

      <div className="flex justify-center content-center items-center pt-12 pb-12" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
