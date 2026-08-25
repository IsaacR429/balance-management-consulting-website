import Container from "../../../components/ui/Container.jsx";
import { caseStudies } from "../caseStudiesData.js";

function CaseStudiesGridSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 border-b border-[#D8E0EB] pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Engagement Library
            </p>

            <h2 className="mt-6 text-[2.6rem] font-medium leading-[1.04] tracking-[-0.05em] text-[#020B1C] sm:text-[3.2rem]">
              Selected work across
              <br />
              critical technology priorities.
            </h2>
          </div>

          <p className="max-w-[590px] text-[1rem] leading-8 text-[#586981] lg:justify-self-end">
            A focused view of Balance engagements spanning transformation,
            cybersecurity, cloud, financial services and operational delivery.
          </p>
        </div>

        <div>
          {caseStudies.map((study) => (
            <article
              key={study.number}
              className="group grid gap-6 border-b border-[#D8E0EB] py-8 sm:grid-cols-[70px_1fr_180px] lg:grid-cols-[80px_0.72fr_1fr_190px] lg:items-center"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                {study.number}
              </span>

              <h3 className="text-[1.3rem] font-medium leading-[1.25] tracking-[-0.03em] text-[#020B1C] lg:text-[1.4rem]">
                {study.title}
              </h3>

              <p className="max-w-[610px] text-[0.9rem] leading-7 text-[#627188]">
                {study.description}
              </p>

              <div className="flex items-center justify-between gap-5 sm:col-start-3 lg:col-start-auto">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#8492A6]">
                  {study.category}
                </span>

                <span className="h-px w-7 bg-[#B4C1D2] transition-all duration-500 group-hover:w-12 group-hover:bg-[#2563EB]" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CaseStudiesGridSection;
