import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import locationImage from "../assets/images/exterior-1.jpg";

function LocationSection() {
  return (
    <section className="bg-[#F3EFE7] px-6 py-24 md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <div className="mb-16 flex items-center justify-between border-t border-black/15 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:mb-24 md:text-xs">
          <span>08 / Find Us</span>

          <div className="flex items-center gap-2">
            <MapPin size={15} strokeWidth={1.5} />
            Inman Park
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          {/* Address */}
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-[#171717]/60">
              Come Find Us
            </p>

            <h2 className="font-serif text-[clamp(4rem,7vw,8rem)] leading-[0.82] tracking-[-0.06em]">
              Meet us
              <br />
              in
              <br />
              <span className="italic">Atlanta.</span>
            </h2>

            <div className="mt-12 space-y-2 text-sm leading-relaxed text-[#171717]/70">
              <p>900 Dekalb Ave NE</p>
              <p>Suite 400</p>
              <p>Atlanta, GA 30307</p>
            </div>

            <p className="mt-8 text-sm text-[#171717]/70">678 701 7484</p>

            <Link
              to="/contact"
              className="group mt-10 flex w-fit items-center gap-3 border-b border-black/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-black"
            >
              Get Directions
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Image */}
          <div>
            <div className="aspect-[4/5] overflow-hidden md:aspect-[5/4]">
              <img
                src={locationImage}
                alt="Creature Studio exterior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/50">
              Creature Studio / Inman Park
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
