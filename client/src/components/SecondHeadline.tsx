import MediaBlock from "./MediaBlock";


// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);


const SecondHeadline = () => {


  // useGSAP(() => {
  //   gsap.from('#stories', {
  //     y: 150,
  //     // repeat: -1,
  //     scrollTrigger: {
  //       trigger: '#stories',
  //       start: 'top bottom',
  //       end: 'top 70%',
  //       scrub: true,
  //     },
  //     ease: 'power1.inOut',

  //   })
  // }, []);

  
  
  return (
    <section className="md:-mb-2 mt-6 md:mt-0">
      <div className="text-center mb-4">
        <h3 className="text-foreground font-choplin-light text-lg">
          "This is something I'll
          <br />
          use for the rest of my life"
        </h3>
        <h2 className="text-foreground text-2xl md:text-3xl">
          <span className="font-choplin-medium">Student </span>
          <span className="font-choplin-medium text-primary">Stories</span>
        </h2>
      </div>

      <div id="stories">
      
        <div className="md:grid md:grid-cols-2 md:h-[25em] ml-[20%] sm:ml-[30%] md:ml-0">
          <div className="md:relative mb-5"> 
            <div className="w-3/4 md:absolute  md:-right-[3em]">
              {/* <MediaBlock type="video" color="light" className="mb-4 w-[15em] h-2/5" /> */}
              <div className="mb-4 w-[15em] h-[15em]">
                <iframe src="https://drive.google.com/file/d/1MqKUM_45dXKkdaksWRqaz5Z-DG45wWIT/preview" 
                  allow="autoplay" className="w-full h-full"></iframe>
              </div>
              <div className="w-5/6">
                <p>
                  <span className="red-line w-[1em] h-[2px]"></span>
                  <span className="font-bold">Testimonials</span>
                </p>
                <p className="text-secondary text-xs ml-2 w-full sm:w-5/6">
                  Paula, an international student from Spain,
                  reflects on the real-world learning she gained
                  in the Computer Science program.
                </p>
              </div>          
            </div>
          </div>
  
          <div className="md:relative mb-5 md:ml-5">
            <div className="md:absolute md:top-[5em] w-3/4 md:left-[1em]">
              <MediaBlock type="video" color="dark" className="mb-4 w-[15em] h-2/5" />
    
              <div className="w-5/6">
                <h2 className="mb-2">
                  <span className="red-line w-[1em] h-[2px]"></span>
                  <span className="font-bold">Can You Solve It?</span>
                </h2>
                <p className="text-secondary text-xs ml-2 w-full sm:w-5/6">
                  Test your problem-solving skills with a
                  challenge built by real MSD students. If this
                  gets your gears turning, you’re in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeadline;
