import Container from "../../../components/ui/Container.jsx";

function CaseStudiesIntroSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Case Studies
            </p>

            <h1 className="mt-6 max-w-[760px] text-[3rem] font-medium leading-[1.02] tracking-[-0.055em] text-[#020B1C] sm:text-[3.7rem] lg:text-[4.1rem]">
              Transformation
              <br />
              in practice.
            </h1>
          </div>

          <p className="max-w-[600px] text-[1.05rem] leading-8 text-[#586981] lg:justify-self-end">
            Balance engagements across cybersecurity, technology
            transformation, resilience, operations and complex enterprise
            delivery.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default CaseStudiesIntroSection;
