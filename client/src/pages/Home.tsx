import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecondHeadline from "@/components/SecondHeadline";
import BottomSection from "@/components/BottomSection";
import BenefitsCurriculum from "@/components/BenefitsCurriculum";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-sans bg-white text-foreground">
      <Header />

      <main>
        <div className="container mx-auto px-4 py-12">
          <HeroSection />
          <span className="big-red-line"></span>
          <SecondHeadline />
        </div>
        
        {/* These sections have overlapping elements and need to break out of container */}
        <BenefitsCurriculum />
        <BottomSection />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
