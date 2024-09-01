import AnnouncementBanner from "./components/AIBanner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mockups from "./components/Mockups";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <AnnouncementBanner />
      <Hero />
      <Carousel />
      <Services />
      <Mockups />
      <Footer />
    </main>
  );
}
