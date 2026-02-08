import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Sessions from "@/components/Sessions";
import AgeGroups from "@/components/AgeGroups";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Activities />
        <Sessions />
        <AgeGroups />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
