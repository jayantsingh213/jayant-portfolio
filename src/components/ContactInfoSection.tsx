"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

interface ContactInfoSectionProps {
  showDualButtons?: boolean;
}

export function ContactInfoSection({ showDualButtons = false }: ContactInfoSectionProps) {
  const pathname = usePathname();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/about") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleWorkWithMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the work-with-me page, scroll smoothly up to the form
    if (pathname === "/work-with-me") {
      e.preventDefault();
      const elem = document.getElementById("work-together");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full bg-brand-cream py-24 px-[15px] sm:px-[30px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-serif text-brand-black text-[12vw] sm:text-[10vw] lg:text-[6.5vw] leading-[0.95] tracking-tight mb-8">
            Can&apos;t wait to<br />collaborate!
          </h2>
          <p className="font-serif italic text-brand-black text-[22px] sm:text-[26px] leading-relaxed max-w-lg">
            Open to paid tech projects, freelance opportunities, and collaborations. Let&apos;s build something great together!
          </p>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col space-y-4 mb-12">
            <p className="font-sans text-brand-black text-[18px] sm:text-[20px]">
              <strong>Mob No:</strong>{" "}
              <a
                href={siteConfig.links.phone}
                className="underline hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
                aria-label="Call Mobile Number +91 8707336168"
              >
                {siteConfig.links.phoneDisplay}
              </a>
            </p>
            <p className="font-sans text-brand-black text-[18px] sm:text-[20px]">
              <strong>Email:</strong>{" "}
              <a
                href={siteConfig.links.email}
                className="underline hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
                aria-label="Send Email to singh11jayant16@gmail.com"
              >
                {siteConfig.links.emailDisplay}
              </a>
            </p>
            <p className="font-sans text-brand-black text-[18px] sm:text-[20px]">
              <strong>Instagram:</strong>{" "}
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
                aria-label="Open Instagram Profile @jayantsingh_01"
              >
                {siteConfig.links.instagramHandle}
              </a>
            </p>
            <p className="font-sans text-brand-black text-[18px] sm:text-[20px]">
              <strong>LinkedIn:</strong>{" "}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
                aria-label="Open LinkedIn Profile Jayant Singh"
              >
                {siteConfig.links.linkedinName}
              </a>
            </p>
            <p className="font-sans text-brand-black text-[18px] sm:text-[20px]">
              <strong>GitHub:</strong>{" "}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
                aria-label="Open GitHub Profile jayantsingh213"
              >
                {siteConfig.links.githubHandle}
              </a>
            </p>
          </div>

          <div className="w-full flex flex-col items-center max-w-lg mx-auto lg:mx-0">
            <p className="font-sans italic text-brand-black text-justify text-[16px] sm:text-[18px] leading-relaxed mb-10 w-full">
              I focus on building efficient, scalable, and user-friendly tech solutions that turn ideas into impactful digital experiences.
            </p>

            {showDualButtons ? (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full max-w-md">
                <Link
                  href="/work-with-me"
                  onClick={handleWorkWithMeClick}
                  className="border border-brand-black bg-transparent text-brand-black rounded-full py-4 px-6 text-center text-[18px] font-sans font-bold transition-colors duration-200 hover:bg-brand-black hover:text-white w-full sm:w-[220px] focus:outline-none focus:ring-2 focus:ring-brand-black"
                  aria-label="Work with me"
                >
                  Work with me
                </Link>
                <Link
                  href="/about"
                  onClick={handleAboutClick}
                  className="border border-brand-black bg-transparent text-brand-black rounded-full py-4 px-6 text-center text-[18px] font-sans font-bold transition-colors duration-200 hover:bg-brand-black hover:text-white w-full sm:w-[220px] focus:outline-none focus:ring-2 focus:ring-brand-black sm:-ml-px"
                  aria-label="About me"
                >
                  About me
                </Link>
              </div>
            ) : (
              <Link
                href="/about"
                onClick={handleAboutClick}
                className="border border-brand-black bg-transparent text-brand-black rounded-full py-4 px-8 text-center text-[18px] font-sans font-bold transition-colors duration-200 hover:bg-brand-black hover:text-white w-[350px] max-w-full focus:outline-none focus:ring-2 focus:ring-brand-black"
                aria-label="About me"
              >
                About me
              </Link>
            )}
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-[15px] text-brand-black/60 hover:text-brand-blue underline underline-offset-4 transition-colors"
                aria-label="Download Resume PDF"
              >
                Download Resume (.pdf)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
