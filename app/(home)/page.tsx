import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Experience from "../components/home/experience";
import Real from "../components/real/real";
import Contact from "../components/contact/contact";

const Page = () => {
  return (
    <div>
      <Home />

      <div className="bg-dark-900 border-t-2 border-primary-800/50" id="apropos">
        <div className="grid xl:grid-cols-3 gap-0 md:p-20">
          <div className="xl:col-span-2">
            <Skills />
          </div>
          <div className="xl:col-span-1">
            <About />
          </div>
        </div>
      </div>

      {/* New Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      <div className="bg-dark-900 px-10 pt-16 pb-[120px] border-b-2 border-primary-800/50" id="projets">
        <Real />
      </div>

      <div className="flex justify-center content-center items-center pt-12 pb-12" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
