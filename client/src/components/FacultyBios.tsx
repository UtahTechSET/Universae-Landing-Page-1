const FacultyBios = () => {
  
  const showFacultyAbout = (prof: String) => {
    console.log('Button clicked!', prof);
  };

  
  
  return (
    <section className="md:absolute md:top-[22em] mt-15">
      <div className="md:grid md:grid-cols-12 md:gap-4">
        <div
          className="md:col-span-4 md:pt-[60px] md:pl-[3em]
          col-span-12 bg-primary px-4 ">
          <h3 className="text-white font-choplin-light text-2xl mb-1">
            Meet our{" "} 
            <span className=" font-choplin-medium">Expert</span>
            <br />
            Faculty
          </h3>
          <p className="text-white text-sm pb-2">Department of Computing</p>
        </div>
      </div>

      <div
        className="md:flex md:flexbox md:-mt-[70px]
        bg-muted-foreground pb-5 sm:pt-5 sm:px-5 sm:pb-0">
        <div className="md:mt-12 pl-[1em] flex items-center md:w-1/3 mb-7">
          <div>
            <span className="block red-line mt-3 h-[4px]"></span>
            <span className="font-choplin-medium">Meet Your Instructors</span>
            <p className="text-secondary text-xs w-3/4">
              Learn from Faculty with Real-World
              Experience and a Passion for Teaching.
            </p>
          </div>
        </div>

        <div className="sm:relative sm:grid sm:grid-cols-3 sm:gap-[2.5em]">
          {[
            "Joe Francom, PH.D", 
            "Jeff Compas, MSCS", 
            "Lora Klein"
           ].map((name) => (
            <div key={name} className="relative flex flex-col items-center">
              <button onClick={() => showFacultyAbout(name)} className="absolute top-5 md:left-4 h-6 mb-4 px-4 
                bg-transparent text-xs text-[--red] border-solid border-[--red] border-2
                hover:bg-[--red] hover:text-background transition duration-300">
                about
              </button>
              <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2"></div>
              <p className="font-sm text-center">{name}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="h-15 bg-red-500">
        <h1>Fac name</h1>
      </div>
    </section>
  );
};

export default FacultyBios;
