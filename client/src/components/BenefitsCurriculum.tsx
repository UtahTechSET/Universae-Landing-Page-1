import benefitsImage from "../../../public/images/benefits.jpg";
import curriculumImage from "../../../public/images/curriculum.jpg";


const BenefitsCurriculum = () => {
  return (
    <section className="pt-6">
      <div className="">

        {/* Benefits section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start 
            w-full bg-[#6F6E6E] p-10 lg:py-[5em]">

            <img className="sm:hidden mb-5" src={benefitsImage}></img>
            
            <span className="red-line h-[2px] bg-red w-[8em] mt-[16px]"></span>
            <div>
              <h3 className="mb-3">
                <span className="text-2xl md:text-3xl font-choplin-medium">Benefits</span>
              </h3>
              <p className="text-[#D9D9D9] text-xs lg:text-sm mb-4">
                Utah Tech's polytechnic approach prepares students for today's
                workforce. The curriculum emphasizes applied learning,
                collaboration and industry experience. Small class sizes and expert
                faculty create an environment where students succeed.
              </p>
              <p className="text-[#D9D9D9] text-xs lg:text-sm">
                Being located in St. George, attending Utah Tech means a low 
                cost of living, beautiful surroundings and proximity close to Las Vegas. 
                Students can choose fully online or in-person options through 
                flexible HyFlex delivery.
              </p>
            </div>
          </div>

              {/* Image div */}
          <div className="hidden sm:block w-full sm:ml-4 lg:ml-[4em] sm:relative">
            <div className="
              bg-[#6F6E6E]
              sm:absolute sm:top-[3.5em] sm:left-8 sm:w-[17em] sm:h-[11em] 
              md:w-[20em] md:h-[13em] md:top-9 md:left-10
              lg:w-[25em] lg:h-[17em] lg:top-7 lg:left-[4em] "
              >
            </div>
            <img className=" 
              bg-[#6F6E6E] 
              sm:w-[17em] sm:absolute sm:top-10 sm:left-5 
              md:w-[20em] md:top-5
              lg:w-[25em] md:left-7
              lg:top-4 lg:left-[3em]" 
              src={benefitsImage}>
            </img>
          </div>
        </div>

        
        {/* Curriculum Section */}
        <div className="
          pt-8 pb-4 bg-muted grid grid-cols-1 
          md:pb-[5em] sm:grid-cols-2 md::gap-[3em]">

              {/* Image div */}
          <div className="flex justify-center h-full px-10
            md:pl-8 md:flex-row md:justify-end sm:pr-0 s">
            <img className="sm:h-[13.5em] md:h-[78%] lg:h-[85%] md:mr-5" src={curriculumImage}></img>
          </div>
          
          <div className="flex flex-col md:flex-row ml-12 sm:ml-4 md:pl-4 md:pt-4 lg:pl-[3em] lg:pt-10">
            <span className="red-line h-[4px] w-[8em] sm:w-[2em] mt-[16px] md:mt-[18px] lg:mt-[19px]"></span>
            <div>
              <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-choplin-medium">
                Curriculum
              </h3>
  
              
              <h4 className="text-sm md:text-lg lg:text-xl font-bold mb-2">Software engineering courses include:</h4>
              <ul className="text-secondary text-xs md:text-sm mb-3 list-disc ml-5">
                <li>Fundamentals of app development </li>
                <li>Software testing and quality</li>
                <li>Software project management </li>
                <li>Software architecture and design </li>
              </ul>
  
  
              <h4 className="text-sm md:text-lg lg:text-xl font-bold mb-2">Information technology courses include:</h4>
              <ul className="text-secondary text-xs md:text-sm mb-3 list-disc ml-5">
                <li>Networking essentials</li>
                <li>Cybersecurity principles</li>
                <li>Systems administration</li>
                <li>Database management</li>
              </ul>
            </div>
          </div>
          
        </div>
          
      </div>
    </section>
  );
};

export default BenefitsCurriculum;