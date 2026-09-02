import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamically import below-the-fold and heavy animation components
const InstallRow = dynamic(() => import("@/components/InstallRow"));
const ShowcaseCarousel = dynamic(() => import("@/components/ShowcaseCarousel"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background bg-grain selection:bg-terminal-green/30 selection:text-terminal-green overflow-hidden">
      
      <Navbar />
      <main className="flex-1 z-10 relative">
        <Hero />
        <InstallRow />
        <ShowcaseCarousel />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
