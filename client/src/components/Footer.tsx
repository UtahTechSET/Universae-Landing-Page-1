const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-primary">UT</span>
            <span className="text-secondary"> | Utah Tech University</span>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
