
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
                  Software Developer Intern
                </h3>
                <div>
                  <h3 className="cursor-pointer hover:text-white text-[14px]">
                    InventMinds Inc.
                  </h3>
                  <p className="text-[12px] text-gray-400">
                    Feb 2024 – Current
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[13px]">
                  Leading the development of our groundbreaking product by
                  collaborating across teams, crafting a robust backend with
                  Azure Functions (Python), ensuring seamless integration with
                  the ReactJS and TypeScript frontend. Streamlining operations
                  through DevOps CI/CD, managing ongoing production on Azure,
                  utilizing SQL Database and Static Web Apps for hosting.
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

            <div className=" cursor-pointer exp-2 p-5 mt-[50px] shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90">
              <div className="flex justify-between gap-6">
                <h3 className="cursor-pointer hover:text-white flex items-center gap-3">
                  Entrepreneurial Intern
                </h3>
                <div>
                  <h3 className="cursor-pointer hover:text-white text-[14px]">
                    E-cell IIT Madras
                  </h3>
                  <p className="text-[12px] text-gray-400">
                    Aug 2021 – Feb 2022
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-[13px]">
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
