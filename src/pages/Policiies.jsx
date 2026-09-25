import { ArrowUpRight } from "lucide-react";
import policyImage from "../assets/images/Goddess_v-7+copyv+2.png";

const policies = [
  {
    number: "01",
    title: "Cancellation Policy",
    content:
      "Please provide adequate notice if you need to cancel or reschedule your appointment. Late cancellations and missed appointments may be subject to a fee.",
  },
  {
    number: "02",
    title: "Late Arrivals",
    content:
      "Arriving late may reduce the amount of time available for your service. Depending on the appointment and stylist availability, your service may need to be adjusted or rescheduled.",
  },
  {
    number: "03",
    title: "New Guests",
    content:
      "New guests may be asked to provide additional information before their appointment. This helps our team understand your needs and prepare for your visit.",
  },
  {
    number: "04",
    title: "Service Adjustments",
    content:
      "If you have questions or concerns about your service, please contact the studio so our team can help determine the best next step.",
  },
  {
    number: "05",
    title: "Payments",
    content:
      "Payment is due at the time of service. Pricing may vary depending on the stylist level and the complexity of the service.",
  },
];

function Policies() {
  return (
    <div className="bg-[#F3EFE7] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
            Studio policies
          </p>

          <h1 className="max-w-6xl text-6xl leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[10rem]">
            Good to
            <br />
            know.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-[#171717]/65 md:text-xl">
            A few things to know before your visit to Creature Studio.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 pb-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px] overflow-hidden">
          <img
            src={policyImage}
            alt="Creature Studio"
            className="h-[450px] w-full object-cover md:h-[750px] lg:h-[1200px]"
          />
        </div>
      </section>

      {/* Policies */}
      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 border-t border-[#171717]/20 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/50">
              Before your appointment
            </p>
          </div>

          <div>
            {policies.map((policy) => (
              <article
                key={policy.number}
                className="grid gap-6 border-t border-[#171717]/20 py-10 md:grid-cols-[80px_0.8fr_1.2fr] md:gap-10"
              >
                <span className="text-xs text-[#171717]/40">
                  {policy.number}
                </span>

                <h2 className="text-3xl tracking-[-0.05em] md:text-4xl">
                  {policy.title}
                </h2>

                <p className="max-w-xl text-sm leading-7 text-[#171717]/60 md:text-base">
                  {policy.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] px-6 py-24 text-[#F3EFE7] md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
            Questions?
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="max-w-3xl text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              We're here
              <br />
              to help.
            </h2>

            <div className="max-w-sm md:ml-auto">
              <p className="mb-8 text-sm leading-7 text-[#F3EFE7]/65">
                If you have questions about an appointment or one of our
                policies, reach out to the Creature Studio team.
              </p>

              <a
                href="mailto:info@creatureatl.com"
                className="inline-flex items-center gap-3 border-b border-[#F3EFE7]/50 pb-2 text-sm uppercase tracking-[0.12em]"
              >
                Email the studio
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Policies;
