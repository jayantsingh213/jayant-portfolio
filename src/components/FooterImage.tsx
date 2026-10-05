import Image from "next/image";

export function FooterImage() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Image
        src="/images/couch-laptop.jpg"
        alt="Hands on laptop on a beige sofa"
        fill
        className="object-cover object-bottom"
        sizes="100vw"
      />
    </div>
  );
}
