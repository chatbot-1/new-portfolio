import cover from "../assets/cover.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className="container flex items-center justify-center mt-[50px]"
    >
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center mt-[50px]">
        <div className="">
          <img
            src={cover}
            alt=""
            className="h-[200px] m-0 sm: md:m-auto lg:m-auto xl:m-auto rounded-full object-cover w-[200px]"
          />
        </div>
        <div className="mt-[40px]">
          <h2 className="text-[22px] ">Heyy, I'm Atul 👋</h2>
          <p className="my-[20px] text-[13px]">
            Driven by the potential of technology to create meaningful change, I
            am a software engineer passionate about developing impactful
            solutions that enhance learning experiences and solve real-world
            challenges.
          </p>

          <a
            download=""
            href="https://drive.google.com/file/d/1hrFd7M8MpFMyUgzy7nomqvgSy6LsIrcV/view?usp=sharing"
            className="rounded pt-[10px] pb-[10px] pl-[18px] pr-[18px] text-[14px] ease-in-out duration-300 bg-gray-700 hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
