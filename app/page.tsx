import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import MenuSection from "@/components/MenuSection";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <MenuSection />
      <Booking />
      <Contact />
    </main>
  );
}
