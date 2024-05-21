import Image from "next/image";
import IntroductionSection from "./components/IntroductionSection";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavigationBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroductionSection />
      </div>
    </main>
  );
}
