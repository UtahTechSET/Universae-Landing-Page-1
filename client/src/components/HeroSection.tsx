
import heroImage from "../../../public/images/hero1.jpg";


const HeroSection = () => {
  return (
    <section
      className="sm:flex sm:flex-row sm:gap-4 bg-gray-200 sm:pl-8 sm:pt-12
      py-5"
    >
      <div className="w-full mb-5 ml-0  flex flex-row justify-center items-center
         md:ml-[3em] ">
        <img src={heroImage} className="w-1/2 sm:w-full sm:min-h-[267px] sm:min-w-[267px]"></img>
      </div>

      <div className="mb-4 flex">
        <div
          className="red-line h-[2.5px] inline-block ml-5 w-[12em] mt-4
          sm:ml-0 sm:w-[8em]"
        ></div>
        <div className="inline-block mr-5">
          <h2 className="mb-4">
            <span className="text-foreground font-choplin-light text-xl md:text-2xl">
              Earn a U.S. Degree
            </span>
            <br />
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
              Online{" "}
            </span>
            <span className="text-foreground font-choplin-light text-xl md:text-2xl">
              or{" "}
            </span>
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
              On Campus
            </span>
          </h2>
          <div className="w-[90%] sm:w-[75%]">
            <p className="text-secondary text-sm mb-4">
              Utah Tech University offers international students a flexible,
              affordable path to complete a bachelor's degree in tech.
              Transfer up to 90 credits and finish your degree in as little as
              two years.
            </p>

            <p className="text-secondary text-sm">
              Choose from two in-demand programs: software
              engineering or information technology. Students gain
              hands-on experience through real-world projects and use
              the same tools and platforms professionals rely on.
            </p>

            <ul className="listwithcheckmark text-secondary text-sm mt-5 pl-4">
              <li className="">Hyflex learning: attend online or in-person</li>
              <li className="">Scholarships available for international students</li>
              <li className="">Tranfser up to 90 credits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
