const BenefitsCurriculum = () => {
  return (
    <section className="sm:h-[24em] sm:left-7 sm:w-[95%] py-6">
      <div className="container mx-auto px-4">

        {/* Benefits section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start 
            w-full bg-[#6F6E6E] p-10 ">
            <span className="red-line h-[2px] bg-black w-[8em] mt-[16px]"></span>
            <div>
              <h3 className="mb-3">
                <span className="text-2xl font-choplin-medium">Benefits</span>
              </h3>
              <p className="text-secondary text-xs mb-4">
                Utah Tech's polytechnic approach prepares students for today's
                workforce. The curriculum emphasizes applied learning,
                collaboration and industry experience. Small class sizes and expert
                faculty create an environment where students succeed.
              </p>
              <p className="text-secondary text-xs">
                Being located in St. George, attending Utah Tech means a low 
                cost of living, beautiful surroundings and proximity close to Las Vegas. 
                Students can choose fully online or in-person options through 
                flexible HyFlex delivery.
              </p>
            </div>
          </div>

          {/* Image div */}
          <div className="flex justify-center items-center w-full">
            <div className="bg-[#6F6E6E] w-1/2 h-1/2">
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col md:flex-row ">
            <span className="red-line h-[2px] bg-black w-[8em] sm:w-[2em] mt-[16px]"></span>
            <div>
              <h3 className="mb-3">
                <span className="text-2xl font-choplin-medium">Curriculum</span>
              </h3>
  
              
              <h4 className="text-sm font-bold mb-2">Software engineering courses include:</h4>
              <ul className="text-secondary text-xs mb-3 list-disc ml-5">
                <li>Fundamentals of app development </li>
                <li>Software testing and quality</li>
                <li>Software project management </li>
                <li>Software architecture and design </li>
              </ul>
  
  
              <h4 className="text-sm font-bold mb-2">Information technology courses include:</h4>
              <ul className="text-secondary text-xs mb-3 list-disc ml-5">
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