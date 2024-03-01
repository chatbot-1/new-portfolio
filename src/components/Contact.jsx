import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="text-[13px] xl:text-[16px] md:text-[15px] sm:text-[14px] container mt-[100px] mb-[60px]">
      <div>
        <h2 className="text-[22px]">Reach out to me at 🤝:</h2>
        <div className="flex justify-evenly mt-[50px]">
          <div className="flex flex-col gap-10">
            <a
              href="https://twitter.com/itsmeatul_"
              className="flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <FaTwitter />
                Twitter
              </p>
              <MdArrowOutward/>
            </a>
            <a
              href="https://www.linkedin.com/in/atulsingh01/"
              className="flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <FaLinkedinIn />
                LinkedIn
              </p>
              <MdArrowOutward/>
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <a
              href="https://github.com/chatbot-1"
              className="flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <FaGithub />
                GitHub
              </p>
              <MdArrowOutward/>
            </a>
            <a
              href="https://www.instagram.com/justtatul/"
              className="flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <FaInstagram />
                Instagram
              </p>
              <MdArrowOutward/>
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <div
              onClick={() => window.location.href = 'mailto:getupmaverick@gmail.com'}
              className="flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <BiLogoGmail />
                Email
              </p>
              <MdArrowOutward/>
            </div>
            <a
              href="https://discordapp.com/users/885203531483742219"
              className="flex justify-center items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white"
            >
              <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                <FaDiscord />
                Discord
              </p>
              <MdArrowOutward/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
