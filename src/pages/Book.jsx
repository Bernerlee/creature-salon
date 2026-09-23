import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const bookingCategories = [
  {
    number: "01",
    title: "Haircuts & Styling",
    description: "Cuts, styling, blowouts, silk presses and extensions.",
  },
  {
    number: "02",
    title: "Color",
    description:
      "From single process color to highlights, balayage and creative color.",
  },
  {
    number: "03",
    title: "Treatments",
    description:
      "Restorative treatments and add-ons designed for healthier hair.",
  },
  {
    number: "04",
    title: "Facial Services",
    description: "Customized facials and skin treatments with Kelly.",
  },
  {
    number: "05",
    title: "Brows & Lashes",
    description: "Brow shaping, tinting and lash services.",
  },
];

function Book() {
  return (
    <div className="bg-[#F3EFE7] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
            Book an appointment
          </p>

          <h1 className="max-w-6xl text-6xl leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
            Your time.
            <br />
            Your style.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-[#171717]/65 md:text-xl">
            Choose the service that feels right for you, then continue to our
            booking system to find your stylist and appointment time.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 border-t border-[#171717]/20 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/50">
              Choose a service
            </p>
          </div>

          <div>
            {bookingCategories.map((category) => (
              <article
                key={category.number}
                className="group grid gap-6 border-t border-[#171717]/20 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-10"
              >
                <span className="text-xs text-[#171717]/40">
                  {category.number}
                </span>

                <div>
                  <h2 className="text-3xl tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                    {category.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#171717]/55">
                    {category.description}
                  </p>
                </div>

                <a
                  href="#booking"
                  className="flex w-fit items-center gap-2 border-b border-[#171717]/40 pb-2 text-xs uppercase tracking-[0.12em]"
                >
                  Select
                  <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final booking CTA */}
      <section
        id="booking"
        className="bg-[#68705A] px-6 py-24 text-[#F3EFE7] md:px-10 md:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/60">
            Ready when you are
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <h2 className="max-w-3xl text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Let's create
              <br />
              something.
            </h2>

            <div className="max-w-sm md:ml-auto">
              <p className="mb-8 text-base leading-7 text-[#F3EFE7]/75">
                Continue to Creature Studio's booking system to choose your
                service, stylist, date and available time.
              </p>

              {/* Replace the href with the real booking-system URL */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#F3EFE7] px-7 py-5 text-sm uppercase tracking-[0.12em] text-[#171717] transition-opacity hover:opacity-80"
              >
                Continue to booking
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Small navigation */}
      <section className="bg-[#171717] px-6 py-10 text-[#F3EFE7] md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-[#F3EFE7]/50">Need help choosing a service?</p>

          <Link
            to="/services"
            className="flex w-fit items-center gap-2 border-b border-[#F3EFE7]/40 pb-1 uppercase tracking-[0.1em]"
          >
            View full service menu
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Book;
