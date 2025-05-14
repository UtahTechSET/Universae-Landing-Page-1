import { Button } from "@/components/ui/button";
import whiteLogo from "../../../public/images/whiteUTlogoAsset1.png"

// (bg-[linear-gradient(120deg,var(--red)_40%,var(--mid-gray)_40%,var(--mid-gray)_100%)]
// bg-[url(../../public/images/hero_bg.png)]

const Header = () => {
  return (
    <header
      className="sm:mr-10 
      md:bg-[linear-gradient(120deg,var(--red)_26em,var(--mid-gray)_26em,var(--mid-gray)_100%)] 
      sm:bg-[linear-gradient(120deg,var(--red)_20em,var(--mid-gray)_20em,var(--mid-gray)_100%)]
      bg-[linear-gradient(120deg,var(--red)_18em,var(--mid-gray)_18em,var(--mid-gray)_100%)]"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            {/* <div className="text-white text-5xl font-bold -mt-5 mb-10 ml-10">
              UT
            </div> */}
            <img src={whiteLogo} alt="UT Logo" className="h-12 mb-10 ml-10" />
            <p className="text-white text-xs mb-3 ml-10">Master's of Software Development at Utah Tech</p>

      
            <div className="inline-block mb-6">
              <span className="white-line inline-block mb-5"></span>
              <span className="text-white font-choplin-light text-2xl md:text-4xl">
                From{" "}
              </span>
              <span className="text-white font-choplin-medium text-2xl md:text-4xl">
                Zero{" "}
              </span>
              <span className="text-white font-choplin-light text-2xl md:text-4xl">
                to Software
              </span>
              <br />
              <div className="ml-10">
                <span className="text-white font-choplin-medium text-2xl md:text-4xl">
                  Hero:{" "}
                </span>
                <span className="text-white font-choplin-light text-2xl md:text-4xl">
                  Building Skills, 
                  <br />
                  Confidence, and Code
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="border bg-[--red] rounded-none border-white font-light text-white px-6 py-2 
              transition duration-300 hover:bg-white hover:text-primary ml-10"
            >
              Apply Now
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="bg-white h-10 w-full
              bg-[linear-gradient(90deg,var(--white)_80%,var(--red)_40%)]"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
