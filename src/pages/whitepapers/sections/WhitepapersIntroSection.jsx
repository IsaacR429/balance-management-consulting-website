import Container from "../../../components/ui/Container.jsx";

function WhitepapersIntroSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              White Papers
            </p>

            <h1 className="mt-6 max-w-[760px] text-[3rem] font-medium leading-[1.02] tracking-[-0.055em] text-[#020B1C] sm:text-[3.7rem] lg:text-[4.1rem]">
              Perspectives for
              <br />
              navigating change.
            </h1>
          </div>

          <div className="max-w-[600px] lg:justify-self-end">
            <p className="text-[1.05rem] leading-8 text-[#586981]">
              Knowledge creates value when it leads to better decisions and
              practical action.
            </p>

            <p className="mt-4 text-[1.05rem] leading-8 text-[#586981]">
              Explore Balance perspectives across technology, cybersecurity,
              cloud, AI and financial services.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhitepapersIntroSection;
