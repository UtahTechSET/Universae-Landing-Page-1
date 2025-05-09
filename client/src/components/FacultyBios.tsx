const FacultyBios = () => {
  return (
    <section className="sm:absolute sm:top-[28em]">
      <div className="sm:grid sm:grid-cols-12 sm:gap-4">
        <div className="sm:col-span-4sm:pt-[80px] sm:pl-[7em]
          col-span-12 bg-primary p-4 ">
          <h3 className="text-white text-2xl font-bold mb-1">Headline</h3>
          <p className="text-white text-sm mb-4">sub headline text</p>
        </div>
      </div>

      <div className="sm:flex sm:flexbox sm:-mt-[84px]
        bg-muted-foreground p-5">
        <div className="sm:mt-12 pl-[5.7em] flex items-center sm:w-1/3 mb-7">
          <div>
            <span className="block red-line mt-3 h-[4px]"></span>
            <span className="font-bold">Faculty Bio's</span>
            <p className="text-secondary text-sm w-3/4">More details or text for this section</p>
          </div>
        </div>
        
        <div className="sm:relative sm:grid sm:grid-cols-1 sm:grid-cols-3 sm:gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative flex flex-col items-center">
              <div className="sm:absolute top-5 left-4 bg-secondary w-10 h-6 mb-4">
                <span className="text-xs text-background pl-1">about</span>
              </div>
              <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2">
              </div>
              <p className="font-medium text-center">Name here</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyBios;