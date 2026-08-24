import Container from "../../../../components/ui/Container.jsx";
import { industryApplications } from "../data/industriesData.js";

function IndustryApplicationsSection() {
  return (
    <section
      id="industry-applications"
      className="relative isolate overflow-hidden bg-slate-50 py-12 sm:py-14"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100/45 blur-3xl"
      />

      <Container>
        {/* Introduction */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="h-0.5 w-9 bg-blue-600" />

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Priority Applications
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
              Apply shared context where it creates immediate value
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Begin with one focused priority and expand as measurable value
            grows.
          </p>
        </div>

        {/* Compact application framework */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {industryApplications.map((application, index) => (
              <ApplicationItem
                key={application.id}
                application={application}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ApplicationItem({ application, index }) {
  return (
    <article
      className={[
        "group relative px-6 py-6 transition duration-300 hover:bg-blue-50/45",
        index > 0 ? "border-t border-slate-200 md:border-t-0" : "",
        index % 2 !== 0 ? "md:border-l md:border-slate-200" : "",
        index > 0 ? "lg:border-l lg:border-slate-200" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[10px] font-bold tracking-[0.16em] text-blue-700">
          {application.number}
        </span>

        <span className="h-0.5 w-7 bg-blue-600 transition-all duration-300 group-hover:w-11" />
      </div>

      <h3 className="mt-5 text-base font-semibold leading-6 text-slate-950">
        {application.title}
      </h3>

      <p className="mt-3 text-xs leading-5 text-slate-600">
        {application.description}
      </p>
    </article>
  );
}

export default IndustryApplicationsSection;