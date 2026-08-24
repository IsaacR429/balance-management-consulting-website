import Container from "../../../components/ui/Container.jsx";
import { locations } from "../aboutData.js";

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="scroll-mt-24 bg-[#f8fafc] py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 h-px w-10 bg-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Global Presence
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Close to clients.
              <br />
              Connected across markets.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 lg:justify-self-end">
            BMC operates across India and Canada, supporting organisations
            across markets, industries and transformation programmes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.number}
              className="
                group overflow-hidden rounded-[24px]
                border border-slate-200 bg-white
                transition duration-300
                hover:-translate-y-1
                hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]
              "
            >
              {/* City image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={location.image}
                  alt={location.imageAlt}
                  style={{
                    objectPosition: location.imagePosition,
                  }}
                  className="
                    h-full w-full object-cover
                    transition duration-700
                    group-hover:scale-[1.025]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#020b1c]/55
                    via-transparent
                    to-transparent
                  "
                />

                <div className="absolute left-5 top-5">
                  <span
                    className="
                      rounded-full border border-white/20
                      bg-[#020b1c]/70
                      px-3 py-1.5
                      text-[11px] font-semibold
                      uppercase tracking-[0.18em]
                      text-white backdrop-blur-sm
                    "
                  >
                    {location.country}
                  </span>
                </div>
              </div>

              {/* Location information */}
              <div className="p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-blue-600">
                    {location.number}
                  </span>

                  <div
                    aria-hidden="true"
                    className="
                      h-px w-8 bg-blue-600
                      transition-all duration-300
                      group-hover:w-12
                    "
                  />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {location.city}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
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
