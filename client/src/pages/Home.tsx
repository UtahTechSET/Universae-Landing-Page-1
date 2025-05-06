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
      <Header />

      <main>
        <HeroSection />
        <span className="big-red-line"></span>
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
