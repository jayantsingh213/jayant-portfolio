import { CollaborateSection } from "@/components/CollaborateSection";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { FooterImage } from "@/components/FooterImage";

export default function WorkWithMePage() {
  return (
    <div className="w-full flex flex-col pt-24 bg-brand-blue-soft">
      {/* Make it appear as a natural top-level page with some top padding, matching the blue background */}
      <CollaborateSection />
      <div id="work-with-me-hero">
        <ContactInfoSection showDualButtons={false} />
      </div>
      <FooterImage />
    </div>
  );
}
