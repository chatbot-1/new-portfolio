import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="container mt-[100px] mb-[60px]">
      <div>
        <h2 className="text-[25px]">React out to me at:</h2>
        <div className="flex justify-center mt-[30px]">
          <div className="flex flex-col gap-9">
            <span className="flex items-center gap-2 border-b-2">
              Twitter
              <FaTwitter />
            </span>
            <span className="flex items-center gap-2 border-b-2">
              LinkedIn
              <FaLinkedinIn />
            </span>
          </div>
          <div className="flex flex-col gap-9">
            <span className="flex items-center gap-2 border-b-2">
              GitHub
              <FaGithub />
            </span>
            <span className="flex items-center gap-2 border-b-2">
              Instagram
              <FaInstagram />
            </span>
          </div>
          <div className="flex flex-col gap-9">
            <span className="flex items-center gap-2 border-b-2">
              Email
              <BiLogoGmail />
            </span>
            <span className="flex items-center gap-2 border-b-2">
              Discord
              <FaDiscord />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
