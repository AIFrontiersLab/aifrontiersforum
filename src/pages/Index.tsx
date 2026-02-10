import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchCategories from "@/components/ResearchCategories";
import TrendingSection from "@/components/TrendingSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ResearchCategories />
      <TrendingSection />
      <FeaturesGrid />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default Index;
