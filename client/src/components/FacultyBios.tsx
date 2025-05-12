const FacultyBios = () => {
  return (
    <section className="sm:absolute sm:top-[22em]">
      <div className="sm:grid sm:grid-cols-12 sm:gap-4">
        <div
          className="sm:col-span-4 sm:pt-[60px] sm:pl-[3em]
          col-span-12 bg-primary px-4 ">
          <h3 className="text-white font-light text-2xl mb-1">
            Meet our{" "} 
            <span className=" font-bold">Expert</span>
            <br />
            Faculty
          </h3>
          <p className="text-white text-sm mb-4">Department of Computing</p>
        </div>
      </div>

      <div
        className="sm:flex sm:flexbox sm:-mt-[70px]
        bg-muted-foreground pt-5 px-5">
        <div className="sm:mt-12 pl-[1em] flex items-center sm:w-1/3 mb-7">
          <div>
            <span className="block red-line mt-3 h-[4px]"></span>
            <span className="font-bold">Meet Your Instructors</span>
            <p className="text-secondary text-xs w-3/4">
              Learn from Faculty with Real-World
              Experience and a Passion for Teaching.
            </p>
          </div>
        </div>

        <div className="sm:relative sm:grid sm:grid-cols-3 sm:gap-4">
          {["Joe Francom, PH.D", "Jeff Compas, MSCS", "Lora Klein"].map((item) => (
            <div key={item} className="relative flex flex-col items-center">
              <button className="absolute top-5 sm:left-4 h-6 mb-4 px-4 
                bg-transparent text-xs text-[--red] border-solid border-[--red] border-2
                hover:bg-[--red] hover:text-background">
                about
              </button>
              <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2"></div>
              <p className="font-sm text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyBios;
