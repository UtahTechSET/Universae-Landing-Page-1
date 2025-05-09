import MediaBlock from "./MediaBlock";

const SecondHeadline = () => {
  return (
    <section className="md:-mb-2 mt-6 md:mt-0">
      <div className="text-center mb-4">
        <h3 className="text-foreground font-light text-lg">Smaller headline</h3>
        <h2 className="text-foreground text-2xl md:text-3xl">
          <span className="font-bold">Second </span>
          <span className="font-bold text-primary">Headline</span>
        </h2>
      </div>

      <div className="md:grid md:grid-cols-2 md:h-[25em]">
        <div className="md:relative
          flex items-center justify-center  mb-5"> 
          <div className="w-3/4 md:absolute  md:-right-[3em]">
            <MediaBlock type="video" color="light" className="mb-4 w-[15em] h-2/5" />
  
            <div className="w-5/6">
              <p>
                <span className="red-line"></span>
                <span className="font-bold">Testimonials</span>
              </p>
              <p className="text-secondary text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
            </div>          
          </div>
        </div>

        <div className="md:relative
          flex items-center justify-center mb-5">
          <div className="md:absolute md:top-[5em] w-3/4 md:left-[1em]">
            <MediaBlock type="video" color="dark" className="mb-4 w-[15em] h-2/5" />
  
            <div className="w-5/6">
              <p className="mb-2">
                <span className="red-line"></span>
                <span className="font-bold">Gamification</span>
              </p>
              <p className="text-secondary text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeadline;
