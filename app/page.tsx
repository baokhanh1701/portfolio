import IntroductionSection from "./components/IntroductionSection";
import NavigationBar from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavigationBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroductionSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
