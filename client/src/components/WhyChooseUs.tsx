import { Button } from "@/components/ui/button";
import { useState } from 'react';
import videoImage from "../../../public/images/temp_thumbnail.jpg";



const WhyChooseUs = () => {
  const [clickedOnVideo, setclickedOnVideo] = useState(false);
  
  function handleClick() {
    setclickedOnVideo(true);
  }
  
  return (
    <section className="sm:relative mb-16 container mx-auto px-4">
      <div className="sm:absolute sm:right-10 sm:top-5 big-red-line w-[15em] h-[3px]"></div>

      <div className="pt-[2em] sm:-ml-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            
            <div className="md:hidden visible flex items-center justify-center relative w-full">
              <div className="border mb-8 shadow-lg">
                <iframe src="https://drive.google.com/file/d/1gZBwvVhIBYubbKeviHbVJH-8ghDNUOmt/preview" 
                  allow="autoplay" className="w-full h-full" allowFullScreen></iframe>
              </div>
            </div>

            <span className="red-line w-[5em] mt-[1.2em] h-[2.5px]"></span>

            <div>
              <h3 className="mb-4 text-4xl">
                <span className="font-choplin-light">Why </span>
                <span className="font-choplin-medium">Choose Us?</span>
              </h3>

              <ul className="listwithcheckmark ml-4">
                <li className="mb-5 text-sm">Career-ready skills in software engineering, cybersecurity,
                DevOps, and app development.</li>
                <li className="mb-5 text-sm">Flexible HyFlex learning — online, in person or both.</li>
                <li className="mb-5 text-sm">Hands-on experience through internships and real-world projects.</li>
                <li className="mb-5 text-sm">Merit-based scholarships available for qualifying transfer students.</li>
                <li className="mb-5 text-sm">Seamless credit transfer from Universae to Utah Tech degree programs.</li>
              </ul>
         
  
              <Button className="rounded-none text-background bg-primary font-light px-8 py-2 
                hover:scale-110 transform transition duration-y mt-8">
                <a href="javascript:void( window.open( 'https://form.jotform.com/251595236042152', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=700, screenX=300, screenY=150') )" className="w-full h-full">
                  Start Your Journey
                </a>
              </Button>
            </div>
          </div>


          <div className="hidden md:visible  md:flex  md:items-center  md:justify-center">
            <div className="relative w-full h-80 max-w-[28em]">
              <div className="absolute top-0 left-5 w-full h-[17.5em] bg-primary"></div>

              {/* New Section with thumbnail */}
              <div className="absolute top-6 -left-5 w-full h-[17.5em] bg-muted  shadow-lg">
                {clickedOnVideo
                  ? <iframe className="w-full h-full" allow="autoplay" allowFullScreen
                    src="https://drive.google.com/file/d/1gZBwvVhIBYubbKeviHbVJH-8ghDNUOmt/preview?start=1"></iframe>
                  : <img src={videoImage} onClick={handleClick} className="w-full h-full object-cover"></img>
                }
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
