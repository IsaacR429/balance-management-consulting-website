import Container from "../../../components/ui/Container.jsx";

const identityItems = [
  {
    number: "01",
    label: "Our Purpose",
    title: "Technology with meaningful business outcomes.",
    description:
      "We connect technology transformation to the operating realities, priorities and outcomes that matter most to the organization.",
  },
  {
    number: "02",
    label: "Leadership",
    title: "Experience across industries, markets and transformation journeys.",
    description:
      "Our perspective combines business, operational and technology experience across complex enterprise environments.",
  },
  {
    number: "03",
    label: "Built for Change",
    title: "Clarity and control in environments that keep moving.",
    description:
      "Balance helps organizations adapt, modernize and execute without losing sight of resilience, governance or business continuity.",
  },
];

function AboutIdentitySection() {
  return (
    <section className="bg-[#F7F9FC] py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 border-b border-[#D8E0EB] pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Who We Are
            </p>

            <h2 className="mt-6 max-w-[720px] text-[2.7rem] font-medium leading-[1.03] tracking-[-0.05em] text-[#020B1C] sm:text-[3.4rem] lg:text-[3.7rem]">
              Experience built
              <br />
              to make complex
              <br />
              change work.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#586981] lg:justify-self-end">
            Transformation succeeds when strategy, technology and people move
            together. Balance brings those perspectives into one practical
            approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-3">
          {identityItems.map((item, index) => (
            <article
              key={item.number}
              className={[
                "group border-b border-[#D8E0EB] py-10 lg:min-h-[330px] lg:px-10 lg:py-12",
                index > 0 ? "lg:border-l lg:border-[#D8E0EB]" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                  {item.number}
                </span>

                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8492A6]">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-12 max-w-[390px] text-[1.65rem] font-medium leading-[1.15] tracking-[-0.035em] text-[#020B1C]">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[390px] text-[0.93rem] leading-7 text-[#627188]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutIdentitySection;
