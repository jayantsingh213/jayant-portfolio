"use client";

import Image from "next/image";
import { Project } from "@/config/projects";

interface RepoCardProps {
  project: Project;
  variant?: "compact" | "full";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  hrefOverride?: string;
}

export function RepoCard({
  project,
  variant = "full",
  onClick,
  hrefOverride,
}: RepoCardProps) {
  const isCompact = variant === "compact";
  const targetHref = hrefOverride || project.repoUrl;
  const isExternal = targetHref.startsWith("http");

  return (
    <a
      href={targetHref}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Open ${project.title} on GitHub`}
      className={`group block bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-blue ${
        isCompact ? "w-full max-w-[280px] text-left" : "w-full text-left"
      }`}
    >
      {/* Top Header Row */}
      <div className="flex justify-between items-start gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <p className="font-sans text-xs sm:text-sm text-gray-500 font-normal tracking-tight truncate">
            jayantsingh213/
          </p>
          <h3 className="font-sans font-bold text-gray-900 text-base sm:text-lg lg:text-xl truncate group-hover:text-brand-blue transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 leading-snug">
            {project.cardDescription}
          </p>
        </div>

        {/* Avatar */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
          <Image
            src="/images/github-avatar.png"
            alt="Jayant Singh GitHub Avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm pt-2 pb-2 border-t border-gray-100">
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto text-[11px] sm:text-xs">
          <span>
            <strong className="text-gray-900">{project.stats.contributors}</strong>{" "}
            {project.stats.contributors === 1 ? "Contributor" : "Contributors"}
          </span>
          <span>·</span>
          <span>
            <strong className="text-gray-900">{project.stats.issues}</strong> Issues
          </span>
          <span>·</span>
          <span>
            <strong className="text-gray-900">{project.stats.stars}</strong> Stars
          </span>
          <span>·</span>
          <span>
            <strong className="text-gray-900">{project.stats.forks}</strong> Forks
          </span>
        </div>

        {/* GitHub Logo */}
        <svg
          className="w-4 h-4 text-gray-700 shrink-0 ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      </div>

      {/* Color Strip Bar */}
      <div className="w-full h-2 rounded-full overflow-hidden flex my-2">
        <div className="h-full flex-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"></div>
        <div className="h-full w-8 bg-purple-600"></div>
      </div>

      {/* Bottom Area (Full Variant only) */}
      {!isCompact && (
        <div className="pt-3 border-t border-gray-100 mt-2">
          <p className="font-sans font-bold text-gray-900 text-xs sm:text-sm line-clamp-1 mb-1">
            {project.repoName}: {project.cardDescription}
          </p>
          <p className="font-sans text-xs text-gray-500 line-clamp-3 leading-relaxed mb-3">
            {project.description || project.cardDescription}
          </p>

          <div className="flex items-center text-xs text-gray-400 font-medium">
            <svg
              className="w-3.5 h-3.5 mr-1 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </div>
        </div>
      )}
    </a>
  );
}
