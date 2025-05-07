import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-hero-pattern bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-white text-3xl font-bold mb-2 ml-10">UT</div>
            <p className="text-white text-sm mb-6 ml-10">Utah Tech University</p>

            <h1 className="mb-6">
              <div className="inline-block">
                <span className="white-line inline-block mb-5"></span>
                <span className="text-white font-bold text-2xl md:text-4xl">
                  This{" "}
                </span>
                <span className="text-white font-light text-2xl md:text-4xl">
                  is an
                  <br />
                </span>
                <div className="ml-10">
                  <span className="text-white font-light text-2xl md:text-4xl">
                    Exciting{" "}
                  </span>
                  <span className="text-white font-bold text-2xl md:text-4xl">
                    Headline!
                  </span>
                </div>
              </div>
            </h1>

            <Button
              variant="outline"
              className="border border-white text-white px-6 py-2 transition duration-300 hover:bg-white hover:text-primary ml-10"
            >
              APPLY NOW
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
