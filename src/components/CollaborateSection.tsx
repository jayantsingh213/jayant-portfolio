import { ContactForm } from "./ContactForm";
import { FadeUp } from "./FadeUp";

export function CollaborateSection() {
  return (
    <section id="work-together" className="w-full bg-brand-blue-soft py-20 px-[15px] sm:px-[30px]">
      <FadeUp className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-serif text-brand-black text-[12vw] sm:text-[10vw] lg:text-[6.5vw] leading-[0.95] tracking-tight mb-8">
            Let&apos;s work<br />together
          </h2>
          <p className="font-sans text-brand-black text-[20px] sm:text-[22px]">
            Share your project details and I&apos;ll get back to you.
          </p>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </FadeUp>

      {/* Closing line */}
      <FadeUp delay={0.2} className="w-full text-center mt-20">
        <p className="font-sans text-brand-black font-bold text-[18px] sm:text-[20px]">
          Got a project in mind? Let&apos;s turn your vision into reality.
        </p>
      </FadeUp>
    </section>
  );
}
