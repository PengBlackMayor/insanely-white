import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import Policies from "@/components/home/Policies";
import Appointment from "@/components/home/Appointment";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <BeforeAfter />
      <Policies />
      <Appointment /> 
      <Footer />
    </>
  );
}