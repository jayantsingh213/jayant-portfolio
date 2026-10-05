"use client";

import { useEffect } from "react";
import { RepoCard } from "@/components/RepoCard";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { FooterLaptopImage } from "@/components/FooterLaptopImage";
import { projects } from "@/config/projects";

export default function MyWorkPage() {
  // Deep link support for hash URLs on page load (e.g., /my-work#streako)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const handleHeroCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectId: string,
    repoUrl: string,
    hasDetailedSection?: boolean
  ) => {
    if (hasDetailedSection) {
      e.preventDefault();
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const detailedProjects = projects.filter((p) => p.hasDetailedSection);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans overflow-x-hidden selection:bg-gray-700 selection:text-white">
      {/* Hero Section (Gradient Background) */}
      <section className="w-full bg-gradient-to-r from-[#000000] to-[#737373] px-[15px] sm:px-[30px] pt-12 sm:pt-16 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Hero Header Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mt-4 mb-20 lg:mb-28">
            <div className="flex flex-col max-w-3xl">
              <h1 className="text-white font-serif text-[14vw] sm:text-[12vw] lg:text-[9vw] leading-none tracking-tight m-0 mb-4 lg:mb-0">
                Selected ideas
              </h1>
            </div>
            
            <div className="flex flex-col max-w-md lg:pb-3 lg:text-right w-full">
              <h2 className="text-white font-sans font-bold text-[20px] sm:text-[24px] mb-2">
                Ideas into Impact
              </h2>
              <p className="text-gray-300 font-sans text-[16px] sm:text-[18px] leading-relaxed">
                A collection of experiments and tech solutions built through curiosity. Explore how I turn concepts into robust products through code.
              </p>
            </div>
          </div>

          {/* Row 3: Project Preview Cards (4 cards in a row / grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {projects.map((project) => (
              <RepoCard
                key={project.id}
                project={project}
                variant="compact"
                onClick={(e) =>
                  handleHeroCardClick(
                    e,
                    project.id,
                    project.repoUrl,
                    project.hasDetailedSection
                  )
                }
                hrefOverride={
                  project.hasDetailedSection ? `#${project.id}` : project.repoUrl
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Sections (Cream Background) */}
      <section className="w-full bg-brand-cream py-20 sm:py-28 lg:py-36 px-[15px] sm:px-[30px]">
        <div className="max-w-7xl mx-auto flex flex-col space-y-24 sm:space-y-32 lg:space-y-40">
          {detailedProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-[100px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 pt-4"
            >
              {/* Left Column: Project Details (48% width on desktop) */}
              <div className="w-full lg:w-[48%] flex flex-col">
                <h2 className="font-serif text-brand-black text-[12vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.95] tracking-tight mb-8 sm:mb-12">
                  {project.title}
                </h2>

                <div className="flex flex-col space-y-8 sm:space-y-10">
                  {/* SCOPE */}
                  <div className="font-sans text-brand-black text-[16px] sm:text-[18px] leading-relaxed text-left sm:text-justify max-sm:text-left">
                    <strong className="font-bold text-brand-black uppercase tracking-wider block sm:inline mb-1 sm:mb-0 sm:mr-2">
                      SCOPE:
                    </strong>
                    {project.scope}
                  </div>

                  {/* DESCRIPTION */}
                  <div className="font-sans text-brand-black text-[16px] sm:text-[18px] leading-relaxed text-left sm:text-justify max-sm:text-left">
                    <strong className="font-bold text-brand-black uppercase tracking-wider block sm:inline mb-1 sm:mb-0 sm:mr-2">
                      DESCRIPTION:
                    </strong>
                    {project.description}
                  </div>

                  {/* RESULT */}
                  <div className="font-sans text-brand-black text-[16px] sm:text-[18px] leading-relaxed text-left sm:text-justify max-sm:text-left">
                    <strong className="font-bold text-brand-black uppercase tracking-wider block sm:inline mb-1 sm:mb-0 sm:mr-2">
                      RESULT:
                    </strong>
                    {project.result}
                  </div>
                </div>
              </div>

              {/* Right Column: GitHub Repository Card (50% width on desktop) */}
              <div className="w-full lg:w-[50%] flex items-start pt-2 lg:pt-4">
                <RepoCard project={project} variant="full" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* "Can't wait to collaborate!" Section */}
      <ContactInfoSection showDualButtons={true} />

      {/* Footer Image */}
      <FooterLaptopImage />
    </div>
  );
}
