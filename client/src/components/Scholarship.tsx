const Scholarship = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex">
          <span className="red-line h-[0.15em] mt-4 w-1/5 sm:w-[3em]"></span>
          <div>
            <h2 className="mb-4 font-bold text-2xl">
              International Merit-Based Scholarship
            </h2>
            <p className="text-secondary text-sm max-w-2xl">
              Utah Tech University is committed to supporting international students 
              in their academic journey. The university offers competitive scholarships 
              to help make education more accessible and affordable.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 border-l-4 border-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            
            {/* Scholarship Amount - Featured */}
            <div className="md:col-span-2 text-center bg-primary text-white p-6 rounded-lg mb-4">
              <h3 className="text-3xl sm:text-5xl font-bold mb-2">
                $5,500 <span className="font-light text-lg sm:text-3xl">per year*</span> 
              </h3>
            </div>

            {/* Requirements Grid */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary border-b border-primary pb-2 w-5/6">
                Academic Requirements
              </h4>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Minimum Required GPA:</span>
                  <span className="ml-2 text-primary font-bold">*WE DON'T KNOW YET*</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Minimum Credit Hours:</span>
                  <span className="ml-2 text-primary font-bold">24</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary border-b border-primary pb-2 w-5/6">
                Other Requirements
              </h4>
              <p className="text-sm text-secondary mb-3">
                At least one of the following certificates:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Must be working toward an associates’ or bachelors’ degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Must have a verification of eligibility signed by an international office representative.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Must be in good standing with the International Student & Scholarship Office</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-muted text-center">
            <p className="text-sm text-secondary">
              * The award totals $5,500 per year — $2,750 for the fall semester
              <br />
               and $2,750 for the spring — and applies to tuition only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;