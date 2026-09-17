import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/Jenn-salon-photoshoot-11-2.jpg";

function Hero() {
  return (
    <section className="bg-[#F3EFE7] px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-36 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        {/* Top Information */}
        <div className="mb-10 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:mb-14 md:text-xs">
          <span>Hair / Color / Beauty</span>
          <span>Inman Park · Atlanta, GA</span>
        </div>

        {/* Main Hero Layout */}
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:mb-8">
              Creative Hair Studio
            </p>

            <h1 className="max-w-[650px] font-serif text-[clamp(3.5rem,6.5vw,7rem)] leading-[0.88] tracking-[-0.055em] text-[#171717]">
              Hair for
              <br />
              people who
              <br />
              <span className="italic">aren't afraid</span>
              <br />
              to be
              <br />
              themselves.
            </h1>

            <p className="mt-8 max-w-[280px] text-sm leading-relaxed text-[#171717]/70 md:mt-10">
              A creative salon for brilliant weirdos, free spirits, and open
              minds.
            </p>

            <Link
              to="/book"
              className="group mt-8 flex w-fit items-center gap-3 bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[#F3EFE7] transition-colors duration-300 hover:bg-[#68705A] md:mt-10"
            >
              Book an Appointment
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="h-[55vh] min-h-[420px] max-h-[760px] w-full overflow-hidden md:h-[65vh] lg:h-[72vh]">
              <img
                src={heroImage}
                alt="Creature Studio hair styling"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Image Caption */}
            <div className="mt-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60">
              <span>Creature Studio</span>

              <span>Atlanta, GA</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex items-center justify-between border-t border-black/15 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:mt-20">
          <span>Est. Atlanta</span>

          <div className="flex items-center gap-3">
            Scroll to explore
            <ArrowDown size={15} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
