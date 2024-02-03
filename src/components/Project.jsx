import React from "react";
import {
  DiCss3,
  DiDjango,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiSass,
} from "react-icons/di";
import { SiFirebase, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaNode } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
  return (
    <div id="project" className="container relative ">
      <div className="mt-[100px]">
        <h2 className="text-[22px]">Passionate creations, crafted by me 🌱:</h2>
        <div className="border border-dashed rounded p-6 pb-11 pt-11 border-gray-700/50 grid md:grid-cols-2 sm:grid-cols-1  justify-center mt-[25px] gap-[70px]">

          <div className="shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90 p-5">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 cursor-pointer hover:text-white flex items-center gap-3">Health Aura<MdArrowOutward/> </h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/healthAura2.0"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="https://health-aura.netlify.app/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Health Aura is a patient-centric platform enabling seamless online
                appointment booking and secure access to digital prescriptions
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
                <DiReact /> <FaNode /> <SiMongodb /> <SiTailwindcss />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 hover:text-white cursor-pointer flex items-center gap-3">SportOn<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/sports-on-web"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="https://sportsonweb.netlify.app/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Crafted a web app tailored for sports enthusiasts, fostering
                interactive engagement among users.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
                <DiReact /> <SiTailwindcss /> <DiJavascript1 /> <SiFirebase />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 hover:text-white cursor-pointer flex items-center gap-3">SpotSail<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/spot-sail"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="https://spotsail.netlify.app/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                SpotSail is a web app which helps the users to find the available seats in their favourite restaurants, or beds in the hospital, or seats in the colleges for admission.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
              <DiReact /> <FaNode /> <SiMongodb /> <SiTailwindcss />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 hover:text-white cursor-pointer flex items-center gap-3">Milton<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/milton"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="https://hirequotient-milton.netlify.app/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Created this complex UI design and used taiwind css for the first time although it was a company assignment.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
              <DiReact /> <SiTailwindcss />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 hover:text-white cursor-pointer flex items-center gap-3">Video Chat App<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/video-chat"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href=""><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Developed a web app akin to Google Meet & Zoom, delivering
                seamless video conferencing experience.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
                <DiJavascript1 /> <DiPython /> <DiDjango /> <SiTailwindcss />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 cursor-pointer hover:text-white flex items-center gap-3">Unimart<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/notnotrachit/unimart"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="https://unimart.rachitkhurana.repl.co/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Constructed a web app with my team, providing college students with a platform to buy,
                rent, sell or exchange used products.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
              <DiPython /> <DiDjango /> <DiJavascript1 /> <SiTailwindcss />
              </li>
            </ul>
          </div>

          <div className="p-5 rounded shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
            <div className="sec">
              <div className="flex justify-between">
                <h3 className="border-dashed border-b-[1.5px] border-gray-700/50 hover:text-white flex items-center gap-3">SpaceX Clone<MdArrowOutward/></h3>
                <div className="flex gap-5 text-[20px]">
                  <p className="cursor-pointer hover:text-white">
                    <a href="https://github.com/chatbot-1/spaceX_clone"><FaGithub /></a>
                  </p>
                  <p className="pl-[5px] cursor-pointer hover:text-white">
                    <a href="http://atulsingh.me/spaceX_clone/"><FaEarthAmericas /></a>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-[30px] text-[13px]">
              <li className="mb-[10px]">
                Created SpaceX clone using fronend fundamentals and some basic animation and by addind some basic info of spacecraft.
              </li>
              <li className="flex text-[30px] gap-7 pt-4 items-center justify-start">
                <DiHtml5 /> <DiCss3 /> <DiJavascript1 />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
