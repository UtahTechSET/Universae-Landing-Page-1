import alt_logo from "../../../public/images/utah_tech_trailblazers_logo_alternate.png"

const Footer = () => {
  return (
    <footer className="relative bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-row">
            {/* <span className="font-bold text-primary">UT</span> */}
            <img src={alt_logo} className="h-[1.5em]"></img>
            <p className="text-secondary"> | Utah Tech University</p>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">ADD</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">RELEVENT</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">LINKS</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">HERE</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
