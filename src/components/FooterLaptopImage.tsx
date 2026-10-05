import Image from "next/image";

export function FooterLaptopImage() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Image
        src="/images/laptop-apple.jpg"
        alt="Hands typing on a laptop next to an apple and a mug"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}
