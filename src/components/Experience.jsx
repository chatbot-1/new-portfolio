import { MdArrowOutward } from "react-icons/md";
const Experience = () => {
  return (
    <div id="experience" className="container mt-[100px]">
      <div className="exp-area ">
        <div className="card">
          <h2 className="text-[22px]">Working Experience 💪:</h2>
          <div className="mt-[25px] border border-dashed rounded p-6 pt-10 pb-10 border-gray-700/50">
            <div className=" cursor-pointer exp-1 p-5 shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
              <div className="flex justify-between gap-6">
                <h3 className="cursor-pointer hover:text-white flex items-center gap-3">
                  Software Developer
                </h3>
                <div>
                  <a href="https://www.ednius.com/" className="cursor-pointer hover:text-white text-[14px] flex items-center gap-2">
                    Ednius Inc. <MdArrowOutward/>
                  </a>
                  <p className="text-[12px] text-gray-400">
                    June 2024 – Current
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[13px]">
                  Developed and refined AI-powered grading platform at Ednius,
                  utilizing React, TypeScript, Azure, and Python to automate
                  grading and enhance personalized feedback for students. <br />{" "}
                  • Designed efficient systems and deployed them in cloud
                  environments to improve learning outcomes. <br /> •
                  Collaborated with cross-functional teams to deliver scalable
                  solutions for impactful educational technology.
                </p>
              </div>
            </div>

            <div className=" cursor-pointer mt-[50px] exp-1 p-5 shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
              <div className="flex justify-between gap-6">
                <h3 className="cursor-pointer hover:text-white flex items-center gap-3">
                  Software Developer Intern
                </h3>
                <div>
                  <a href="https://www.ednius.com/" className="cursor-pointer hover:text-white text-[14px] flex items-center gap-2">
                    Ednius Inc. <MdArrowOutward/>
                  </a>
                  <p className="text-[12px] text-gray-400">
                    Feb 2024 – May 2024
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[13px]">
                  Developed an AI-powered grading tool at Ednius, collaborating
                  with a team to automate grading and enhance student feedback.
                  Utilized React, TypeScript, Azure, and Python to create
                  scalable solutions in a fast-paced, remote environment. <br /> •
                  Automated grading process and provided personalized feedback
                  for students. • Utilized React, TypeScript, Azure, and Python
                  to create scalable solutions. <br /> • Gained insights into
                  cloud-based software development and AI integration.
                </p>
              </div>
            </div>

            <div className=" cursor-pointer exp-1 p-5 mt-[50px] shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
              <div className="flex justify-between gap-6">
                <h3 className="cursor-pointer hover:text-white flex items-center gap-3">
                  Frontend Developer Intern
                </h3>
                <div>
                  <h3 className="cursor-pointer hover:text-white text-[14px]">
                    Final Project
                  </h3>
                  <p className="text-[12px] text-gray-400">
                    May 2023 – June 2023
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[13px]">
                  Spearheaded frontend development for machine learning
                  projects, embedding user-centric design principles.
                  Collaborating seamlessly with machine learning teams,
                  integrated frontend design tools to ensure intuitive and
                  responsive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
