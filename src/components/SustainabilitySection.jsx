import { ArrowUpRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

import sustainabilityImage from "../assets/images/workshops-photo.jpg";

function SustainabilitySection() {
  return (
    <section className="overflow-hidden bg-[#171717] px-6 py-24 text-[#F3EFE7] md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-t border-white/20 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 md:mb-24 md:text-xs">
          <span>05 / Our Approach</span>

          <div className="flex items-center gap-2">
            <Leaf size={15} strokeWidth={1.5} />
            Conscious Beauty
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Text Content */}
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
              Beauty With Intention
            </p>

            <h2 className="font-serif text-[clamp(4rem,9vw,10rem)] leading-[0.8] tracking-[-0.06em]">
              Beauty
              <br />
              <span className="italic">that cares.</span>
            </h2>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-white/60 md:mt-14">
              We believe taking care of yourself should also mean taking care of
              the world around you.
            </p>

            <Link
              to="/about"
              className="group mt-10 flex w-fit items-center gap-3 border-b border-white/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-white"
            >
              Discover Our Approach
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Image + Statistic */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sustainabilityImage}
                alt="Creature Studio workshop"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Image Caption */}
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
              Creature Studio / Community
            </p>
          </div>
        </div>

        {/* Statistic */}
        <div className="mt-24 border-t border-white/20 pt-10 md:mt-36 md:pt-14">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="text-[clamp(6rem,16vw,15rem)] font-serif leading-[0.75] tracking-[-0.07em]">
                95<span className="text-[0.5em]">%</span>
              </p>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                Beauty Waste Recycled
              </p>
            </div>

            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-white/60">
                Through our sustainability efforts, we work toward reducing
                waste and creating a more conscious salon experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilitySection;
