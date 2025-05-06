import MediaBlock from "./MediaBlock";

const SecondHeadline = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-foreground font-light text-lg">Smaller headline</h3>
        <h2 className="text-foreground text-2xl md:text-3xl">
          <span className="font-bold">Second </span>
          <span className="font-bold text-primary">Headline</span>
        </h2>
      </div>

      <div className="grid ml-8 grid-cols-1 md:grid-cols-2">
        <div className="w-3/4">
          <MediaBlock type="video" color="light" className="mb-4" />

          <div>
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

        <div className="mt-8 w-3/4">
          <MediaBlock type="video" color="dark" className="mb-4" />

          <div>
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
    </section>
  );
};

export default SecondHeadline;
