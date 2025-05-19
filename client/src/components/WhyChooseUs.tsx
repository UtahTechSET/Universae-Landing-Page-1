import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="sm:relative mb-16 container mx-auto px-4">
      <div className="sm:absolute right-10 md:-top-8 big-red-line w-[15em] h-[3px] mb-5"></div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <span className="red-line w-[10em] mt-[1.2em] h-[2.5px]"></span>
            <div>
              <h3 className="mb-4 text-4xl">
                <span className="font-choplin-light">Why </span>
                <span className="font-choplin-medium">Choose Us?</span>
              </h3>
  
              <p className="text-secondary text-xs mb-4">
                Learn by building real projects with real code and tools — no
                fluff, just hands-on experience. You'll gain in-demand skills in
                full-stack development, cloud, and agile, while working alongside
                UX Design students for real-world collaboration.
              </p>
  
              <p className="text-secondary text-xs mb-8">
                Choose to learn on campus or online with our flexible HyFlex
                format, and finish your degree in just 16 months (30 credits).
                Courses are taught by industry pros, tuition is affordable, and
                scholarships are available. No coding experience? No problem.
              </p>
  
              <Button className="rounded-none text-background bg-primary font-light px-8 py-2">
                Start Your Journey
              </Button>
            </div>
          </div>

          <div className="hidden md:visible  md:flex  md:items-center  md:justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute top-0 left-5 w-3/4 h-[20.02em] bg-primary"></div>

              <div className="absolute top-6 -left-5 w-5/6 h-[20.02em] bg-muted">
                <iframe src="https://drive.google.com/file/d/1pvMTCPgRobm_YQyhhTb4BI0mAfnkiuLS/preview" 
                  allow="autoplay" className="w-full h-full"></iframe>
              </div>
            </div>
          </div>
          <div className="big-red-line ml-3 mt-8 w-[90%] h-[3px]"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
