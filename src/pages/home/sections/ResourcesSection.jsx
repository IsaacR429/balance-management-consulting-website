import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

const resources = [
  {
    number: "01",
    title: "Case Studies",
    description:
      "Explore Balance engagements, solutions and business outcomes.",
    link: "/case-studies",
    action: "Explore",
    type: "case-studies",
  },
  {
    number: "02",
    title: "White Papers",
    description:
      "Perspectives on technology, operations and transformation.",
    link: "/whitepapers",
    action: "Explore",
    type: "whitepapers",
  },
  {
    number: "03",
    title: "Our Locations",
    description:
      "Balance operates from Noida, Mohali and Edmonton.",
    link: "/about#locations",
    action: "View Locations",
    type: "locations",
  },
];

function ResourceGraphic({ type }) {
  const stroke = "#6FA8FF";

  if (type === "case-studies") {
    return (
      <svg
        viewBox="0 0 80 64"
        fill="none"
        aria-hidden="true"
        className="h-14 w-16"
      >
        <rect
          x="10"
          y="10"
          width="42"
          height="44"
          rx="6"
          stroke={stroke}
          strokeWidth="1.4"
          opacity="0.45"
        />

        <path
          d="M20 22H42"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="M20 31H38"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />

        <path
          d="M20 40H34"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.45"
        />

        <circle
          cx="57"
          cy="45"
          r="11"
          stroke={stroke}
          strokeWidth="1.4"
        />

        <path
          d="M57 39V51M51 45H63"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "whitepapers") {
    return (
      <svg
        viewBox="0 0 80 64"
        fill="none"
        aria-hidden="true"
        className="h-14 w-16"
      >
        <path
          d="M14 13H43L56 26V53H14V13Z"
          stroke={stroke}
          strokeWidth="1.4"
        />

        <path
          d="M43 13V26H56"
          stroke={stroke}
          strokeWidth="1.4"
        />

        <path
          d="M23 34H47"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />

        <path
          d="M23 42H42"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.45"
        />

        <circle
          cx="61"
          cy="17"
          r="4"
          fill={stroke}
          opacity="0.7"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      aria-hidden="true"
      className="h-14 w-16"
    >
      <circle
        cx="40"
        cy="30"
        r="18"
        stroke={stroke}
        strokeWidth="1.4"
        opacity="0.35"
      />

      <circle
        cx="40"
        cy="30"
        r="8"
        stroke={stroke}
        strokeWidth="1.4"
      />

      <circle
        cx="40"
        cy="30"
        r="3"
        fill={stroke}
      />

      <path
        d="M40 7V12M40 48V53M17 30H22M58 30H63"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 10H15M11 6L15 10L11 14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResourcesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="overflow-hidden rounded-[28px] bg-[#020F2B] text-white">
          {/* Main resources area */}
          <div className="grid lg:grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr]">
            {/* Intro */}
            <div className="flex min-h-[280px] flex-col justify-between border-b border-white/10 p-9 lg:min-h-[320px] lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#69A7FF]">
                  Resources
                </span>

                <h2 className="mt-7 max-w-xs text-4xl font-medium leading-[1.05] tracking-[-0.045em]">
                  Ideas grounded in real-world experience.
                </h2>

                <p className="mt-7 max-w-xs text-[0.98rem] leading-8 text-[#A9BAD2]">
                  Explore perspectives and examples drawn from Balance&apos;s work across
                  technology, transformation and operational change.
                </p>
              </div>

              <div className="mt-12 h-px w-10 bg-[#69A7FF]" />
            </div>

            {/* Resource links */}
            {resources.map((resource) => (
              <Link
                key={resource.number}
                to={resource.link}
                className="
                  group relative flex min-h-[280px] flex-col
                  border-b border-white/10 p-9
                  text-white no-underline
                  transition-colors duration-300
                  last:border-b-0
                  hover:bg-white/[0.035]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-inset
                  focus-visible:outline-[#69A7FF]
                  lg:min-h-[320px]
                  lg:border-b-0 lg:border-r
                  lg:last:border-r-0 lg:p-10
                "
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#69A7FF]">
                    {resource.number}
                  </span>

                  <div
                    className="
                      opacity-75
                      transition-[opacity,transform] duration-500
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  >
                    <ResourceGraphic type={resource.type} />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-[1.55rem] font-medium tracking-[-0.035em]">
                    {resource.title}
                  </h3>

                  <p className="mt-5 text-[0.95rem] leading-7 text-[#91A5C1] lg:min-h-[84px]">
                    {resource.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-sm font-medium text-white">
                      {resource.action}
                    </span>

                    <ArrowIcon
                      className="
                        h-[18px] w-[18px] text-[#69A7FF]
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col gap-8 border-t border-white/10 px-9 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-12 lg:py-9">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#69A7FF]">
                Start a Conversation
              </span>

              <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
                Ready to move your priorities forward?
              </h3>
            </div>

            <Link
              to="/contact"
              className="
                group inline-flex min-w-[168px] items-center justify-between
                gap-8 rounded-xl bg-white px-6 py-4
                font-medium text-[#020B1C] no-underline
                transition-colors duration-300
                hover:bg-[#F1F5F9]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#69A7FF]
              "
            >
              Talk to Us

              <ArrowIcon
                className="
                  h-[18px] w-[18px]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
