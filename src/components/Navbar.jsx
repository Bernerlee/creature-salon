import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Policies", path: "/policies" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#F3EFE7]">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src="/src/assets/images/Diamond-Mark-04.png"
            alt="Creature Studio"
            className="h-9 w-auto"
          />

          <span className="text-xl font-semibold uppercase tracking-[-0.05em]">
            Creature
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs font-medium uppercase tracking-[0.12em] transition-opacity duration-300 hover:opacity-50"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/book"
            className="group flex items-center gap-2 bg-[#171717] px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] text-[#F3EFE7] transition-colors duration-300 hover:bg-[#68705A]"
          >
            Book Now
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center lg:hidden cursor-pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={1.5} />
          ) : (
            <Menu size={26} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-black/10 bg-[#F3EFE7] px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="text-2xl font-medium uppercase tracking-[-0.03em]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/book"
              onClick={closeMenu}
              className="flex w-fit items-center gap-2 bg-[#171717] px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] text-[#F3EFE7]"
            >
              Book Now
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
