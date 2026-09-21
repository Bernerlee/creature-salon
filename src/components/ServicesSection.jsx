import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import services from "../data/services";

function ServicesSection() {
  // Display only selected categories on the homepage
  const featuredServices = services.slice(0, 4);

  return (
    <section className="bg-[#F3EFE7] px-6 py-24 text-[#171717] md:px-10 lg:px-16 lg:py-32">
      {/* Section Header */}
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
            What we do
          </p>

          <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Services made
            <br />
            for you.
          </h2>
        </div>

        <Link
          to="/services"
          className="flex w-fit items-center gap-2 border-b border-[#171717] pb-2 text-sm uppercase tracking-[0.12em]"
        >
          View all services
          <ArrowUpRight size={17} />
        </Link>
      </div>

      {/* Service Categories */}
      <div>
        {featuredServices.map((category, index) => (
          <article
            key={category.category}
            className="grid gap-6 border-t border-[#171717]/20 py-8 md:grid-cols-[0.8fr_1.5fr] md:items-center"
          >
            {/* Category */}
            <div className="flex items-start gap-5">
              <span className="text-xs text-[#171717]/45">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl tracking-[-0.04em] md:text-4xl">
                {category.category}
              </h3>
            </div>

            {/* Service Preview */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#171717]/60">
              {category.services.slice(0, 3).map((service) => (
                <span key={service.name}>{service.name}</span>
              ))}

              {category.services.length > 3 && <span>+ more</span>}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-3 bg-[#171717] px-6 py-4 text-sm uppercase tracking-[0.12em] text-[#F3EFE7] transition-opacity hover:opacity-80"
        >
          Explore service menu
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
