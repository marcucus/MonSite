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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="xl:col-span-2 order-2 xl:order-1">
            <Skills />
          </div>
          <div className="xl:col-span-1 order-1 xl:order-2">
            <About />
          </div>
        </div>
      </div>

      {/* New Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      <div className="bg-dark-900 px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 pb-16 sm:pb-20 lg:pb-[120px] border-b-2 border-primary-800/50" id="projets">
        <Real />
      </div>

      <div className="flex justify-center content-center items-center pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
