import Container from "../../../components/ui/Container.jsx";
import { locations } from "../aboutData.js";

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="scroll-mt-24 bg-[#F7F9FC] py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-8 border-b border-[#D8E0EB] pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-5 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Our Locations
            </p>

            <h2 className="mt-5 max-w-xl text-[2.5rem] font-medium leading-[1.04] tracking-[-0.045em] text-[#020B1C] sm:text-[3.2rem]">
              Connected across markets.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#586981] lg:justify-self-end">
            Balance operates in India and Canada, supporting organizations
            across markets, industries and transformation programs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.number}
              className="
                group overflow-hidden rounded-[20px]
                border border-[#D8E0EB] bg-white
                transition-colors duration-300
                hover:border-[#C5D1E0]
              "
            >
              {/* City image */}
              <div className="relative h-[260px] overflow-hidden bg-[#E2E8F0] lg:h-[270px]">
                <img
                  src={location.image}
                  alt={location.imageAlt}
                  style={{
                    objectPosition: location.imagePosition,
                  }}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.015]
                  "
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/60 via-transparent to-transparent"
                />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-[#020B1C]/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {location.country}
                  </span>
                </div>
              </div>

              {/* Location info */}
              <div className="p-6 lg:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                    {location.number}
                  </span>

                  <span className="h-px w-8 bg-[#2563EB] transition-all duration-300 group-hover:w-14" />
                </div>

                <h3 className="mt-6 text-[1.5rem] font-medium tracking-[-0.03em] text-[#020B1C]">
                  {location.city}
                </h3>

                <p className="mt-2 text-[0.92rem] text-[#627188]">
                  {location.region}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
