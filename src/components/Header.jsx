import React, { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState("#home");

  return (
    <div className="flex justify-end mt-[35px]">
      <ul className="flex justify-center  items-center gap-[25px]">
        <li>
          <a
            href="#home"
            onClick={() => setNavActive("#home")}
            className={
              navActive === "#home" ? "text-gray-100" : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i> <span class="material-symbols-outlined">
home
</span>
          </a>
        </li>
        <li>
          <a
            href="#home"
            onClick={() => setNavActive("#experience")}
            className={
              navActive === "#experience" ? "text-gray-100" : "hover:text-gray-100"
            }
          >
            <i className="uil uil-estate nav--icon"></i> Experience
          </a>
        </li>
        <li>
          <a
            href="#home"
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
            href="#home"
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
