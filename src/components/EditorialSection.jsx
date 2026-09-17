import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import editorialImage from "../assets/images/Creature-finished-4.jpg";

function EditorialSection() {
  return (
    <section className="overflow-hidden bg-[#171717] px-6 py-20 text-[#F3EFE7] md:px-10 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <div className="mb-16 flex items-center justify-between border-t border-white/20 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 md:mb-24 md:text-xs">
          <span>02 / Expression</span>
          <span>Hair as Art</span>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Text */}
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
              Discover Your Expression
            </p>

            <h2 className="font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.82] tracking-[-0.06em]">
              Wake
              <br />
              <span className="italic">the</span>
              <br />
              Creature.
            </h2>

            <p className="mt-10 max-w-sm text-sm leading-relaxed text-white/60">
              From bold color to effortless texture, we create looks that
              reflect who you are.
            </p>

            <Link
              to="/services"
              className="group mt-10 flex w-fit items-center gap-3 border-b border-white/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-white"
            >
              Explore Services
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={editorialImage}
                alt="Creature Studio finished hair work"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
              Creature Studio / Hair Art
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialSection;
