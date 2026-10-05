import type { Metadata } from 'next';
import Image from "next/image";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { ImageCaptionGrid } from "@/components/ImageCaptionGrid";
import { skills, myApproach, whatIBuild } from "@/config/about";

export const metadata: Metadata = {
  title: 'About Me | Jayant Singh',
  description: 'Learn more about Jayant Singh, a software developer exploring AI, web, and innovative tech solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-gray-700 selection:text-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#000000] to-[#6B6B6B] flex flex-col px-[15px] sm:px-[30px] pt-12 pb-16 min-h-[640px]">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[4%] flex-1">
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[48%] flex flex-col pt-4 lg:pt-12">
            <h1 className="text-white font-serif text-[18vw] sm:text-[14vw] lg:text-[6vw] leading-none tracking-tight m-0 mb-6 lg:mb-10 text-left">
              About me
            </h1>
            <p className="text-white font-sans text-[18px] sm:text-[20px] leading-relaxed max-w-[460px] text-left sm:text-justify max-sm:text-left transition-all">
              I&apos;m Jayant Singh, a curious mind driven by technology and a passion for turning complex problems into meaningful solutions. As a B.Tech CSE student, I explore the intersection of AI, software development, and innovation. From experimenting with machine learning to building real-world applications and leading tech initiatives, I believe the best way to learn is to build, break, and improve. I&apos;m not just here to follow technology; I&apos;m here to explore what&apos;s possible with it.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[45%] mt-12 lg:mt-0 relative aspect-[4/5] sm:aspect-[3/4] mx-auto overflow-hidden shadow-2xl rounded-sm">
            <Image
              src="/images/about-portrait.jpg"
              alt="Jayant Singh Portrait"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="w-full bg-brand-blue-soft px-[15px] sm:px-[30px] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h2 className="text-[#0A0A0A] font-serif uppercase tracking-tight text-[32px] sm:text-[40px] md:text-[44px] leading-[1.1] mb-6 md:mb-8 font-normal">
            SKILLS & TECHNOLOGIES
          </h2>
          <p className="text-[#0A0A0A] font-serif text-[20px] leading-relaxed tracking-tight max-w-[800px] mb-16 md:mb-24">
            I leverage a diverse set of technologies across software development, AI, and data science to turn ideas into practical solutions. Constantly exploring and learning, I strive to build smarter, more efficient, and impactful applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 w-full">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col space-y-2 text-left">
                <span className="font-sans font-light uppercase text-[20px] sm:text-[24px] text-[#0A0A0A] tracking-wider">
                  {skill.id} &mdash; {skill.category}
                </span>
                <span className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0A0A0A] leading-tight flex flex-wrap max-w-full">
                  {skill.items}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="w-full bg-brand-blue-soft pt-10 pb-20 lg:pb-32 px-0 relative">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col px-[15px] sm:px-[30px] mb-12 md:mb-16">
          <h2 className="text-[#0A0A0A] font-serif text-[15vw] sm:text-[12vw] lg:text-[6vw] leading-none tracking-tight m-0">
            My approach
          </h2>
        </div>
        <ImageCaptionGrid items={myApproach} />
      </section>
      
      {/* What I Build Section */}
      <section className="w-full bg-brand-blue-soft pt-10 pb-24 lg:pb-40 px-0 relative">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col px-[15px] sm:px-[30px] mb-12 md:mb-16">
          <h2 className="text-[#0A0A0A] font-serif text-[15vw] sm:text-[12vw] lg:text-[6vw] leading-none tracking-tight m-0">
            What I Build
          </h2>
        </div>
        <ImageCaptionGrid items={whatIBuild} />
      </section>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactInfoSection showDualButtons={true} />
      </div>

      {/* Footer Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px]">
        <Image
          src="/images/about-footer.jpg"
          alt="Black cat sitting on a desk next to a laptop"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
