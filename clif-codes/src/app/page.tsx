import AnnouncementBanner from "./components/AIBanner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCarousel from "./components/HeroCarousel";
import Mockups from "./components/Mockups";
import Reviews from "./components/Reviews";
import ScheduleConsultButton from "./components/ScheduleConsultButton";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <AnnouncementBanner /> */}
      <Hero />
      <HeroCarousel />
      <Services />
      <Mockups />
      <Reviews />
      <ScheduleConsultButton />
      <Footer />
    </main>
  );
}
