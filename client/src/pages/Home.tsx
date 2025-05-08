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
    <div className="font-sans bg-white text-foreground">
      <div className="mr-0 sm:mr-10 h-2 sm:h-5 bg-[linear-gradient(120deg,var(--red)_40%,var(--white)_40%,var(--white)_100%)] sm:bg-[linear-gradient(120deg,var(--red)_22.65em,var(--white)_22.65em,var(--white)_100%)]"></div>
      <Header />

      <main>
        <HeroSection />
        <div className="flex flex-row justify-center items-center -mt-6 sm:-mt-12">
          <span className="big-red-line w-1/3 sm:w-1/4 h-[2px] sm:h-[3px] mr-[2em] sm:mr-[5em]"></span>
        </div>
        <SecondHeadline />

        {/* These sections have overlapping elements and need to break out of container */}
        <div>        
          <div className="relative pb-[500px] sm:pb-[700px]">
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
