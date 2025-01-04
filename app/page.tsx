import Hero from "@/components/Hero";
import { Testimonials } from "@/components/testimonials";
import Testimonials2 from "@/components/testimonials2";
import ContactSection from "@/components/ui/contact-small";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="h-48">
        hello
      </div>
      <Testimonials />
      <Testimonials2 />
      <ContactSection />
    </div>
  );
}
