import Image from "next/image";

type GridItem = {
  id: string;
  image: string;
  title: string;
  description: string;
};

interface ImageCaptionGridProps {
  items: GridItem[];
}

export function ImageCaptionGrid({ items }: ImageCaptionGridProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[20px] px-[15px] sm:px-[22px]">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col group">
          <div className="relative w-full aspect-[4/5] object-cover mb-4 lg:mb-5 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col mt-auto flex-1">
            <h3 className="font-sans font-bold uppercase text-[14px] leading-tight mb-1 text-[#0A0A0A]">
              {item.title}
            </h3>
            <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#1F1F1F]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
