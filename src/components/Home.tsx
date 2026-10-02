import Hero from "./Hero";
import About from "./About";
import SuccessNumbers from "./SuccessNumbers";
import Services from "./Services";
import HowWeWork from "./HowWeWork";
import WhyUs from "./WhyUs";
import Industries from "./Industries";
import ClientLogos from "./ClientLogos";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Home() {
  useDocumentMeta(
    "Zebulon Consulting | Management Consulting, Training & HR Solutions in Hyderabad",
    "Zebulon Consulting is a professional management consulting firm in Hyderabad specializing in corporate training, HR operations, people advisory, and digital support."
  );

  return (
    <>
      <Hero />
      <About />
      <SuccessNumbers />
      <Services />
      <HowWeWork />
      <WhyUs />
      <Industries />
      <ClientLogos />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
