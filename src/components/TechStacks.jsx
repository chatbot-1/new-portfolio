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
import { SiFirebase, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaGit, FaGitAlt, FaNode } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const TechStacks = () => {
  return (
    <div className="container mt-[100px]">
      <div>
        <h3 className="text-[22px]">Tech Stacks I Know 🔭:</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 justify-center text-[50px] mt-[50px] gap-11">
          <div className=" flex items-center justify-center"><DiReact /></div>
          <div className=" flex items-center justify-center"><SiRedux /></div>
          <div className=" flex items-center justify-center"><DiPython /></div>
          <div className=" flex items-center justify-center"><DiJava/></div>
          <div className=" flex items-center justify-center"><DiJavascript1/></div>
          <div className=" flex items-center justify-center"><DiDjango /></div>
          <div className=" flex items-center justify-center"><FaNode /></div>
          <div className=" flex items-center justify-center"><SiMongodb /></div>
          <div className=" flex items-center justify-center"><SiMicrosoftazure /></div>
          <div className=" flex items-center justify-center"><SiFirebase /></div>
          <div className=" flex items-center justify-center"><FaGitAlt /></div>
          <div className=" flex items-center justify-center"><DiCss3 /></div>
          <div className=" flex items-center justify-center"><DiHtml5 /></div>
          <div className=" flex items-center justify-center"><DiSass /></div>
          <div className=" flex items-center justify-center"><SiTailwindcss /></div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
