import infiltrateImage from "../../../public/images/infiltrate_screenshot.png";


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
  
  return (
    <section className="md:-mb-2 mt-6 md:mt-0">
      <div className="text-center mb-4">
        <h3 className="text-foreground font-choplin-light text-lg">
          "This is something I'll
          <br />
          use for the rest of my life"
        </h3>
        <h2 className="text-foreground text-2xl md:text-3xl">
          <span className="font-choplin-medium">Student </span>
          <span className="font-choplin-medium text-primary">Stories</span>
        </h2>
      </div>

      <div id="stories">
      
        <div className=" ml-[20%]
          sm:ml-[30%]
          md:grid md:grid-cols-2 md:h-[25em] md:ml-0">
          <div className="md:relative mb-[2em] md:mb-5"> 
            <div className="w-3/4 md:absolute md:right-[3em] lg:-right-[3em]">
              <div className="mb-4 w-full sm:w-[20em] sm:h-[15em] border-2">
                <iframe src="https://drive.google.com/file/d/1MqKUM_45dXKkdaksWRqaz5Z-DG45wWIT/preview" 
                  allow="autoplay" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <div className="w-5/6">
                <p>
                  <span className="red-line w-[1em] h-[2px]"></span>
                  <span className="font-bold">Testimonials</span>
                </p>
                <p className="text-secondary text-xs ml-2 w-full sm:w-5/6">
                  Paula, an international student from Spain,
                  reflects on the real-world learning she gained
                  in the Computer Science program.
                </p>
              </div>          
            </div>
          </div>
  
          <div className="md:relative mb-[2em] md:mb-5 md:ml-5">
            <div className="md:absolute md:top-[3em] w-3/4 md:left-[1em]">
              <button onClick={openGamePopup} >
                <figure className="mb-2 sm:w-[20em]">
                  <img src={infiltrateImage} className="sm:w-[20em] sm:h-[15em]"/>
                  <figcaption className="text-center"> <span className="italic">Infiltrate</span> by Nick De Jong</figcaption>
                </figure>
              </button>
    
              <div className="w-5/6">
                <h2 className="mb-2">
                  <span className="red-line w-[1em] h-[2px]"></span>
                  <span className="font-bold">Can You Beat It?</span>
                </h2>
                <p className="text-secondary text-xs ml-2 w-full sm:w-5/6">
                  Click the image above to test your skills with 
                  a real challenge built by Utah Tech{" "}
                  <span className="font-bold">SE{" "}</span> 
                  and{" "}
                  <span className="font-bold">IT{" "}</span> students.
                  If you love solving problems, you belong here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeadline;
