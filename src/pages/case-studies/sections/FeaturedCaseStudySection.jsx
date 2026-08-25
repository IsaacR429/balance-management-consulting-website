import Container from "../../../components/ui/Container.jsx";
import { featuredCaseStudy } from "../caseStudiesData.js";

function FeaturedCaseStudySection() {
  return (
    <section className="bg-[#F7F9FC] pb-16 lg:pb-20">
      <Container>
        <div className="overflow-hidden rounded-[26px] bg-[#020B1C] text-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Engagement */}
            <div className="border-b border-white/10 p-9 sm:p-11 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#79ACFF]">
                    {featuredCaseStudy.number}
                  </span>

                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7186A3]">
                    {featuredCaseStudy.category}
                  </span>
                </div>

                <span className="h-px w-10 bg-[#79ACFF]/60" />
              </div>

              <p className="mt-12 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7186A3]">
                Featured Engagement
              </p>

              <h2 className="mt-5 text-[2.3rem] font-medium tracking-[-0.045em] sm:text-[2.7rem]">
                {featuredCaseStudy.title}
              </h2>

              <p className="mt-6 max-w-[570px] text-[0.95rem] leading-7 text-[#AFC0D7]">
                {featuredCaseStudy.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid sm:grid-cols-3">
              {featuredCaseStudy.metrics.map((metric, index) => (
                <div
                  key={metric.value}
                  className={[
                    "flex min-h-[310px] flex-col justify-between p-8 lg:p-9",
                    index > 0 ? "sm:border-l sm:border-white/10" : "",
                  ].join(" ")}
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#6FA8FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="text-[3rem] font-medium leading-none tracking-[-0.065em] sm:text-[3.4rem]">
                      {metric.value}
                    </div>

                    <p className="mt-5 max-w-[190px] text-[0.85rem] leading-6 text-[#91A5C0]">
                      {metric.label}
                    </p>
                  </div>

                  <div className="h-px w-8 bg-[#6FA8FF]/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCaseStudySection;
