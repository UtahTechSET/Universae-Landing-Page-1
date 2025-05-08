import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="relative mb-12 sm:mb-16 container mx-auto px-4">
      <div className="absolute right-2 sm:right-10 big-red-line w-[8em] sm:w-[15em] h-[2px] sm:h-[3px] hidden sm:block"></div>

      <div className="mt-6 sm:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="mb-3 sm:mb-4">
              <span className="red-line w-4 sm:w-auto"></span>
              <span className="font-bold text-base sm:text-lg">Why </span>
              <span className="font-bold text-base sm:text-lg">Choose Us?</span>
            </h3>
            
            <p className="text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.
            </p>
            
            <p className="text-secondary text-xs sm:text-sm mb-6 sm:mb-8">
              Feugiat in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
            
            <Button className="rounded-none text-background bg-primary px-6 sm:px-8 py-1.5 sm:py-2 text-sm sm:text-base">
              Call to Action
            </Button>
          </div> 
          
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              {/* Red cross-like shape made from two overlapping rectangles */}
              <div className="absolute top-0 left-5 w-3/4 h-5/6 bg-primary"></div>
              
              {/* Gray square that appears in front */}
              <div className="absolute top-12 -left-5 w-3/4 h-5/6 bg-muted z-20"></div>
            </div>
          </div>
          <div className="big-red-line ml-0 sm:ml-3 mt-8 w-full sm:w-[90%] h-[2px] sm:h-[3px]"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;