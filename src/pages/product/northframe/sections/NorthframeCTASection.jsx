import Container from "../../../../components/ui/Container.jsx";

function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 pb-16 pt-4 sm:pb-20"
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#061a3d] px-8 py-10 text-white shadow-[0_26px_70px_rgba(15,23,42,0.18)] sm:px-10 lg:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.38),transparent_38%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]"
          />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Start a conversation
              </p>

              <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                Ready to strengthen your technology operations?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Discuss your environment, priorities and the right starting
                point for Northframe.
              </p>
            </div>

            <a
              href="https://balancemc.com/"
              className="group inline-flex min-w-[190px] items-center justify-center rounded-md bg-white px-7 py-3.5 font-semibold text-blue-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100"
            >
              Talk to an Expert

              <span
                aria-hidden="true"
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTASection;
