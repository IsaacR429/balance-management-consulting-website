import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

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

function ExpertiseCTASection() {
  return (
    <section className="bg-white pb-16 pt-0 lg:pb-20 lg:pt-0">
      <Container>
        <div className="flex flex-col gap-8 rounded-[24px] bg-[#020B1C] px-8 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
              Start a Conversation
            </p>

            <h2 className="mt-4 max-w-[760px] text-[2rem] font-medium tracking-[-0.04em] sm:text-[2.4rem]">
              Move your next transformation priority forward.
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-between gap-8 rounded-xl bg-white px-6 py-4 font-medium text-[#020B1C] no-underline transition-colors duration-300 hover:bg-[#F1F5F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79ACFF]"
          >
            Talk to Us

            <ArrowIcon
              className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ExpertiseCTASection;
