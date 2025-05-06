import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecondHeadline from "@/components/SecondHeadline";
import BottomSection from "@/components/BottomSection";
import BenefitsCurriculum from "@/components/BenefitsCurriculum";
import FacultyBios from "@/components/FacultyBios";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-sans bg-white text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <HeroSection />
        <span className="big-red-line"></span>
        <SecondHeadline />
        <BottomSection />
        <BenefitsCurriculum />
        <FacultyBios />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
