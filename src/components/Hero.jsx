import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/Jenn-salon-photoshoot-11-2.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3EFE7] px-6 pb-10 pt-32 md:px-10 md:pt-40 lg:px-12 lg:pt-44">
      {/* Top Information */}
      <div className="mx-auto mb-10 flex max-w-[1440px] items-center justify-between text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/70 md:text-xs">
        <span>Hair / Color / Beauty</span>

        <span>Inman Park · Atlanta, GA</span>
      </div>

      {/* Hero Image */}
      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative ml-auto h-[55vh] w-full overflow-hidden md:h-[65vh] lg:h-[75vh] lg:w-[82%]">
          <img
            src={heroImage}
            alt="Creature Studio hair styling"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Image Label */}
          <div className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.15em] text-white md:bottom-8 md:left-8">
            Creature Studio
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative z-10 -mt-8 md:-mt-16 lg:-mt-24">
          <h1 className="max-w-[1100px] text-[clamp(3.5rem,9vw,9rem)] font-serif leading-[0.82] tracking-[-0.06em] text-[#171717]">
            Hair for people
            <br />
            <span className="ml-[8%] italic">who aren't afraid</span>
            <br />
            to be themselves.
          </h1>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
        {/* Description */}
        <p className="max-w-xs text-sm leading-relaxed text-[#171717]/70">
          A creative salon for brilliant weirdos, free spirits, and open minds.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-start gap-6 md:items-end">
          <Link
            to="/book"
            className="group flex items-center gap-3 bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[#F3EFE7] transition-colors duration-300 hover:bg-[#68705A]"
          >
            Book an Appointment
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60">
            Scroll to explore
            <ArrowDown size={15} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
