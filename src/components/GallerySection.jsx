import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import imageOne from "../assets/images/Creature-finished-4.jpg";
import imageTwo from "../assets/images/1R7A3527.jpg";
import imageThree from "../assets/images/1R7A6486.jpg";
import imageFour from "../assets/images/RJ3_2724.jpg";
import imageFive from "../assets/images/RJ3_7357.jpg";
import imageSix from "../assets/images/Group-042.jpg";

const galleryImages = [
  {
    id: 1,
    image: imageOne,
    title: "Hair as Art",
    category: "Hair / Color",
    size: "large",
  },
  {
    id: 2,
    image: imageTwo,
    title: "Creative Expression",
    category: "Styling",
    size: "small",
  },
  {
    id: 3,
    image: imageThree,
    title: "The Creature Experience",
    category: "Salon / Beauty",
    size: "small",
  },
  {
    id: 4,
    image: imageFour,
    title: "Bold & Individual",
    category: "Color",
    size: "large",
  },
  {
    id: 5,
    image: imageFive,
    title: "Creative Details",
    category: "Hair / Style",
    size: "small",
  },
  {
    id: 6,
    image: imageSix,
    title: "Inside Creature",
    category: "Studio",
    size: "small",
  },
];

function GallerySection() {
  return (
    <section className="bg-[#F3EFE7] px-6 py-24 md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 border-t border-black/15 pt-5 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:text-xs">
              06 / Our Work
            </p>

            <h2 className="font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.82] tracking-[-0.06em]">
              Creature
              <br />
              <span className="italic">in the wild.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-[#171717]/70">
            A glimpse into our world of creativity, expression, and beauty.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${
                item.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  item.size === "large" ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition-colors duration-500 group-hover:bg-black/30 md:p-7">
                  <div className="flex w-full translate-y-4 items-end justify-between text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/70">
                        {item.category}
                      </p>

                      <h3 className="font-serif text-2xl">{item.title}</h3>
                    </div>

                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Image Caption */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.12em] text-[#171717]/50">
                <span>{item.category}</span>

                <span>{String(item.id).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-end md:mt-20">
          <Link
            to="/gallery"
            className="group flex items-center gap-3 border-b border-black/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-black"
          >
            Explore Full Gallery
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
