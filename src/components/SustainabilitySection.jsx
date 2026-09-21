import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import workshopsImage from "../assets/images/workshops-photo.jpg";

function SustainabilitySection() {
  return (
    <section className="bg-[#171717] px-6 py-24 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-16 border-t border-[#F3EFE7]/20 pt-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
          Our approach
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Statistic */}
        <div>
          <div className="flex items-baseline">
            <span className="text-[clamp(7rem,16vw,15rem)] font-light leading-[0.8] tracking-[-0.09em]">
              95
            </span>

            <span className="ml-2 text-5xl font-light tracking-[-0.06em] md:text-7xl">
              %
            </span>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[#F3EFE7]/60">
            Beauty waste recycled
          </p>
        </div>

        {/* Description */}
        <div className="max-w-md lg:ml-auto">
          <p className="text-xl leading-8 text-[#F3EFE7]/75 md:text-2xl md:leading-9">
            Through our sustainability efforts, we work toward reducing waste
            and creating a more conscious salon experience.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#F3EFE7]/60 pb-2 text-sm uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
          >
            Learn about our approach
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="mt-20 overflow-hidden">
        <img
          src={workshopsImage}
          alt="Creature Studio workshop"
          className="h-[300px] w-full object-cover md:h-[450px] lg:h-[550px]"
        />
      </div>
    </section>
  );
}

export default SustainabilitySection;
