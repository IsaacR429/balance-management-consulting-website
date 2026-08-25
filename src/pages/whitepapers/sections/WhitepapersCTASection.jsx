import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

function WhitepapersCTASection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8 rounded-[24px] bg-[#020B1C] px-8 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
              Start a Conversation
            </p>

            <h2 className="mt-4 max-w-[760px] text-[2rem] font-medium tracking-[-0.04em] sm:text-[2.4rem]">
              Turn insight into practical action.
            </h2>

            <p className="mt-3 text-[0.95rem] text-[#91A5C0]">
              Discuss your technology and transformation priorities with
              Balance.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-between gap-8 rounded-xl bg-white px-6 py-4 font-medium text-[#020B1C] no-underline"
          >
            Talk to Us

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default WhitepapersCTASection;
