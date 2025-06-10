import facebookImage from "../../../public/images/Facebook.png";
import instagramImage from "../../../public/images/Instagram.png";
import xImage from "../../../public/images/X.png";



const Footer = () => {
  return (
    <footer >

      {/* Small Footer */}
      <div className="sm:hidden bg-[--red] h-[20em] border-b-[3em] border-foreground
        flex flex-col justify-center items-center text-background">
        <h1 className="text-2xl font-semibold">
          Utah Tech University
        </h1>

        <h3>225 South University Avenue St. George, UT 84770</h3>
        <h3>+1 (435) 652-7500</h3>
        <h3> admissions@utahtech.edu </h3>
        <h3> Student Hours: 7:00am - 5:00pm</h3>
        <h3> Office Hours: 9:00am - 5:00pm</h3>

        <div className="flex flex-row gap-6 mt-6">
          <a href="https://facebook.com/utahtechu"> 
            <img className="h-[2em]" src={facebookImage}></img> 
          </a>

          <a href="https://instagram.com/utahtechu"> 
            <img className="h-[2em]" src={instagramImage}></img> 
          </a>

          <a href="https://twitter.com/utahtechu"> 
            <img className="h-[2em]" src={xImage}></img> 
          </a>
        </div>
      </div>

      {/* Larger Footer */}
      <div className="relative bg-[--red] h-[20em] border-b-[3em] border-foreground
          hidden sm:flex flex-col justify-center items-center text-background gap-6">
        <h1 className="text-2xl font-semibold">
          Utah Tech University
        </h1>
  
        <h3 className="flex flex-row gap-3">
          <span> 225 South University Avenue St. George, UT 84770</span>
  
          <div className="bg-white h-full w-[0.1em]"></div>
  
          <span>+1 (435) 652-7500</span>   
  
          <div className="bg-white h-full w-[0.1em]"></div>
          
          <span> admissions@utahtech.edu </span>
        </h3>
  
        <h3 className="flex flex-row gap-3">
          <span> Student Hours: 7:00am - 5:00pm</span>
  
          <div className="bg-white h-full w-[0.1em]"></div>
  
          <span> Office Hours: 9:00am - 5:00pm</span>
        </h3>
  
        <div className="flex flex-row gap-6 mt-6">
          <a href="https://facebook.com/utahtechu"> 
            <img className="h-[2em]" src={facebookImage}></img> 
          </a>
          
          <a href="https://instagram.com/utahtechu"> 
            <img className="h-[2em]" src={instagramImage}></img> 
          </a>
          
          <a href="https://twitter.com/utahtechu"> 
            <img className="h-[2em]" src={xImage}></img> 
          </a>
        </div>
      </div>

      
      {/* <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-cetner items-center">
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
      </div> */}
    </footer>
  );
};

export default Footer;
