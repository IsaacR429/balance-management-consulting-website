import Container from "../../../components/ui/Container.jsx";

const outcomes = [
  {
    number: "01",
    title: "Resilience",
    description:
      "Strengthen recovery readiness, operational continuity and confidence across critical technology services.",
  },
  {
    number: "02",
    title: "Control",
    description:
      "Improve governance, change discipline, audit readiness and accountability across complex environments.",
  },
  {
    number: "03",
    title: "Security",
    description:
      "Reduce technology exposure through stronger architecture, controls, assessment and remediation.",
  },
  {
    number: "04",
    title: "Transformation",
    description:
      "Modernize platforms, automate operations and create stronger foundations for continuous change.",
  },
];

function OutcomeFrameworkSection() {
  return (
    <section className="bg-[#F7F9FC] py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 border-b border-[#D8E0EB] pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Business Outcomes
            </p>

            <h2 className="mt-6 max-w-[700px] text-[2.7rem] font-medium leading-[1.03] tracking-[-0.05em] text-[#020B1C] sm:text-[3.4rem] lg:text-[3.7rem]">
              Impact beyond
              <br />
              technology delivery.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#586981] lg:justify-self-end">
            Technology transformation creates value when it improves how an
            organization operates, controls risk and responds to change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <article
              key={outcome.number}
              className={[
                "group min-h-[280px] border-b border-[#D8E0EB] py-10 sm:px-7 lg:min-h-[300px] lg:py-12",
                index % 2 !== 0 ? "sm:border-l sm:border-[#D8E0EB]" : "",
                index > 0 ? "lg:border-l lg:border-[#D8E0EB]" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                  {outcome.number}
                </span>

                <span className="h-px w-8 bg-[#AFC0D3] transition-all duration-500 group-hover:w-14 group-hover:bg-[#2563EB]" />
              </div>

              <h3
                className="
                  mt-14 text-[1.8rem] font-medium tracking-[-0.04em]
                  text-[#020B1C]
                  transition-colors duration-300
                  group-hover:text-[#17243A]
                "
              >
                {outcome.title}
              </h3>

              <p className="mt-5 max-w-[300px] text-[0.93rem] leading-7 text-[#627188]">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OutcomeFrameworkSection;
