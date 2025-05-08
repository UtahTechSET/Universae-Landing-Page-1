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
      <div className="mr-10 h-5 bg-[linear-gradient(120deg,var(--red)_26.7em,var(--white)_26.7em,var(--white)_100%)]"></div>
      <Header />

      <main>
        <HeroSection />
        <div className="flex flex-row justify-center items-center -mt-12">
          <span className="big-red-line w-1/4 h-[3px] mr-[5em]"></span>
        </div>
        <SecondHeadline />

        {/* These sections have overlapping elements and need to break out of container */}
        <div>        
          <div className="relative pb-[700px]">

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
