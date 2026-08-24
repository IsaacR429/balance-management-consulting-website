import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { primaryNavigation } from "../../data/navigation.js";
import Container from "../ui/Container.jsx";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "group relative flex h-full items-center",
      "text-[0.94rem] font-medium tracking-[-0.01em]",
      "transition-colors duration-200",
      "after:absolute after:bottom-[16px] after:left-1/2",
      "after:h-[1.5px] after:-translate-x-1/2",
      "after:bg-[#2563EB]",
      "after:transition-all after:duration-300",
      isActive
        ? "text-[#0F172A] after:w-full"
        : "text-[#526078] after:w-0 hover:text-[#0F172A] hover:after:w-full",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5EAF1]/90 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between lg:h-[82px]">
          {/* Brand */}
          <Link
            to="/"
            aria-label="Balance Management Consulting homepage"
            className="group flex shrink-0 items-center gap-3 no-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-[#BFDBFE]
                bg-[#EFF6FF]
                text-sm font-semibold text-[#2563EB]
                transition-colors duration-200
                group-hover:border-[#93C5FD]
              "
            >
              B
            </div>

            <div className="hidden sm:block">
              <div className="text-[1.02rem] font-semibold leading-none tracking-[-0.035em] text-[#020B1C]">
                Balance
              </div>

              <div className="mt-1 text-[9.5px] font-semibold uppercase leading-none tracking-[0.14em] text-[#64748B]">
                Management Consulting
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden h-full items-center gap-8 xl:gap-9 lg:flex"
          >
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="
                group inline-flex min-h-[52px] items-center
                justify-between gap-7 rounded-xl
                bg-[#020F2B] px-6
                text-[0.95rem] font-medium text-white
                no-underline
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#061A3D]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#2563EB]
              "
            >
              Talk to Us

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl border border-[#DDE5F0]
              bg-white text-[#020B1C]
              transition-colors duration-200
              hover:bg-[#F8FAFC]
              lg:hidden
            "
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>

            <div className="relative h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-[2px] h-px w-5 bg-current",
                  "transition-all duration-300",
                  mobileMenuOpen
                    ? "top-[7px] rotate-45"
                    : "",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[7px] h-px w-5 bg-current",
                  "transition-opacity duration-200",
                  mobileMenuOpen
                    ? "opacity-0"
                    : "opacity-100",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[12px] h-px w-5 bg-current",
                  "transition-all duration-300",
                  mobileMenuOpen
                    ? "top-[7px] -rotate-45"
                    : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        className={[
          "overflow-hidden border-t border-[#E5EAF1]",
          "bg-white transition-all duration-300 lg:hidden",
          mobileMenuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0",
        ].join(" ")}
      >
        <Container>
          <nav
            aria-label="Mobile navigation"
            className="py-4"
          >
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between",
                    "border-b border-[#EEF2F6]",
                    "py-4 text-[0.95rem] font-medium",
                    "transition-colors duration-200",
                    isActive
                      ? "text-[#2563EB]"
                      : "text-[#475569] hover:text-[#020B1C]",
                  ].join(" ")
                }
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className="text-[#94A3B8]"
                >
                  →
                </span>
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mt-5 flex items-center justify-between
                rounded-xl bg-[#020F2B]
                px-5 py-4
                text-[0.95rem] font-medium
                text-white no-underline
              "
            >
              Talk to Us

              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Header;
