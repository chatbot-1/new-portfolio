import cover from "../assets/cover.jpeg";
import resume from "../assets/resume.pdf"

const Hero = () => {

  
  return (
    <div id="home" className="container flex items-center justify-center mt-[50px]">
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
          <p className="mt-[20px] text-[13px]">
          your go-to frontend maestro with a full stack twist. When I'm not sculpting pixels and wrangling bugs, I'm dancing through JavaScript frameworks.
          </p>
          <p className="mt-[20px] text-[13px] mb-[30px]">
          Known for fixing bugs with a stare and turning code into art, I'm here to sprinkle some frontend magic on your projects. Let's turn your digital dreams into reality!
          </p>
          <a download="" href={resume} className="rounded pt-[10px] pb-[10px] pl-[18px] pr-[18px] text-[14px] ease-in-out duration-300 bg-gray-700 hover:bg-gray-800">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
