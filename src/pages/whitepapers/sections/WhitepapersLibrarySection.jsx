import Container from "../../../components/ui/Container.jsx";
import {
  featuredWhitepaper,
  whitepapers,
} from "../whitepapersData.js";

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.4"
    >
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h5" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function WhitepapersLibrarySection() {
  return (
    <section className="bg-[#F7F9FC] py-16 lg:py-20">
      <Container>
        {/* Featured insight */}
        <div className="overflow-hidden rounded-[26px] bg-[#020B1C] text-white">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-white/10 p-9 sm:p-11 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#79ACFF]">
                  {featuredWhitepaper.number}
                </span>

                <span className="text-[#6FA8FF]">
                  <DocumentIcon />
                </span>
              </div>

              <p className="mt-12 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7186A3]">
                Featured Insight
              </p>

              <h2 className="mt-5 max-w-[580px] text-[2.3rem] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[2.7rem]">
                {featuredWhitepaper.title}
              </h2>
            </div>

            <div className="flex min-h-[320px] flex-col justify-between p-9 sm:p-11 lg:p-12">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
                  {featuredWhitepaper.category}
                </p>

                <p className="mt-7 max-w-[650px] text-[1.05rem] leading-8 text-[#AFC0D7]">
                  Explore how artificial intelligence can support more informed
                  decisions, stronger operations and better execution across
                  increasingly digital insurance environments.
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-[0.75rem] uppercase tracking-[0.16em] text-[#657A98]">
                  Balance Perspective
                </span>

                <span className="h-px w-10 bg-[#6FA8FF]/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Library heading */}
        <div className="mt-16 grid gap-10 border-b border-[#D8E0EB] pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Insight Library
            </p>

            <h2 className="mt-6 max-w-[720px] text-[2.6rem] font-medium leading-[1.04] tracking-[-0.05em] text-[#020B1C] sm:text-[3.2rem]">
              Ideas shaped by
              <br />
              evolving priorities.
            </h2>
          </div>

          <p className="max-w-[590px] text-[1rem] leading-8 text-[#586981] lg:justify-self-end">
            A focused collection of Balance perspectives across technology,
            security, cloud, transformation and financial services.
          </p>
        </div>

        {/* Editorial rows */}
        <div>
          {whitepapers.map((paper) => (
            <article
              key={paper.number}
              className="group grid gap-5 border-b border-[#D8E0EB] py-7 sm:grid-cols-[70px_1fr_190px_auto] sm:items-center"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                {paper.number}
              </span>

              <h3 className="text-[1.25rem] font-medium leading-[1.25] tracking-[-0.03em] text-[#020B1C] sm:text-[1.35rem]">
                {paper.title}
              </h3>

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#8492A6]">
                {paper.category}
              </span>

              <div className="flex items-center justify-end gap-5">
                <span className="text-[#2563EB] opacity-70">
                  <DocumentIcon />
                </span>

                <span className="h-px w-7 bg-[#B4C1D2] transition-all duration-500 group-hover:w-12 group-hover:bg-[#2563EB]" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhitepapersLibrarySection;
