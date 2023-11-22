import React from "react";
import {
  DiCss3,
  DiDjango,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiSass,
} from "react-icons/di";
import { SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const TechStacks = () => {
  return (
    <div className="container mt-[100px]">
      <div>
        <h3 className="text-[25px]">Tech Stacks I Know</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 justify-center text-[60px] mt-[50px] gap-11">
          <div className=" flex items-center justify-center"><DiReact /></div>
          <div className=" flex items-center justify-center"><SiRedux /></div>
          <div className=" flex items-center justify-center"><DiPython /></div>
          <div className=" flex items-center justify-center"><DiJava/></div>
          <div className=" flex items-center justify-center"><DiJavascript1/></div>
          <div className=" flex items-center justify-center"><DiDjango /></div>
          <div className=" flex items-center justify-center"><FaNode /></div>
          <div className=" flex items-center justify-center"><SiMongodb /></div>
          <div className=" flex items-center justify-center"><DiHtml5 /></div>
          <div className=" flex items-center justify-center"><DiCss3 /></div>
          <div className=" flex items-center justify-center"><DiSass /></div>
          <div className=" flex items-center justify-center"><SiTailwindcss /></div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
