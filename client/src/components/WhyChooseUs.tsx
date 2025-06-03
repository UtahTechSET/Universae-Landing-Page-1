import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="sm:relative mb-16 container mx-auto px-4">
      <div className="sm:absolute right-10 md:-top-8 big-red-line w-[15em] h-[3px] mb-5"></div>

      <div className="mt-8 sm:-ml-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            
            <div className="md:hidden visible flex items-center justify-center relative w-full">
              <div className="">
                <iframe src="https://drive.google.com/file/d/1pvMTCPgRobm_YQyhhTb4BI0mAfnkiuLS/preview" 
                  allow="autoplay" className="w-full h-full" allowFullScreen></iframe>
              </div>
            </div>

            <span className="red-line w-[5em] mt-[1.2em] h-[2.5px]"></span>

            <div>
              <h3 className="mb-4 text-4xl">
                <span className="font-choplin-light">Why </span>
                <span className="font-choplin-medium">Choose Us?</span>
              </h3>

              <ul className="list-inside">
                <li className="mb-5 text-sm before:content-['\2705']">Career-ready skills in software engineering, cybersecurity,
                DevOps, and app development.</li>
                <li className="mb-5 text-sm before:content-['\2705']">Flexible HyFlex learning online, in person, or both.</li>
                <li className="mb-5 text-sm before:content-['\2705']">Hands-on experience via internships and projects.</li>
                <li className="mb-5 text-sm before:content-['\2705']">Merit-based scholarships for qualifying transfers.</li>
                <li className="mb-5 text-sm before:content-['\2705']">Easy credit transfer from Universae to Utah Tech degrees.</li>

              </ul>
         
  
              <Button className="rounded-none text-background bg-primary font-light px-8 py-2 
                hover:scale-110 transform transition duration-y mt-8">
                Start Your Journey
              </Button>
            </div>
          </div>


          <div className="hidden md:visible  md:flex  md:items-center  md:justify-center">
            <div className="relative w-full h-80">
              <div className="absolute top-0 left-5 w-full h-[17.5em] bg-primary"></div>

              <div className="absolute top-6 -left-5 w-full h-[17.5em] bg-muted">
                {/* <iframe src="https://drive.google.com/file/d/1pvMTCPgRobm_YQyhhTb4BI0mAfnkiuLS/preview" 
                  allow="autoplay" className="w-full h-full" allowFullScreen></iframe> */}
                <iframe className="w-full h-full" allow="autoplay" allowFullScreen
                  src="https://drive.google.com/file/d/1gZBwvVhIBYubbKeviHbVJH-8ghDNUOmt/preview"></iframe>
              </div>
            </div>
          </div>
          <div className="big-red-line ml-3 sm:mt-8 w-[90%] h-[3px]"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
