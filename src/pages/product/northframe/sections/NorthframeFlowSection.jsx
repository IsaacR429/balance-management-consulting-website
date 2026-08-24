import Container from "../../../../components/ui/Container.jsx";
import { northframeFlow } from "../data/industriesData.js";

function NorthframeFlowSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03142e] py-12 text-white sm:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.2),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:52px_52px]"
      />

      <Container>
        {/* Introduction */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <div className="h-0.5 w-9 bg-blue-500" />

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
              How Northframe Helps
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              From fragmented information to decision intelligence
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Northframe preserves the relationships between enterprise systems,
            operational context, decisions and outcomes.
          </p>
        </div>

        {/* Connected flow */}
        <div className="relative mt-9 overflow-hidden rounded-2xl border border-blue-300/20 bg-[#071a38]/70 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {northframeFlow.map((step, index) => (
              <FlowStep
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Platform statement */}
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10 text-blue-200">
            <div className="scale-90">
              <ShieldIcon />
            </div>
          </div>

          <p className="text-xs leading-5 text-slate-300 sm:text-sm">
            Northframe complements existing enterprise platforms rather than
            replacing them.
          </p>
        </div>
      </Container>
    </section>
  );
}

function FlowStep({ step, index }) {
  return (
    <article
      className={[
        "group relative px-6 py-7",
        index > 0 ? "border-t border-white/10 md:border-t-0" : "",
        index % 2 !== 0 ? "md:border-l md:border-white/10" : "",
        index > 0 ? "lg:border-l lg:border-white/10" : "",
      ].join(" ")}
    >
      {/* Connector arrow */}
      {index > 0 && (
        <div
          aria-hidden="true"
          className="absolute -left-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/25 bg-[#061a3d] text-xs text-blue-300 lg:flex"
        >
          →
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="text-[10px] font-bold tracking-[0.16em] text-blue-300">
          {step.number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center text-blue-400 transition duration-300 group-hover:text-blue-300">
          <div className="scale-[0.62]">
            <FlowIcon type={step.id} />
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-base font-semibold text-white">
        {step.title}
      </h3>

      <div className="mt-3 h-0.5 w-7 bg-blue-500 transition-all duration-300 group-hover:w-11" />

      <p className="mt-3 text-xs leading-5 text-slate-400">
        {step.description}
      </p>
    </article>
  );
}

function FlowIcon({ type }) {
  const iconClass =
    "h-16 w-16 transition-transform duration-300 group-hover:scale-105";

  if (type === "systems") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        className={iconClass}
      >
        <ellipse
          cx="27"
          cy="14"
          rx="17"
          ry="8"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M10 14V34C10 38.4 17.6 42 27 42C30.2 42 33.2 41.6 35.7 40.8"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M10 24C10 28.4 17.6 32 27 32C30.5 32 33.8 31.5 36.4 30.5"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M10 34C10 38.4 17.6 42 27 42"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="44"
          cy="43"
          r="10"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M44 38V48M39 43H49"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "context") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        className={iconClass}
      >
        <path
          d="M32 32L18 17M32 32L46 17M32 32L17 46M32 32L47 46"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="32"
          cy="32"
          r="7"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="15"
          cy="14"
          r="6"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="49"
          cy="14"
          r="6"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="14"
          cy="49"
          r="6"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <circle
          cx="50"
          cy="49"
          r="6"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  if (type === "memory") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        className={iconClass}
      >
        <path
          d="M25 13C17.8 13 12 18.8 12 26C12 29.5 13.4 32.7 15.7 35C13.4 37.1 12 40.1 12 43.5C12 50.4 17.6 56 24.5 56C28.1 56 31.3 54.5 33.6 52.1V17.2C31.2 14.6 28.2 13 25 13Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        <path
          d="M22 23C26 23 29 26 29 30M20 42C24.5 42 28 45.5 28 50"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <ellipse
          cx="47"
          cy="35"
          rx="10"
          ry="5"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M37 35V49C37 51.8 41.5 54 47 54C52.5 54 57 51.8 57 49V35"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M37 42C37 44.8 41.5 47 47 47C52.5 47 57 44.8 57 42"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      className={iconClass}
    >
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="32"
        cy="32"
        r="12"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="32"
        cy="32"
        r="4"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M32 8V13M32 51V56M8 32H13M51 32H56"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <path
        d="M12 3L19 6V11C19 15.5 16.1 19.3 12 21C7.9 19.3 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NorthframeFlowSection;