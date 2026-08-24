import Container from "../../../components/ui/Container.jsx";
import { testimonials } from "../../../data/testimonials.js";

function StarRating({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-[15px] w-[15px] fill-[#2563EB]"
        >
          <path d="M10 1.8 12.5 6.9l5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L10 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientFeedbackSection() {
  return (
    <section className="bg-[#F7F9FC] py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Client Feedback
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#020B1C] sm:text-5xl lg:text-[3.35rem]">
              What our clients say.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#586981] lg:justify-self-end lg:text-[1.05rem]">
            Perspectives from organisations working with BMC across
            transformation, technology and operations.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group flex min-h-[520px] flex-col rounded-[24px] border border-[#DDE5F0] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.07)] lg:p-9"
            >
              {/* Number + quotation mark */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                  {testimonial.id}
                </span>

                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-7 w-7 fill-[#DCE9FF]"
                >
                  <path d="M6.8 18.3c0-5.2 2.4-9.2 7.1-12l1.6 2.5c-2.9 2-4.5 4.4-4.7 7.1h4.3v8.6H6.8v-6.2Zm11.1 0c0-5.2 2.4-9.2 7.1-12l1.6 2.5c-2.9 2-4.5 4.4-4.7 7.1h4.3v8.6h-8.3v-6.2Z" />
                </svg>
              </div>

              {/* Rating & Service Label */}
              <div className="mt-7">
                <StarRating rating={testimonial.rating} />

                {testimonial.service && (
                  <div className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                    {testimonial.service}
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote className="mt-7 text-[0.98rem] leading-8 text-[#52647F]">
                {testimonial.quote}
              </blockquote>

              {/* Client */}
              <div className="mt-auto pt-9">
                <div className="mb-7 h-px w-full bg-[#E5EAF1]" />

                <h3 className="text-[1rem] font-semibold leading-6 text-[#020B1C]">
                  {testimonial.name}
                </h3>

                <p className="mt-2 max-w-sm text-[0.9rem] leading-6 text-[#718097]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
