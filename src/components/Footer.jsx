import { ArrowUpRight, ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] px-6 pb-8 pt-10 text-[#F3EFE7] md:px-10 lg:px-16">
      {/* Top Section */}
      <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-[#F3EFE7]/20 pb-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="text-4xl font-semibold tracking-[-0.08em]">
            CREATURE
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-6 text-[#F3EFE7]/60">
            A creative salon for people who embrace individuality,
            self-expression, and beautiful transformations.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
            Explore
          </p>

          <nav className="flex flex-col items-start gap-3">
            <Link to="/" className="transition-opacity hover:opacity-60">
              Home
            </Link>

            <Link
              to="/services"
              className="transition-opacity hover:opacity-60"
            >
              Services
            </Link>

            <Link to="/about" className="transition-opacity hover:opacity-60">
              Studio
            </Link>

            <Link to="/team" className="transition-opacity hover:opacity-60">
              Team
            </Link>

            <Link to="/contact" className="transition-opacity hover:opacity-60">
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F3EFE7]/50">
            Connect
          </p>

          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:hello@creatureatl.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-60"
            >
              hello@creatureatl.com
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-60"
            >
              Instagram
              <FaInstagram size={16} />
            </a>

            <Link
              to="/book"
              className="mt-3 inline-flex items-center gap-3 border border-[#F3EFE7]/40 px-5 py-3 text-sm transition-colors hover:bg-[#F3EFE7] hover:text-[#171717]"
            >
              Book an Appointment
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 pt-6 text-xs text-[#F3EFE7]/50 md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Creature Salon. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 self-start uppercase tracking-[0.15em] transition-colors hover:text-[#F3EFE7]"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
