import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import studioImage from "../assets/images/Creature-RMJ-5.jpg";
import founderImage from "../assets/images/Jenn-ATLmag-1000.jpg";
import salonImage from "../assets/images/Creature-finished-4.jpg";
//import detailImage from "../assets/images/Creature-finished-11.jpg";
import colorImage from "../assets/images/Creature-finished-14.jpg";
import stylistImage from "../assets/images/RJ3_8407.1.jpg";

function About() {
  return (
    <main className="bg-[#F3EFE7] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-32">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
          About Creature Studio
        </p>

        <h1 className="max-w-6xl text-6xl leading-[0.88] tracking-[-0.08em] md:text-8xl lg:text-[10rem]">
          A space to
          <br />
          be yourself.
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-lg leading-8 text-[#171717]/70">
            A creative salon built around self-expression, community, thoughtful
            beauty, and authentic connection.
          </p>

          <div className="md:ml-auto">
            <p className="text-xs uppercase tracking-[0.15em] text-[#171717]/50">
              Established
            </p>

            <p className="mt-2 text-5xl tracking-[-0.06em]">2018</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden">
          <img
            src={studioImage}
            alt="Creature Studio interior"
            className="h-[350px] w-full object-cover md:h-[550px] lg:h-[700px]"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/50">
              Our mission
            </p>
          </div>

          <div>
            <h2 className="text-4xl leading-[1.05] tracking-[-0.06em] md:text-6xl">
              A safe space for
              <br />
              authentic selves.
            </h2>

            <p className="mt-8 text-base leading-7 text-[#171717]/70 md:text-lg md:leading-8">
              Our mission at Creature Studio is to create a safe space where
              everyone can show up as their authentic selves with respect,
              vulnerability, and an open heart.
            </p>

            <p className="mt-6 text-base leading-7 text-[#171717]/70 md:text-lg md:leading-8">
              We seek to be a source of knowledge, consistency, and growth for
              our Creature family and community. We believe everyone should have
              the freedom to create, express themselves, and feel comfortable in
              our space.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#171717] px-6 py-24 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <img
              src={founderImage}
              alt="Creature Studio founder"
              className="h-[450px] w-full object-cover md:h-[650px]"
            />
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
              Our story
            </p>

            <h2 className="text-5xl leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Built with
              <br />
              intention.
            </h2>

            <p className="mt-8 text-base leading-7 text-[#F3EFE7]/70 md:text-lg md:leading-8">
              Founded in 2018, Creature Studio is the result of years of
              collaboration between Jenn Jones and her partner, Raymond McCrea
              Jones.
            </p>

            <p className="mt-6 text-base leading-7 text-[#F3EFE7]/70 md:text-lg md:leading-8">
              Jenn brings years of experience working with hair products and
              developing her craft, while Ray contributes his creative direction
              and visual expertise.
            </p>

            <p className="mt-6 text-base leading-7 text-[#F3EFE7]/70 md:text-lg md:leading-8">
              Together, they created a salon centered on creativity, connection,
              and whole-body wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Experience */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mb-16 max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
            The Creature experience
          </p>

          <h2 className="text-5xl leading-[0.95] tracking-[-0.07em] md:text-7xl">
            Beauty beyond
            <br />
            the surface.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={salonImage}
              alt="Creature Studio salon interior"
              className="h-[400px] w-full object-cover md:h-[550px]"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={stylistImage}
              alt="Stylist working with a client"
              className="h-[400px] w-full object-cover md:h-[550px]"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-8 text-[#171717]/70">
            Creature Studio offers a bright, open, and inclusive environment
            where personalized hair and beauty services become part of your
            wellness routine.
          </p>

          <p className="text-lg leading-8 text-[#171717]/70">
            Our approach combines professional expertise, thoughtful
            consultation, personalized techniques, and products selected with
            care.
          </p>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-[#68705A] px-6 py-24 text-[#F3EFE7] md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/60">
              Our responsibility
            </p>

            <h2 className="text-5xl leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Beauty with
              <br />
              intention.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#F3EFE7]/80">
              We work toward reducing our environmental impact through
              thoughtful products, waste reduction, and sustainable salon
              practices.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#F3EFE7]/80">
              Creature Studio partners with Green Circle Salons to recycle
              beauty waste and offset its Scope 2 carbon emissions.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#F3EFE7]/70 pb-2 text-sm uppercase tracking-[0.12em]"
            >
              Visit the studio
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <img
            src={colorImage}
            alt="Creature Studio creative detail"
            className="h-[300px] w-full object-cover md:h-[500px]"
          />
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-4xl leading-[1.05] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            “Creature Studio is the embodiment of everything I want to give my
            clients.”
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#171717]/50">
            — Jenn Jones, Owner
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#171717] px-6 py-12 text-[#F3EFE7] md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1400px] border-t border-[#F3EFE7]/20 pt-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            {/* Heading */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
                Find us
              </p>

              <h2 className="max-w-xl text-5xl leading-[0.9] tracking-[-0.07em] md:text-6xl lg:text-8xl">
                Meet us
                <br />
                in Atlanta.
              </h2>
            </div>

            {/* Contact Details */}
            <div className="max-w-xs">
              <p className="text-sm leading-6 text-[#F3EFE7]/70">
                900 Dekalb Ave. NE
                <br />
                Suite 400
                <br />
                Atlanta, GA 30307
                <br />
                USA
              </p>

              <div className="mt-5 space-y-1 text-sm text-[#F3EFE7]/70">
                <p>678-701-7484</p>
                <p>info@creatureatl.com</p>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-3 border-b border-[#F3EFE7]/60 pb-2 text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
              >
                Contact us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
