import React from "react";

const Experience = () => {
  return (
    <div className="container mt-[100px]">
      <div className="exp-area ">
        <div className="card">
          <h2 className="text-[25px]">Working Experience :</h2>
          <div className="mt-[25px] border border-dashed rounded p-6 border-gray-700/50">
            <div className="exp-1 p-5 shadow-lg shadow-gray-800/20 hover:shadow-gray-800/50">
              <div className="flex justify-between gap-3">
                <h3>Frontend Developer Intern</h3>
                <div>
                  <h3>Final Project</h3>
                  <p className="text-[12px] text-gray-400">May 2023 – June 2023</p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[14px]">
                  Contributed to a machine learning project, spearheading the
                  development of the frontend using robust tech stacks like
                  ReactJS, Redux, HTML/CSS, Tailwind CSS and Firebase.
                </p>
              </div>
            </div>
            <div className="exp-2 p-5 mt-[50px] shadow-lg shadow-gray-800/20 hover:shadow-gray-800/50">
              <div className="flex justify-between">
                <h3>Entrepreneurial Intern</h3>
                <div>
                  <h3>E-cell IIT Madras</h3>
                  <p className="text-[12px] text-gray-400">Aug 2021 – Feb 2022</p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-[14px]">
                  Revitalized our college E-cell with my teammates, mirroring
                  the success model of IIT Madras E-cell, along with 20 other
                  colleges. Clinched the coveted top e-cell designation at the
                  end of the tenure.
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
