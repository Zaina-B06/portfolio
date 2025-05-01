import NavBar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import TechStackSection from "@/components/ui/tech-stack-section";
import ProjectsSection from "@/components/ui/projects-section";
import HackathonsSection from "@/components/ui/hackathons-section";
import ExperienceSection from "@/components/ui/experience-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <HackathonsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
