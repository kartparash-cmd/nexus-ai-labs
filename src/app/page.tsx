import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import { FeaturedWork } from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import { Team } from "@/components/Team";
import TechMarquee from "@/components/TechMarquee";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <FeaturedWork />
        <Services />
        <Process />
        <Team />
        <div className="section-divider" />
        <TechMarquee />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
