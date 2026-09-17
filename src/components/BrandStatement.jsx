import { ArrowDown } from "lucide-react";

function BrandStatement() {
  return (
    <section className="bg-[#F3EFE7] px-6 py-24 md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <div className="mb-16 flex items-center justify-between border-t border-black/15 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60 md:mb-24 md:text-xs">
          <span>01 / The Creature Experience</span>

          <ArrowDown size={16} strokeWidth={1.5} />
        </div>

        {/* Main Statement */}
        <div className="max-w-[1200px]">
          <h2 className="font-serif text-[clamp(3rem,7vw,8rem)] leading-[0.9] tracking-[-0.055em] text-[#171717]">
            A salon for
            <br />
            <span className="ml-[8%] italic">creative people,</span>
            <br />
            curious minds
            <br />
            <span className="ml-[16%] italic">and open spirits.</span>
          </h2>
        </div>

        {/* Supporting Content */}
        <div className="mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[#171717]/70">
            We believe beauty is personal, expressive, and never meant to fit
            into one box. Come as you are. Leave as something new.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]/60">
            Inman Park · Atlanta, GA
          </span>
        </div>
      </div>
    </section>
  );
}

export default BrandStatement;
