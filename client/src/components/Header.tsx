import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-[linear-gradient(120deg,var(--red)_40%,var(--mid-gray)_40%,var(--mid-gray)_100%)] sm:bg-[linear-gradient(120deg,var(--red)_22em,var(--mid-gray)_22em,var(--mid-gray)_100%)] mr-0 sm:mr-10">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-white text-4xl sm:text-5xl font-bold -mt-2 sm:-mt-5 mb-6 sm:mb-10 ml-4 sm:ml-10">UT</div>
            <p className="text-white text-sm mb-3 ml-4 sm:ml-10">Utah Tech University</p>

            <h1 className="mb-6">
              <div className="inline-block">
                <span className="white-line inline-block mb-3 sm:mb-5 ml-4 sm:ml-0"></span>
                <span className="text-white font-bold text-xl sm:text-2xl md:text-4xl ml-4 sm:ml-0">
                  This{" "}
                </span>
                <span className="text-white font-light text-xl sm:text-2xl md:text-4xl">
                  is an
                  <br className="hidden sm:block" />
                </span>
                <div className="ml-4 sm:ml-10">
                  <span className="text-white font-light text-xl sm:text-2xl md:text-4xl">
                    Exciting{" "}
                  </span>
                  <span className="text-white font-bold text-xl sm:text-2xl md:text-4xl">
                    Headline!
                  </span>
                </div>
              </div>
            </h1>

            <Button
              variant="outline"
              className="border border-white text-white px-4 sm:px-6 py-1 sm:py-2 transition duration-300 hover:bg-white hover:text-primary ml-4 sm:ml-10"
            >
              APPLY NOW
            </Button>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div
              className="bg-white h-6 sm:h-10 w-full
              bg-[linear-gradient(90deg,var(--white)_80%,var(--red)_40%)]"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
