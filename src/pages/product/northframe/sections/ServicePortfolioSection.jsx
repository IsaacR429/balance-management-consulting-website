import { useState } from "react";

import Container from "../../../../components/ui/Container.jsx";
import { services } from "../data/servicesData.js";

function ServicePortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section
      id="service-portfolio"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
      />

      <Container>
        {/* Introduction */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="h-0.5 w-9 bg-blue-600" />

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Service Portfolio
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
              From opportunity to sustained capability
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Select one focused engagement or combine the services into a
            coordinated delivery and assurance programme.
          </p>
        </div>

        {/* Service navigation */}
        <div className="mt-8 grid overflow-hidden rounded-t-2xl border border-b-0 border-slate-200 bg-slate-50 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const displayNumber = String(index + 1).padStart(2, "0");

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "group relative flex min-h-[76px] items-center gap-3 border-slate-200 px-5 py-4 text-left transition duration-300",
                  index > 0 ? "border-t sm:border-t-0" : "",
                  index % 2 !== 0 ? "sm:border-l" : "",
                  index > 0 ? "lg:border-l" : "",
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-slate-500 hover:bg-white/70 hover:text-slate-900",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition duration-300",
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]"
                      : "border-slate-300 bg-white text-slate-500 group-hover:border-blue-300 group-hover:text-blue-700",
                  ].join(" ")}
                >
                  {displayNumber}
                </span>

                <span className="text-sm font-semibold">
                  {service.title}
                </span>

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active service panel */}
        <div
          key={activeService.id}
          className="grid overflow-hidden rounded-b-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.07)] animate-[northframePanelIn_350ms_ease-out] lg:grid-cols-[1.08fr_0.92fr]"
        >
          {/* Service content */}
          <div className="relative p-6 sm:p-8 lg:p-9">
            <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-blue-600" />

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                {activeService.phase}
              </span>

              <span className="h-px w-8 bg-blue-200" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                BMC delivery service
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              {activeService.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {activeService.summary}
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Key activities
              </p>

              <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {activeService.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-[9px] font-bold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs leading-5 text-slate-700">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service visual */}
          <div className="group relative min-h-[255px] overflow-hidden bg-[#03142e] lg:min-h-[320px]">
            <img
              src={activeService.image}
              alt={activeService.imageAlt}
              loading="lazy"
              decoding="async"
              style={{
                objectPosition: activeService.imagePosition,
              }}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/90 via-[#020b1c]/25 to-transparent" />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:46px_46px]"
            />

            <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-100 backdrop-blur-md">
              Northframe delivery
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="flex items-end justify-between gap-5 rounded-xl border border-white/10 bg-slate-950/65 px-5 py-4 text-white backdrop-blur-md">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Active service
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {activeService.title}
                  </p>
                </div>

                <span className="text-2xl font-semibold text-blue-300">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicePortfolioSection;