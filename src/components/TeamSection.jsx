import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import team from "../data/team";

function TeamSection() {
  return (
    <section className="bg-[#F3EFE7] px-6 py-24 md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 border-t border-black/15 pt-5 md:mb-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:text-xs">
                04 / The Team
              </p>

              <h2 className="font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.82] tracking-[-0.06em]">
                Meet the
                <br />
                <span className="italic">Creatures.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-[#171717]/70">
              A collective of creative minds, skilled hands, and unique
              perspectives.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Link to="/team" key={member.id} className="group block">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#DCD6CC]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition-colors duration-500 group-hover:bg-black/30">
                  <div className="flex w-full translate-y-4 items-center justify-between text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em]">
                      View Profile
                    </span>

                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.03em]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#171717]/60">
                    {member.role}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-end md:mt-20">
          <Link
            to="/team"
            className="group flex items-center gap-3 border-b border-black/40 pb-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-black"
          >
            Meet the Full Team
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

export default TeamSection;
