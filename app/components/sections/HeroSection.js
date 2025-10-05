import Image from "next/image";

export default function HeroSection({ title, subtitle, description, image }) {
  return (
    <div className=" relative overflow-hidden h-[100dvh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className=" w-full object-cover [object-position:50%_75%]"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 md:px-20 py-16 md:py-24 relative h-full flex flex-col gap-8 justify-end">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight   text-white w-fit">
            {title}
            {subtitle && (
              <span className="block text-2xl lg:text-5xl font-normal text-white mt-2">
                {subtitle}
              </span>
            )}
          </h1>
        </div>

        {description && (
          <p className="text-lg md:text-3xl text-white leading-relaxed ">
            {description}
          </p>
        )}

        <div className="flex flex-col gap-1 text-center w-fit">
          <a
            href="tel:+381643824647"
            className="text-white text-xl md:text-2xl flex items-center gap-2 bg-[#494179] px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:bg-[#3A2D6A] "
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>{" "}
            +381643824647
          </a>
          <p className="text-white text-base mt-1">
            Pozovite nas za brzu konsultaciju
          </p>
        </div>
      </div>
    </div>
  );
}
