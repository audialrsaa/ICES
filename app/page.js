import AboutSection from "../components/home/AboutSection";
import CallToActionSection from "../components/home/CallToActionSection";
import ConferenceDetailsSection from "../components/home/ConferenceDetailsSection";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/home/Navbar";
import PartnersSection from "../components/home/PartnersSection";
import SpeakersSection from "../components/home/SpeakersSection";
import TracksSection from "../components/home/TracksSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <SpeakersSection />
        <ConferenceDetailsSection />
        <CallToActionSection />
        <PartnersSection />
      </main>
      <Footer />
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <span aria-hidden="true">⌃</span>
      </a>
    </>
  );
}
