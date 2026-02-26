import About from "@/components/About";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Works from "@/components/works";

export default function Home() {
  return (
   <>
    <Hero />
    <Works />
    <About />
    <Services />
    <Contact />
    <Client />
    <Reviews />
   </>
  );
}
