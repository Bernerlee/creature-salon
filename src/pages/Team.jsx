import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import team from "../data/team";

function Team() {
  return (
    <main className="bg-[#F3EFE7] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
          Creature Studio
        </p>

        <h1 className="max-w-6xl text-6xl leading-[0.88] tracking-[-0.08em] md:text-8xl lg:text-[10rem]">
          Our
          <br />
          Team
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <p className="max-w-xl text-lg leading-8 text-[#171717]/70 md:ml-auto">
            A collective of stylists, artists, creatives, and people who care
            deeply about the work they do and the people sitting in their
            chairs.
          </p>
        </div>
      </section>

      {/* Featured Team */}
      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {team.slice(0, 2).map((member) => (
            <article key={member.name} className="group">
              <div className="relative overflow-hidden bg-[#DDD8CE]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#171717]/90 p-6 text-[#F3EFE7] transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#F3EFE7]/50">
                    {member.role}
                  </p>

                  <p className="mt-2 text-lg">{member.pronouns}</p>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-6">
                <h2 className="text-2xl tracking-[-0.04em]">{member.name}</h2>

                <span className="text-xs uppercase tracking-[0.12em] text-[#171717]/50">
                  01
                </span>
              </div>

              <p className="mt-1 text-sm text-[#171717]/55">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="mb-10 flex items-end justify-between border-t border-[#171717]/20 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/50">
              The collective
            </p>

            <h2 className="mt-3 text-4xl tracking-[-0.06em] md:text-6xl">
              Meet the team.
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.15em] text-[#171717]/40 md:block">
            {team.length} Creatures
          </span>
        </div>

        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.slice(2).map((member, index) => (
            <article key={member.name} className="group">
              <div className="relative overflow-hidden bg-[#DDD8CE]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3EFE7] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl tracking-[-0.03em]">{member.name}</h3>

                  <p className="mt-1 text-sm text-[#171717]/55">
                    {member.role}
                  </p>
                </div>

                <span className="text-xs text-[#171717]/40">
                  {String(index + 3).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Level System */}
      <section className="bg-[#171717] px-6 py-20 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
              How it works
            </p>

            <h2 className="mt-5 max-w-xl text-5xl leading-[0.95] tracking-[-0.07em] md:text-7xl">
              A level for
              <br />
              every Creature.
            </h2>
          </div>

          <div className="max-w-lg md:ml-auto">
            <p className="text-lg leading-8 text-[#F3EFE7]/70">
              Creature Studio uses a level system for stylists. Each level is
              based on the value of the stylist's time, with higher levels
              reflecting higher demand and typically longer wait times for new
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#68705A] px-6 py-20 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-28">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-5xl leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Find your
            <br />
            Creature.
          </h2>

          <Link
            to="/book"
            className="inline-flex w-fit items-center gap-3 border-b border-[#F3EFE7]/70 pb-2 text-sm uppercase tracking-[0.12em]"
          >
            Book an appointment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Team;
