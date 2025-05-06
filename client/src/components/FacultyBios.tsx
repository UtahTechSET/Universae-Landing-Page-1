const FacultyBios = () => {
  return (
    <section className="absolute top-[430px]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 bg-primary p-4 pt-[80px] pl-[150px]">
          <h3 className="text-white text-2xl font-bold mb-1">Headline</h3>
          <p className="text-white text-sm mb-4">sub headline text</p>
        </div>
      </div>

      <div className="flex flexbox bg-muted-foreground p-5 -mt-[84px]">
        <div className="mt-12 px-[2em] flex items-center">
          <div>
            <span className="red-line"></span>
            <span className="font-bold">Faculty Bio's</span>
            <p className="text-secondary text-sm">More details or text for this section</p>
          </div>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative flex flex-col items-center">
              <div className="absolute top-5 left-4 bg-secondary w-10 h-6 mb-4">
                <span className="text-xs text-background pl-1">about</span>
              </div>
              <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2">
                {/* <span className="text-xs text-secondary">about</span> */}
              </div>
              <p className="font-medium text-center">Name here</p>
              {/* <div className="h-1 w-12 bg-primary mt-2"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyBios;