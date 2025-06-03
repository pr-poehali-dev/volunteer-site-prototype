import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowToHelp from "@/components/HowToHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <HowToHelp />
      <Footer />
    </div>
  );
};

export default Index;
