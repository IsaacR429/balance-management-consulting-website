import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import balanceLogo from "../../assets/branding/balance-logo.svg";
import { primaryNavigation } from "../../data/navigation.js";
import Container from "../ui/Container.jsx";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 10H15M11 6L15 10L11 14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "group relative flex h-full items-center",
      "text-[0.94rem] font-medium tracking-[-0.01em]",
      "transition-colors duration-300",
      "after:absolute after:bottom-[16px] after:left-0",
      "after:h-px after:w-full after:origin-center",
      "after:bg-[#2563EB]",
      "after:transition-transform after:duration-300 after:ease-out",
      isActive
        ? "text-[#0F172A] after:scale-x-100"
        : "text-[#526078] after:scale-x-0 hover:text-[#0F172A] hover:after:scale-x-100",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5EAF1]/90 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between lg:h-[82px]">
          {/* Brand */}
          <Link
            to="/"
            aria-label="Balance homepage"
            className="group flex min-w-0 shrink-0 items-center no-underline sm:min-w-[205px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={balanceLogo}
              alt="Balance"
              className="
                h-[58px] w-auto
                object-contain
                transition-opacity duration-300
                group-hover:opacity-[0.92]
                sm:h-[64px]
                lg:h-[70px]
              "
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden h-full items-center gap-8 lg:flex xl:gap-9"
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
                transition-colors duration-300
                hover:bg-[#061A3D]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#2563EB]
              "
            >
              Talk to Us

              <ArrowIcon
                className="
                  h-[18px] w-[18px]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
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
              rounded-lg border border-[#DDE5F0]
              bg-white text-[#020B1C]
              transition-colors duration-300
              hover:bg-[#F7F9FC]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#2563EB]
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
                  mobileMenuOpen ? "top-[7px] rotate-45" : "",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[7px] h-px w-5 bg-current",
                  "transition-opacity duration-200",
                  mobileMenuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute left-0 top-[12px] h-px w-5 bg-current",
                  "transition-all duration-300",
                  mobileMenuOpen ? "top-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        className={[
          "overflow-hidden border-t bg-white",
          "transition-[max-height,opacity,border-color] duration-300 ease-out",
          "lg:hidden",
          mobileMenuOpen
            ? "max-h-[520px] border-[#E5EAF1] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="py-4">
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "group flex items-center justify-between",
                    "border-b border-[#EEF2F6]",
                    "py-4 text-[0.95rem] font-medium",
                    "transition-colors duration-300",
                    isActive
                      ? "text-[#2563EB]"
                      : "text-[#475569] hover:text-[#020B1C]",
                  ].join(" ")
                }
              >
                <span>{item.label}</span>

                <ArrowIcon
                  className="
                    h-[17px] w-[17px] text-[#94A3B8]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#2563EB]
                  "
                />
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                group mt-5 flex items-center justify-between
                rounded-xl bg-[#020F2B]
                px-5 py-4
                text-[0.95rem] font-medium
                text-white no-underline
                transition-colors duration-300
                hover:bg-[#061A3D]
              "
            >
              Talk to Us

              <ArrowIcon
                className="
                  h-[18px] w-[18px]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Header;
