"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isMyWork = pathname === "/my-work";
  const isWorkWithMe = pathname === "/work-with-me";
  const isAbout = pathname === "/about";

  const getLinkClasses = (isActive: boolean) =>
    `border border-white rounded-full px-4 lg:px-6 py-2 text-[16px] lg:text-[18px] transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-blue ${
      isActive
        ? "bg-white text-brand-blue font-medium"
        : "text-white hover:bg-white hover:text-brand-blue"
    }`;

  const getMobileLinkClasses = (isActive: boolean) =>
    `border border-white rounded-full px-6 py-2 text-[18px] transition-colors duration-200 w-11/12 text-center focus:outline-none focus:ring-2 focus:ring-white ${
      isActive
        ? "bg-white text-brand-blue font-medium"
        : "text-white hover:bg-white hover:text-brand-blue"
    }`;

  return (
    <nav className="w-full h-[80px] bg-gradient-to-r from-[#000000] to-[#737373] flex items-center justify-between px-[15px] sm:px-[30px] relative z-50">
      <Link
        href="/"
        className="text-white font-sans font-bold uppercase text-sm tracking-wide shrink-0 focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
        aria-label="BUILDING TOMORROW - Home"
      >
        BUILDING TOMORROW
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
        <Link
          href="/my-work"
          className={getLinkClasses(isMyWork)}
          aria-label="Explore my work"
        >
          Explore my work
        </Link>
        <Link
          href="/work-with-me"
          className={getLinkClasses(isWorkWithMe)}
          aria-label="Work with me"
        >
          Work with me
        </Link>
        <Link
          href="/about"
          className={getLinkClasses(isAbout)}
          aria-label="About me"
        >
          About me
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-gradient-to-r from-[#000000] to-[#737373] flex flex-col items-center py-4 space-y-4 sm:hidden shadow-lg border-t border-gray-700">
          <Link
            href="/my-work"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses(isMyWork)}
            aria-label="Explore my work"
          >
            Explore my work
          </Link>
          <Link
            href="/work-with-me"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses(isWorkWithMe)}
            aria-label="Work with me"
          >
            Work with me
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses(isAbout)}
            aria-label="About me"
          >
            About me
          </Link>
        </div>
      )}
    </nav>
  );
}
