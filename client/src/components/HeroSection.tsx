
import heroImage from "../../../public/images/hero1.jpg";


const HeroSection = () => {
  return (
    <section
      className="sm:flex sm:flex-row sm:gap-4 bg-gray-200 sm:pl-8 sm:pt-12
      py-5 border-b-[2.5em] border-foreground"
    >
      <div className="w-full mb-5 ml-0 flex flex-row justify-center items-center md:ml-[3em] ">
        <img src={heroImage} className="w-1/2 max-w-[25em] sm:w-full sm:min-h-[267px] sm:min-w-[267px]"></img>
      </div>

      <div className="mb-4 flex">
        <div
          className="red-line h-[2.5px] inline-block ml-5 w-[12em] mt-4
          sm:ml-0 sm:w-[8em]"
        ></div>
        <div className="inline-block mr-5">
          <h2 className="mb-4 text-foreground font-choplin-light text-xl md:text-2xl">
            Earn a U.S. Degree With{" "}
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
              Universae{" "}
            </span>
            <br />
            and{" "}
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
            Utah Tech University
            </span>
            <br />
            Study{" "}
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
            Online{" "}
            </span>
            or{" "}
            <span className="text-foreground font-choplin-medium text-xl md:text-2xl">
            on campus
            </span>
          </h2>
          
          <div className="w-[90%] sm:w-[75%]">
            <p className="text-secondary text-sm mb-4">
              Through an academic partnership with Universae, international students have a direct, 
              affordable pathway to earn a U.S. bachelor's degree in technology from Utah Tech University. 
              Transfer up to 90 eligible credits from Universae and complete a degree in as little as two years.
            </p>

            <p className="text-secondary text-sm">
              Choose from two high-demand programs—software engineering or information technology—and
              gain hands-on experience through real-world projects using industry-standard tools.
            </p>

            <ul className="listwithcheckmark text-secondary text-sm mt-5 pl-4">
              <li>HyFlex learning: study online, in person or both</li>
              <li>Merit-based scholarships available for international students</li>
              <li>Transfer up to 90 credits from Universae toward a U.S. degree</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
