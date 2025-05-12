import MediaBlock from "./MediaBlock";

const HeroSection = () => {
  return (
    <section className=" sm:flex sm:flex-row sm:gap-8 sm:mb-16 bg-gray-200 sm:px-8 sm:py-12
      py-5">
      <div className="w-full mb-5 md:w-2/5 flex flex-row justify-center items-center">
        <MediaBlock type="video" color="dark" className=" h-[15em]"/>
      </div>

      <div className="mx-5">
        <h2 className="mb-4">
          <span className="red-line"></span>
          <span className="text-foreground font-bold text-xl md:text-2xl">
            Hero{" "}
          </span>
          <span className="text-foreground font-light text-xl md:text-2xl">
            Headline
          </span>
        </h2>

        <p className="text-secondary text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in.
        </p>

        <p className="text-secondary text-sm">
          Feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis
          dolore te feugait nulla facilisi.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
