import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-brand-black flex flex-col items-center justify-center px-[15px] sm:px-[30px] text-center">
      <h1 className="font-serif text-[20vw] sm:text-[15vw] leading-none text-brand-cream tracking-tighter m-0">
        404
      </h1>
      <h2 className="font-sans font-medium text-[24px] sm:text-[32px] text-brand-cream/80 mt-4 mb-10">
        You seem to have drifted off course.
      </h2>
      <p className="font-sans text-[16px] sm:text-[18px] text-brand-cream/60 max-w-md mx-auto mb-12">
        The page you are looking for doesn't exist or has been moved. 
        Let's get you back to familiar territory.
      </p>
      <Link 
        href="/"
        className="border border-brand-cream text-brand-black bg-brand-cream rounded-full py-4 px-8 text-center text-[18px] font-sans font-bold transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
