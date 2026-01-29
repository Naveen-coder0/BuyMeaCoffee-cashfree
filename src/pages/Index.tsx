import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CoffeeSection from "@/components/CoffeeSection";
import TrustSection from "@/components/TrustSection";
import GratitudeSection from "@/components/GratitudeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <CoffeeSection />
      <TrustSection />
      <GratitudeSection />
      <Footer />
    </main>
  );
};

export default Index;
