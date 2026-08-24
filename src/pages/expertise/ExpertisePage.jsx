import { Link } from "react-router-dom";

import heroImage from "../../assets/images/expertise/expertise-hero.webp";
import { expertiseAreas } from "./expertiseData.js";
import HowWeWorkSection from "./sections/HowWeWorkSection.jsx";

function ExpertiseHero() {
  return (
    <section className="relative overflow-hidden bg-[#020b1c] text-white">
      {/* subtle technology grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-50
          [background-image:linear-gradient(rgba(96,165,250,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.055)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="relative mx-auto grid max-w-[1440px] lg:grid-cols-[54%_46%]">
        {/* Content */}
        <div className="relative z-20 flex min-h-[600px] items-center px-6 py-20 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-[760px]">
            <div className="mb-7 h-px w-11 bg-blue-400" />

            <p className="mb-7 text-[13px] font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our Expertise
            </p>

            <h1 className="max-w-[760px] text-[48px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[58px] lg:text-[66px]">
              Expertise that connects strategy, operations and technology.
            </h1>

            <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-slate-300">
              BMC brings together business consulting, operational expertise
              and modern technology to help organisations move from intent to
              practical execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="
                  inline-flex items-center gap-5 rounded-lg bg-white
                  px-6 py-4 font-medium text-[#071427]
                  transition duration-200 hover:-translate-y-0.5
                "
              >
                Explore Capabilities
                <span aria-hidden="true">↓</span>
              </a>

              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-5 rounded-lg
                  border border-white/20 px-6 py-4 font-medium text-white
                  transition duration-200
                  hover:border-white/40 hover:bg-white/5
                "
              >
                Talk to Us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden min-h-[600px] overflow-hidden lg:block">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020b1c]/20" />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#020b1c]
              via-[#020b1c]/45
              to-transparent
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#020b1c]/75
              via-transparent
              to-[#020b1c]/20
            "
          />
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ area }) {
  return (
    <article
      className="
        group overflow-hidden rounded-[22px]
        border border-slate-200 bg-white
        transition duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_50px_rgba(15,23,42,0.07)]
      "
    >
      {/* Smaller landscape image */}
      <div className="relative h-[170px] overflow-hidden sm:h-[190px]">
        <img
          src={area.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/30 via-transparent to-transparent" />

        <span
          className="
            absolute left-5 top-5
            rounded-full border border-white/20
            bg-[#020b1c]/75 px-3 py-1
            text-[11px] font-semibold tracking-[0.18em]
            text-blue-200 backdrop-blur-sm
          "
        >
          {area.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        <h3
          className="
            text-[22px] font-semibold
            tracking-[-0.025em]
            text-[#071427]
            sm:text-[24px]
          "
        >
          {area.title}
        </h3>

        <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-slate-600">
          {area.description}
        </p>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <ul className="space-y-3">
            {area.capabilities.map((capability, index) => (
              <li
                key={capability}
                className="grid grid-cols-[34px_1fr] items-start gap-3"
              >
                <span className="text-[12px] font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[15px] font-medium text-slate-800">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ExpertiseCapabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[#f8fafc] px-6 py-24 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          className="
            mb-12 grid gap-8
            lg:grid-cols-[1fr_0.9fr]
            lg:items-end
          "
        >
          <div>
            <div className="mb-6 h-px w-11 bg-blue-600" />

            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-blue-600">
              Our Capabilities
            </p>

            <h2 className="max-w-[720px] text-[42px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#070f22] sm:text-[48px]">
              Capabilities built for complex, regulated transformation.
            </h2>
          </div>

          <p className="max-w-[610px] text-[17px] leading-8 text-slate-600 lg:pb-2">
            Our capabilities combine business knowledge, operational experience
            and technology delivery rather than treating each discipline in
            isolation.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {expertiseAreas.map((area) => (
            <CapabilityCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCTA() {
  return (
    <section className="bg-white px-6 pb-24 sm:px-10 lg:px-14">
      <div
        className="
          mx-auto grid max-w-[1440px]
          gap-10 rounded-[26px]
          bg-[#03142e]
          px-8 py-12 text-white
          lg:grid-cols-[1fr_auto]
          lg:items-center
          lg:px-12
        "
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-300">
            Start a Conversation
          </p>

          <h2 className="mt-5 max-w-[800px] text-[34px] font-semibold leading-tight tracking-[-0.035em]">
            Bring the right expertise to your next transformation priority.
          </h2>

          <p className="mt-5 max-w-[760px] leading-7 text-slate-300">
            Discuss your operating environment, technology priorities and the
            right starting point with BMC.
          </p>
        </div>

        <Link
          to="/contact"
          className="
            inline-flex items-center justify-center gap-5
            rounded-lg bg-white px-6 py-4
            font-medium text-[#071427]
            transition duration-200 hover:-translate-y-0.5
          "
        >
          Talk to Us
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseCapabilities />
      <HowWeWorkSection />
      <ExpertiseCTA />
    </>
  );
}
