import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState("#home");

  return (
    <div className="flex p-[15px] head-point justify-end w-full m-auto fixed top-0 left-0 z-50 ">
      <ul className="container flex justify-center xl:justify-end lg:justify-end md:justify-end sm:justify-center text-[12px] xl:text-[14px] lg:text[14px] md:[14px] sm:text[13px] items-center gap-[25px]">
        <li>
          <a
            href="#home"
            onClick={() => setNavActive("#home")}
            className={
              navActive === "#home" ? "text-gray-100" : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i>{" "}
            <span  class="material-symbols-outlined">home</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setNavActive("#experience")}
            className={
              navActive === "#experience"
                ? "text-gray-100"
                : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i> Experience
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => setNavActive("#project")}
            className={
              navActive === "#project" ? "text-gray-100" : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i> Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setNavActive("#contact")}
            className={
              navActive === "#contact" ? "text-gray-100" : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
