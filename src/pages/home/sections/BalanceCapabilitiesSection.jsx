import Container from "../../../components/ui/Container.jsx";
import { balanceCapabilities } from "../homeData.js";

function BalanceCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-20 lg:py-24">
      {/* Subtle architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-500/[0.04] blur-[120px]"
      />

      <Container className="relative">
        {/* Intro */}
        <div className="grid gap-12 border-b border-[#D8E0EB] pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              What Balance Does
            </p>

            <h2 className="mt-6 max-w-[700px] text-balance text-[2.8rem] font-medium leading-[1.02] tracking-[-0.05em] text-[#020B1C] sm:text-[3.5rem] lg:text-[3.6rem]">
              Technology transformation with control built in.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-[610px] text-[1.05rem] leading-8 text-[#586981]">
              Balance helps complex organizations modernize technology,
              automate operations and strengthen the governance, security and
              resilience required to transform with confidence.
            </p>
          </div>
        </div>

        {/* Strategic capability grid */}
        <div className="grid lg:grid-cols-2">
          {balanceCapabilities.map((capability, index) => {
            const leftColumn = index % 2 === 0;
            const upperRow = index < 2;

            return (
              <article
                key={capability.number}
                className={[
                  "group relative py-10 sm:py-12 lg:min-h-[330px] lg:px-12 lg:py-12",
                  leftColumn ? "lg:pr-16" : "lg:pl-16",
                  !leftColumn ? "lg:border-l lg:border-[#D8E0EB]" : "",
                  index < balanceCapabilities.length - 1
                    ? "border-b border-[#D8E0EB] lg:border-b-0"
                    : "",
                  upperRow ? "lg:border-b lg:border-[#D8E0EB]" : "",
                ].join(" ")}
              >
                <div className="flex h-full flex-col">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
                      {capability.number}
                    </span>

                    <span className="h-px w-10 bg-[#A9B9CE] transition-all duration-500 group-hover:w-16 group-hover:bg-[#2563EB]" />
                  </div>

                  {/* Main content */}
                  <div className="mt-10">
                    <h3 className="max-w-[520px] text-[2rem] font-medium leading-[1.08] tracking-[-0.04em] text-[#020B1C] sm:text-[2.25rem]">
                      {capability.title}
                    </h3>

                    <p className="mt-6 max-w-[540px] text-[1rem] leading-8 text-[#627188]">
                      {capability.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mt-auto pt-8">
                    <div className="border-t border-[#D8E0EB]">
                      {capability.services.map((service) => (
                        <div
                          key={service}
                          className="
                            flex items-center justify-between
                            border-b border-[#E1E7EF] py-4
                          "
                        >
                          <span
                            className="
                              text-[0.92rem] font-medium text-[#24334A]
                              transition-colors duration-300
                              group-hover:text-[#17243A]
                            "
                          >
                            {service}
                          </span>

                          <span
                            aria-hidden="true"
                            className="
                              h-1.5 w-1.5 rounded-full
                              bg-[#2563EB] opacity-55
                              transition-opacity duration-300
                              group-hover:opacity-100
                            "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Restrained hover accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default BalanceCapabilitiesSection;
