import Container from "../../../components/ui/Container.jsx";
import { expertiseServices } from "../expertiseData.js";

function ExpertiseServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#F7F9FC] py-20 lg:py-24"
    >
      <Container>
        {/* Intro */}
        <div className="grid gap-10 border-b border-[#D8E0EB] pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Service Portfolio
            </p>

            <h2 className="mt-6 max-w-[680px] text-balance text-[2.7rem] font-medium leading-[1.03] tracking-[-0.05em] text-[#020B1C] sm:text-[3.4rem] lg:text-[3.7rem]">
              Eight capabilities. One connected approach.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#586981] lg:justify-self-end">
            Balance connects transformation, risk, resilience, governance,
            automation, data and cloud rather than treating them as isolated
            technology disciplines.
          </p>
        </div>

        {/* Catalogue */}
        <div className="grid lg:grid-cols-2">
          {expertiseServices.map((service, index) => {
            const leftColumn = index % 2 === 0;

            return (
              <article
                key={service.number}
                className={[
                  "group border-b border-[#D8E0EB] py-10 sm:py-12 lg:min-h-[320px] lg:py-12",
                  leftColumn ? "lg:pr-14" : "lg:border-l lg:pl-14",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
                    {service.number}
                  </span>

                  <span className="h-px w-9 bg-[#AFC0D3] transition-all duration-500 group-hover:w-14 group-hover:bg-[#2563EB]" />
                </div>

                <div className="mt-9 grid gap-8 md:grid-cols-[1fr_0.9fr] md:gap-10">
                  <div>
                    <h3 className="max-w-[440px] text-[1.75rem] font-medium leading-[1.12] tracking-[-0.04em] text-[#020B1C]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[470px] text-[0.95rem] leading-7 text-[#627188]">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-[#D8E0EB]">
                    {service.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-center justify-between border-b border-[#E2E8F0] py-3.5"
                      >
                        <span className="pr-4 text-[0.84rem] font-medium leading-6 text-[#314158]">
                          {capability}
                        </span>

                        <span
                          className="
                            h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]
                            opacity-55 transition-opacity duration-300
                            group-hover:opacity-100
                          "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ExpertiseServicesSection;
