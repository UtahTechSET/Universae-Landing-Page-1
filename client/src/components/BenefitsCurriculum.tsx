const BenefitsCurriculum = () => {
  return (
    <section className="md:absolute sm:h-[24em] sm:top-20 sm:left-7 sm:w-[95%]
      bg-muted py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <span className="red-line h-[2px] bg-black w-[8em] mt-[16px]"></span>
            <div>
              <h3 className="mb-3">
                <span className="text-2xl font-choplin-medium">Benefits</span>
              </h3>
              <p className="text-secondary text-xs mb-4">
                Utah Tech University offers a hands-on, career-focused
                education through its polytechnic approach-emphasizing
                real-world projects, industry collaboration, and active
                learning.
              </p>
              <p className="text-secondary text-xs">
                With small class sizes, affordable tuition, and a beautiful St.
                George location, it's an ideal place to launch your tech
                career. Complete your degree in just 16 months through
                flexible HyFlex learning-no coding experience required.
              </p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row ">
            <span className="red-line h-[2px] bg-black w-[8em] sm:w-[2em] mt-[16px]"></span>
            <div>
              <h3 className="mb-3">
                <span className="text-2xl font-choplin-medium">Curriculum</span>
              </h3>
              <ul className="text-secondary text-xs mb-3 list-disc ml-5">
                <li> Fundamentals of App Programming (3 credits)</li>
                <li> ntroduction to UI/UX (3 credits)</li>
                <li> Multitier App Development I (3 credits)</li>
                <li> Multitier App Development II (3 credits)</li>
                <li> Mobile App Development (3 credits)</li>
                <li> Advanced Topics in App Development (3 credits)</li>
                <li> Software Development Practices (3 credits)</li>
                <li> Software Quality and Testing (3 credits)</li>
                <li> Tech Entrepreneurship (3 credits)</li>
                <li> Graduate Capstone (3 credits)</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCurriculum;