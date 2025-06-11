import facebookImage from "../../../public/images/Facebook.png";
import instagramImage from "../../../public/images/Instagram.png";
import xImage from "../../../public/images/X.png";



const Footer = () => {
  return (
    <footer >

      {/* Small Footer */}
      <div className="sm:hidden bg-[--red] h-[20em] border-b-[3em] border-foreground
        flex flex-col gap-2 justify-center items-center text-background">
        <h1 className="text-2xl font-semibold">
          Utah Tech University
        </h1>

        <h3> 225 S. University Ave. St. George, UT 84770 </h3>
        <h3> (435) 652-7500 </h3>
        <h3> admissions@utahtech.edu </h3>
        <h3> Student hours: 7 a.m. to 5 p.m. </h3>
        <h3> Office hours: 9 a.m. to 5 p.m. </h3>

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
          <span> 225 S. University Ave. St. George, UT 84770</span>
  
          <div className="bg-white h-full w-[0.1em]"></div>
  
          <span>(435) 652-7500</span>   
  
          <div className="bg-white h-full w-[0.1em]"></div>
          
          <span> admissions@utahtech.edu </span>
        </h3>
  
        <h3 className="flex flex-row gap-3">
          <span> Student hours: 7 a.m. to 5 p.m. </span>
  
          <div className="bg-white h-full w-[0.1em]"></div>
  
          <span> Office hours: 9 a.m. to 5 p.m. </span>
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
    </footer>
  );
};

export default Footer;
