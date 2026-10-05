import Image from "next/image";
import { FadeUp } from "./FadeUp";

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] to-[#737373] flex flex-col items-center">
      {/* 3.2 Hero banner image */}
      <FadeUp delay={0.1} className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
        <Image
          src="/images/hero-banner.jpg"
          alt="Jayant Singh smiling at his desk with a laptop"
          fill
          className="object-cover"
          style={{ objectPosition: '45% center' }}
          priority
        />
      </FadeUp>

      {/* 3.3 Giant headline */}
      <FadeUp delay={0.3} className="w-full px-[15px] sm:px-[30px] pt-12 pb-8">
        <h1 className="text-white font-serif text-[15vw] lg:text-[16vw] leading-[0.95] tracking-tight m-0">
          Hi, I&apos;m Jayant
        </h1>
      </FadeUp>

      {/* 3.4 Photo pair */}
      <FadeUp delay={0.4} className="w-full px-[15px] sm:px-[30px] flex flex-col md:flex-row gap-5 mb-12">
        <div className="relative w-full md:w-1/2 aspect-[4/3]">
          <Image
            src="/images/desk-setup.jpg"
            alt="Monitor, laptop and gamepad on my desk"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/2 aspect-[4/3]">
          <Image
            src="/images/typing-on-sofa.jpg"
            alt="Me typing on a laptop on a grey sofa"
            fill
            className="object-cover"
          />
        </div>
      </FadeUp>

      {/* 3.5 Statement line */}
      <FadeUp delay={0.5} className="w-full px-[15px] sm:px-[30px] mb-32">
        <h2 className="text-white font-serif text-[12vw] sm:text-[10vw] md:text-[8.5vw] leading-[1] tracking-tight m-0">
          I bring ideas to life
        </h2>
      </FadeUp>

      {/* 3.6 Tagline (centered) */}
      <FadeUp delay={0.6} className="w-full px-[15px] sm:px-[30px] pb-32 flex flex-col items-center text-center">
        <p className="text-white font-sans text-[20px] sm:text-[22px] mb-2">
          Building ideas through code and innovation.
        </p>
        <p className="text-white font-sans font-bold text-[20px] sm:text-[22px]">
          Think big. Build smart.
        </p>
      </FadeUp>
    </section>
  );
}
