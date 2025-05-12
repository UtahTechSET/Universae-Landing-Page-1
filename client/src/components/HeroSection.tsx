import MediaBlock from "./MediaBlock";

const HeroSection = () => {
  return (
    <section className=" sm:flex sm:flex-row sm:gap-4 sm:mb-16 bg-gray-200 sm:px-8 sm:pt-12
      py-5">
      <div className="w-full mb-5 md:w-2/5 flex flex-row justify-center items-center">
        <MediaBlock type="video" color="dark" className="h-[15em]"/>
      </div>

      <div className="mb-4 flex">
        <div className="red-line h-[2.5px] inline-block ml-5 w-[12em] mt-4
          sm:ml-0 sm:w-[8em]"></div>
        <div className="inline-block mr-5">
          <h2 className="mb-4">
            <span className="text-foreground font-bold text-xl md:text-2xl">
              16 Months{" "}
            </span>
            <span className="text-foreground font-light text-xl md:text-2xl">
              to master
            </span>
            <br/>
            <span className="text-foreground font-light text-xl md:text-2xl">
              today's{" "}
            </span>
            <span className="text-foreground font-bold text-xl md:text-2xl">
              top tech{" "}
            </span>
            <span className="text-foreground font-light text-xl md:text-2xl">
              skills
            </span>
          </h2>
          <p className="text-secondary text-sm mb-4">
            The Master's of Software Development is a 30-credit program designed
            to prepare you for a career in tech — even if you don't have a coding
            background.
          </p>
  
          <p className="text-secondary text-sm">
            You'll build real software using industry-standard tools and colloborate
            with UX Design stuedents to gain cross-disciplinary experience. The curriculum
            focuses on full-stack development, cloud technologies, and agile practices.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
