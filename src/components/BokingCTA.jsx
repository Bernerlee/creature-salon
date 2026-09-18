import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function BookingCTA() {
  return (
    <section className="bg-[#68705A] px-6 py-24 text-[#F3EFE7] md:px-10 md:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <div className="mb-16 flex items-center justify-between border-t border-white/30 pt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 md:mb-24 md:text-xs">
          <span>07 / Your Next Chapter</span>
          <span>Creature Studio</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-[1100px]">
          <h2 className="font-serif text-[clamp(4rem,9vw,10rem)] leading-[0.8] tracking-[-0.06em]">
            Ready to
            <br />
            wake up
            <br />
            <span className="italic">your Creature?</span>
          </h2>
        </div>

        {/* Bottom Content */}
        <div className="mt-16 flex flex-col justify-between gap-10 md:mt-24 md:flex-row md:items-end">
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Your next look starts here. Come as you are and let your
            individuality shine.
          </p>

          <Link
            to="/book"
            className="group flex w-fit items-center gap-4 bg-[#F3EFE7] px-7 py-5 text-xs font-medium uppercase tracking-[0.12em] text-[#171717] transition-colors duration-300 hover:bg-[#171717] hover:text-[#F3EFE7]"
          >
            Book an Appointment
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
