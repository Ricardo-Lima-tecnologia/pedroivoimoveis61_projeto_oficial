import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import VideoVSL from "@/components/VideoVSL";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Properties />
      <VideoVSL />
      <LeadForm />
      <Testimonials />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
