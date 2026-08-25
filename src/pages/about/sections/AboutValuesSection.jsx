import Container from "../../../components/ui/Container.jsx";
import { values } from "../aboutData.js";

function ValueIcon({ title }) {
  switch (title) {
    case "Integrity":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-8 w-8 fill-none stroke-[#6FA8FF] stroke-[1.5]"
        >
          <path d="M24 5 38 10v11c0 9.5-5.7 17.2-14 22-8.3-4.8-14-12.5-14-22V10L24 5Z" />
          <path d="m17.5 23.5 4.2 4.2 8.8-9" />
        </svg>
      );

    case "Reliability":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-8 w-8 fill-none stroke-[#6FA8FF] stroke-[1.5]"
        >
          <path d="M17.5 17.5h-3a8.5 8.5 0 0 0 0 17h7" />
          <path d="M30.5 30.5h3a8.5 8.5 0 0 0 0-17h-7" />
          <path d="M17 24h14" />
          <circle cx="24" cy="24" r="3" fill="#6FA8FF" />
        </svg>
      );

    case "Equality":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-8 w-8 fill-none stroke-[#6FA8FF] stroke-[1.5]"
        >
          <circle cx="24" cy="13" r="4" />
          <circle cx="12" cy="19" r="3.5" />
          <circle cx="36" cy="19" r="3.5" />

          <path d="M18 35v-5a6 6 0 0 1 12 0v5" />
          <path d="M6.5 35v-4a5.5 5.5 0 0 1 8.5-4.6" />
          <path d="M41.5 35v-4a5.5 5.5 0 0 0-8.5-4.6" />

          <path d="M9 40h30" />
        </svg>
      );

    case "Adaptability":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-8 w-8 fill-none stroke-[#6FA8FF] stroke-[1.5]"
        >
          <path d="M35.5 16A15 15 0 0 0 11 17.5" />
          <path d="m10 10 1 7.5 7.5-1" />

          <path d="M12.5 32A15 15 0 0 0 37 30.5" />
          <path d="m38 38-1-7.5-7.5 1" />

          <path d="M18 24h12" />
        </svg>
      );

    default:
      return null;
  }
}

export default function AboutValuesSection() {
  return (
    <section className="bg-[#020B1C] py-16 text-white lg:py-20">
      <Container>
        {/* Intro */}
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-5 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              Our Principles
            </p>

            <h2 className="mt-5 max-w-[700px] text-[2.5rem] font-medium leading-[1.04] tracking-[-0.045em] sm:text-[3.2rem]">
              Principles that shape
              <br />
              every engagement.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#AFC0D7] lg:justify-self-end">
            Integrity, reliability, equality and adaptability shape Balance&apos;s
            culture, governance and relationships with clients and people.
          </p>
        </div>

        {/* 4 values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={value.number}
              className={[
                "group min-h-[220px] border-b border-white/10 py-8 sm:px-6 lg:py-10",
                index % 2 !== 0 ? "sm:border-l sm:border-white/10" : "",
                index > 0 ? "lg:border-l lg:border-white/10" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#6FA8FF]">
                  {value.number}
                </span>

                <div
                  className="
                    opacity-75
                    transition-[opacity,transform] duration-300
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                >
                  <ValueIcon title={value.title} />
                </div>
              </div>

              <h3 className="mt-8 text-[1.5rem] font-medium tracking-[-0.035em] text-white">
                {value.title}
              </h3>

              <p className="mt-4 max-w-[280px] text-[0.92rem] leading-7 text-[#91A5C0]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
