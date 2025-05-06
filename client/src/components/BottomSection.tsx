const BottomSection = () => {
  return (
    <section className="relative mt-24 mb-12">
      {/* Black background bar */}
      <div className="bg-foreground py-6 px-4">
        <div className="container mx-auto">
          <h2 className="text-white">
            <span className="red-line"></span>
            <span className="font-light">Another </span>
            <span className="font-bold">Headline</span>
          </h2>
        </div>
      </div>
      
      {/* Faculty Bios section with overlapping positioning */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex items-center mb-4">
          <span className="red-line"></span>
          <h3 className="font-bold">Faculty Bio's</h3>
        </div>
        <p className="text-secondary text-sm mb-8">
          More details or text for this section
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative">
              <div className="w-full h-32 bg-muted mb-2 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-secondary rounded-full"></div>
              </div>
              <h4 className="text-center font-semibold">Name here</h4>
              {item === 3 && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
