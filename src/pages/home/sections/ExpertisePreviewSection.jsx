import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

const expertiseItems = [
  {
    number: "01",
    title: "Strategy & Transformation",
  },
  {
    number: "02",
    title: "Operations & Governance",
  },
  {
    number: "03",
    title: "Technology & Cybersecurity",
  },
  {
    number: "04",
    title: "AI, Data & Automation",
  },
];

export default function ExpertisePreviewSection() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          {/* Left side */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Our Expertise
            </span>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#020B1C] sm:text-5xl lg:text-[3.35rem]">
              Practical expertise for
              <br />
              complex transformation.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#586981] lg:text-[1.05rem]">
              BMC combines consulting, operational and technology capabilities
              to help organisations move from strategy to execution.
            </p>

            <Link
              to="/expertise"
              className="group mt-9 inline-flex items-center gap-5 text-[0.95rem] font-medium text-[#020B1C]"
            >
              Explore Our Expertise

              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>

          {/* Right side */}
          <div className="border-t border-[#DCE4EF]">
            {expertiseItems.map((item) => (
              <Link
                key={item.number}
                to="/expertise"
                className="group grid min-h-[128px] grid-cols-[52px_1fr_auto] items-center gap-5 border-b border-[#DCE4EF] py-7 transition-colors duration-300 hover:bg-[#F7F9FC] sm:grid-cols-[70px_1fr_auto] sm:px-5"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                  {item.number}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#020B1C] sm:text-[1.45rem]">
                  {item.title}
                </h3>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E0ED] text-[#2563EB] transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
