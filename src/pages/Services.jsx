import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import services from "../data/services";

function Services() {
  return (
    <main className="bg-[#F3EFE7] text-[#171717]">
      {/* Page Header */}
      <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
          Creature Studio
        </p>

        <h1 className="max-w-5xl text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
          Services
        </h1>

        <div className="mt-10 flex max-w-xl flex-col gap-6 md:ml-auto">
          <p className="text-lg leading-7 text-[#171717]/70">
            Thoughtful cuts, expressive color, and personalized beauty services
            designed to help you feel like yourself.
          </p>

          <Link
            to="/book"
            className="flex w-fit items-center gap-3 border-b border-[#171717] pb-2 text-sm uppercase tracking-[0.12em]"
          >
            Book an appointment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        {services.map((category, categoryIndex) => (
          <section
            key={category.category}
            className="border-t border-[#171717]/25 py-10 md:py-14"
          >
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.5fr]">
              {/* Category Title */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[#171717]/45">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </p>

                  <h2 className="max-w-xs text-3xl leading-tight tracking-[-0.05em] md:text-5xl">
                    {category.category}
                  </h2>
                </div>
              </div>

              {/* Services */}
              <div>
                {category.services.map((service) => (
                  <article
                    key={service.name}
                    className="border-b border-[#171717]/15 py-5 first:pt-0 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-base leading-6 md:text-lg">
                        {service.name}
                      </h3>

                      <p className="shrink-0 text-right text-sm text-[#171717]/65">
                        {service.price}
                      </p>
                    </div>

                    {service.description && (
                      <p className="mt-3 max-w-lg text-sm leading-6 text-[#171717]/55">
                        {service.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </section>

      {/* Booking CTA */}
      <section className="bg-[#68705A] px-6 py-24 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/60">
          Ready when you are
        </p>

        <h2 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
          Let’s create something that feels like you.
        </h2>

        <Link
          to="/book"
          className="mt-10 inline-flex items-center gap-3 border-b border-[#F3EFE7] pb-2 text-sm uppercase tracking-[0.12em]"
        >
          Book now
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Services;
