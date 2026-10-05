import { Hero } from "@/components/Hero";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { FooterImage } from "@/components/FooterImage";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <ContactInfoSection />
      <FooterImage />
    </div>
  );
}
