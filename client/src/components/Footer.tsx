import alt_logo from "../../../public/images/utah_tech_trailblazers_logo_alternate.png"

const Footer = () => {
  return (
    <footer className="relative bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-row">
            <img src={alt_logo} className="h-[1.5em]"></img>
            <p className="ml-2 text-secondary"> | Utah Tech University</p>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="https://international.utahtech.edu/international-admissions/" 
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a href="https://international.utahtech.edu/prospective-faq/" 
                  className="text-secondary hover:text-primary transition-colors">
                  Questions
                </a>
              </li>
              <li>
                <a href="https://scholarships.utahtech.edu/international-student-scholarships/" 
                  className="text-secondary hover:text-primary transition-colors">
                  Financial Aid
                </a>
              </li>
              <li>
                <a href="https://computing.utahtech.edu/" 
                  className="text-secondary hover:text-primary transition-colors">
                  Computing Dept
                </a>
              </li>
            </ul>
          </nav>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
