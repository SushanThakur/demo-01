import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-16">

        <Hero />

        <AboutUs />

        <Mission />

        <Services />

        <Faq />

        <Gallery />

        <Carousel />

      </main>

      <Footer />

    </>
  );
}
