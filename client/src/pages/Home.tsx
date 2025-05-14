import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecondHeadline from "@/components/SecondHeadline";
import BottomSection from "@/components/BottomSection";
import BenefitsCurriculum from "@/components/BenefitsCurriculum";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FacultyBios from "@/components/FacultyBios";

const Home = () => {
  return (
    <div className="font-sans bg-white text-foreground lg:w-[1050px] lg:mx-auto">
      {/* <div className="h-5 bg-[linear-gradient(120deg,var(--red)_18.6em,var(--white)_15em,var(--white)_100%)]
        sm:bg-[linear-gradient(120deg,var(--red)_20.6em,var(--white)_14em,var(--white)_100%)]
        md:bg-[linear-gradient(120deg,var(--red)_26.7em,var(--white)_26.7em,var(--white)_100%)]">
      </div> */}
      <Header />

      {/* TODO: Start adding pics AND fix why choose us <p> section to not be under red line  */}

      <main>
        <HeroSection />
        <div className="flex flex-row justify-center items-center mt-2 sm:-mt-12">
          <span className="big-red-line w-1/4 h-[3px] mr-[5em] "></span>
        </div>
        <SecondHeadline />


        <div>        
          <div className="md:relative md:pb-[40em]">

            <BottomSection />
            <BenefitsCurriculum />
            <FacultyBios />
          </div>
          <WhyChooseUs />
        </div>
          
      </main>

      <Footer />
    </div>
  );
};

export default Home;
