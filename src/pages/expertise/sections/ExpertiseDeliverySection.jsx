import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";
import { deliverySteps } from "../expertiseData.js";

function ExpertiseDeliverySection() {
  return (
    <>
      <section className="bg-white py-24 lg:py-28">
        <Container>
          <div className="mb-12">
            <div className="mb-5 h-px w-10 bg-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              How We Work
            </p>

            <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
                From business priority to practical execution.
              </h2>

              <p className="max-w-xl leading-7 text-slate-600 lg:justify-self-end">
                BMC brings structure to transformation through a focused
                delivery approach that connects advisory, implementation and
                continuous improvement.
              </p>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[22px] border border-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <article
                key={step.number}
                className="relative min-h-[280px] border-b border-slate-200 p-7 transition-colors hover:bg-slate-50 md:border-r lg:border-b-0"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-blue-600">
                  {step.number}
                </span>

                <div className="mt-24">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 lg:pb-28">
        <Container>
          <div className="overflow-hidden rounded-[24px] bg-[#03142e] text-white">
            <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Start a Conversation
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  Bring the right expertise to your next transformation
                  priority.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Discuss your operating environment, technology priorities
                  and the right starting point with BMC.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-[#03142e] lg:self-auto"
              >
                Talk to Us
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ExpertiseDeliverySection;
