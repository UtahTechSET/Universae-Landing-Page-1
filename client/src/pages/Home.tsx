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

      <Header />
      
      <main>
        <HeroSection />
        <div className="flex flex-row justify-center items-center mt-2 sm:-mt-12">
          <span className="big-red-line w-1/4 h-[3px] mr-[5em] "></span>
        </div>
        <SecondHeadline />


        <div className="md:relative md:pb-[40em]">

          <BottomSection />
          <BenefitsCurriculum />
          <FacultyBios />
        </div>
        <WhyChooseUs />
          
      </main>

      <Footer />
    </div>
  );
};

export default Home;
