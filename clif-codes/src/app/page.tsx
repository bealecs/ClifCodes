import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Carousel />
      <Services />
    </main>
  );
}
