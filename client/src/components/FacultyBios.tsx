const FacultyBios = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 md:col-span-4 bg-primary p-6">
          <h3 className="text-white text-2xl font-bold mb-1">Headline</h3>
          <p className="text-white text-sm mb-4">sub headline text</p>
        </div>
        <div className="col-span-12 md:col-span-8 flex items-center">
          <div>
            <span className="red-line"></span>
            <span className="font-bold">Faculty Bio's</span>
            <p className="text-secondary text-sm">More details or text for this section</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="rounded-full bg-muted w-24 h-24 flex items-center justify-center mb-2">
              <span className="text-xs text-secondary">about</span>
            </div>
            <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center mb-4">
            </div>
            <p className="font-medium text-center">Name here</p>
            <div className="h-1 w-12 bg-primary mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyBios;