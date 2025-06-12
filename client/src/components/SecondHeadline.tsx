import infiltrateImage from "../../../public/images/infiltrate_screenshot.png";
import { useState } from 'react';
import videoImage from "../../../public/images/Paula_Thumbnail.png";


const openGamePopup = () => {
  const width = 800;  
  const height = 600;

  var left = (screen.width/2)-(width/2);
  var top = (screen.height/2)-(height/2);
  window.open(
    "https://infiltrate.aries1542.dev/", 
    "_blank", 
    `width=${width},height=${height},left=${left},top=${top}`
  );
};


const SecondHeadline = () => {
  const [clickedOnVideo, setclickedOnVideo] = useState(false);

  function handleClick() {
    setclickedOnVideo(true);
  }

  return (
    <section className="md:-mb-2 mt-6 md:mt-0 flex flex-col justify-center items-center">

      <div className="w-[80%] sm:w-[50%] text-center mb-4 ">
        
        {/* Title Section */}
        <h2 className="text-foreground text-2xl md:text-3xl">
          <span className="font-choplin-light">Can you </span>
          <span className="font-choplin-medium">Solve{" "} </span>
          <span className="font-choplin-light">It?</span>
        </h2>

        {/* Game Section */}
        <p className="text-secondary text-sm ">
          Click the image above to test your skills with 
          a real challenge built by a Utah Tech{" "}
          <span className="font-bold">SE{" "}</span> student.
          If you love solving problems, you belong here.
        </p>
        <button className="mt-5" onClick={openGamePopup} >
          <figure className="mb-2">
            <img src={infiltrateImage} className="sm:w-[33em]"/>
            <figcaption className="text-center"> <span className="italic">Infiltrate</span> by Nick De Jong</figcaption>
          </figure>
        </button>
      </div>

      {/* Red Line seperator */}
      <div className="bg-[--red] w-[70%] sm:w-1/2 h-1"></div>


      {/* Paula Section */}
      <div className="ml-5 mt-8 flex flex-col md:flex-row justify-center items-center sm:gap-12">
        
        <div className="mb-4">
          {clickedOnVideo
            ? <iframe src="https://drive.google.com/file/d/1MqKUM_45dXKkdaksWRqaz5Z-DG45wWIT/preview" 
              allow="autoplay" className="w-[26.5em] h-[15em]" allowFullScreen></iframe>
            : <img src={videoImage} onClick={handleClick} className="h-[13em] sm:h-[15em]"></img>
          }
        </div>

        <div className="w-[80%] md:w-[40%]">
          <p>
            <span className="hidden md:inline-block red-line w-[2em] h-[3px]"></span>
            <span className="font-bold text-xl">Testimonial</span>
          </p>
          <p className="text-secondary text-sm w-full md:w-[90%]">
            Paula, an international student from Spain,
            reflects on the real-world learning she gained
            in the Computer Science program.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SecondHeadline;