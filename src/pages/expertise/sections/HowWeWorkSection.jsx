const processSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the operating environment, priorities, constraints and opportunities.",
    icon: "assess",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the right operating model, solution approach and delivery roadmap.",
    icon: "design",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Bring together processes, technology and people to move from plan to execution.",
    icon: "implement",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "Run and support the environment with visibility, control and operational discipline.",
    icon: "operate",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Measure outcomes, strengthen controls and continuously improve performance.",
    icon: "improve",
  },
];

function AssessIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="34"
        cy="34"
        r="18"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="34"
        cy="34"
        r="7"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M34 9V16M34 52V59M9 34H16M52 34H59"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="2.5" fill="currentColor" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect
        x="18"
        y="18"
        width="36"
        height="36"
        rx="8"
        transform="rotate(45 36 36)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="36"
        cy="36"
        r="10"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M36 26V18M46 36H54M36 46V54M26 36H18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImplementIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="18"
        cy="25"
        r="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="54"
        cy="20"
        r="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="54"
        cy="52"
        r="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="28"
        cy="50"
        r="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M23 26L49 21M22 29L27 45M33 49L49 52M52 25V47"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <circle cx="38" cy="35" r="2.5" fill="currentColor" />
    </svg>
  );
}

function OperateIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect
        x="15"
        y="17"
        width="42"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <rect
        x="15"
        y="43"
        width="42"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle cx="22" cy="23" r="2" fill="currentColor" />
      <circle cx="22" cy="49" r="2" fill="currentColor" />

      <path
        d="M29 23H48M29 49H48M36 29V43"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImproveIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M52 25A20 20 0 0 0 18 31"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M18 31L18 21M18 31L28 31"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 47A20 20 0 0 0 54 41"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M54 41V51M54 41H44"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M29 39L35 33L40 38L47 29"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProcessIcon({ type }) {
  const icons = {
    assess: AssessIcon,
    design: DesignIcon,
    implement: ImplementIcon,
    operate: OperateIcon,
    improve: ImproveIcon,
  };

  const Icon = icons[type];

  return <Icon />;
}

export default function HowWeWorkSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1480px]">

        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 h-px w-11 bg-blue-600" />

            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-600">
              How We Work
            </p>

            <h2 className="max-w-[640px] text-[42px] font-medium leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[48px] lg:text-[54px]">
              From priority to measurable progress.
            </h2>
          </div>

          <p className="max-w-[610px] text-[17px] leading-8 text-slate-600 lg:pb-1">
            Balance brings focus and momentum to transformation through a practical
            delivery model that connects advisory, execution and continuous
            improvement.
          </p>
        </div>

        {/* Process */}
        <div className="mt-12 border-t border-slate-200 lg:mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={[
                  "group flex flex-col py-9 sm:px-7 lg:min-h-[285px] lg:px-6 lg:py-10 xl:px-8",
                  index % 2 !== 0
                    ? "sm:border-l sm:border-slate-200"
                    : "",
                  index > 1
                    ? "sm:border-t sm:border-slate-200 lg:border-t-0"
                    : "",
                  index > 0
                    ? "lg:border-l lg:border-slate-200"
                    : "",
                ].join(" ")}
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      h-[46px] w-[46px]
                      text-blue-500
                      transition-transform duration-300
                      group-hover:-translate-y-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    <ProcessIcon type={step.icon} />
                  </div>

                  <span className="pt-1 text-[12px] font-semibold tracking-[0.18em] text-blue-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-[23px] font-semibold tracking-[-0.025em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[290px] text-[15px] leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div
                    className="
                      mt-6 h-px w-8 bg-blue-500
                      transition-all duration-300
                      group-hover:w-12
                      motion-reduce:transition-none
                    "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
