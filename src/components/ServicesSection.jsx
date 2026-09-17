import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import services from "../data/services";

function ServicesSection() {
  return (
    <section className="bg-[#F3EFE7] px-6 py-24 md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-t border-black/15 pt-5 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:text-xs">
              03 / What We Do
            </p>

            <h2 className="max-w-3xl font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.82] tracking-[-0.06em]">
              Our
              <br />
              <span className="italic">Services.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-[#171717]/70">
            Express yourself through hair, color, and beauty designed around
            you.
          </p>
        </div>

        {/* Services List */}
        <div className="border-t border-black/20">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative border-b border-black/20 py-8 md:py-10 lg:py-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Number + Title */}
                <div className="flex items-start gap-6 md:items-center md:gap-12">
                  <span className="text-xs font-medium text-[#171717]/50">
                    {service.number}
                  </span>

                  <h3 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-none tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-3">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <Link
                  to="/services"
                  aria-label={`Explore ${service.title}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:bg-[#171717] group-hover:text-[#F3EFE7] md:h-16 md:w-16"
                >
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

              {/* Description */}
              <div className="mt-5 pl-10 md:ml-12 md:pl-0">
                <p className="max-w-sm text-sm leading-relaxed text-[#171717]/60">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-end md:mt-16">
          <Link
            to="/services"
            className="group flex items-center gap-3 border-b border-black/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-black"
          >
            View All Services
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

export default ServicesSection;
