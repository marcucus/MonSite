import React from "react";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import About from "../components/home/about";
import Skills from "../components/home/skills";

const Page = () => {
  return (
    <div>
      <Home />
      <About/>
      <Skills/>
    </div>
  );
};

export default Page;
