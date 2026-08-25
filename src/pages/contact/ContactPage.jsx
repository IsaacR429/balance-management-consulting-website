import { Link } from "react-router-dom";

import Container from "../../components/ui/Container.jsx";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="1.5"
    >
      <path d="M5.6 3.7 8.3 3l2.1 5.1-2 1.4a15.8 15.8 0 0 0 6.1 6.1l1.4-2 5.1 2.1-.7 2.7a3 3 0 0 1-3 2.3C9.5 20.7 3.3 14.5 3.3 6.7a3 3 0 0 1 2.3-3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ContactPage() {
  return (
    <main className="bg-[#F7F9FC]">
      {/* Introduction */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
            <div>
              <div className="mb-6 h-px w-11 bg-[#2563EB]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
                Contact Balance
              </p>

              <h1 className="mt-6 max-w-[720px] text-[3rem] font-medium leading-[1.02] tracking-[-0.055em] text-[#020B1C] sm:text-[3.7rem] lg:text-[4.1rem]">
                Let&apos;s start
                <br />
                a conversation.
              </h1>
            </div>

            <p className="max-w-[600px] text-[1.05rem] leading-8 text-[#586981] lg:justify-self-end">
              Tell us about your business, technology or operational
              priorities. Our team will get in touch to understand where
              Balance can support you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact panel */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="overflow-hidden rounded-[26px] border border-[#D8E0EB] bg-white lg:grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* Contact details */}
            <aside className="relative overflow-hidden bg-[#020B1C] p-8 text-white sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                }}
              />

              <div className="relative flex h-full min-h-[500px] flex-col">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#79ACFF]">
                      01
                    </span>

                    <span className="h-px w-10 bg-[#79ACFF]/60" />
                  </div>

                  <p className="mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7186A3]">
                    Contact Details
                  </p>

                  <h2 className="mt-5 max-w-[430px] text-[2rem] font-medium leading-[1.12] tracking-[-0.04em] sm:text-[2.3rem]">
                    Connect directly
                    <br />
                    with Balance.
                  </h2>

                  <p className="mt-5 max-w-[430px] text-[0.95rem] leading-7 text-[#9EB0C8]">
                    Speak with our team about your current priorities,
                    challenges and transformation plans.
                  </p>
                </div>

                <div className="mt-auto border-t border-white/10">
                  <a
                    href="tel:+918828040046"
                    className="group flex items-center gap-5 border-b border-white/10 py-6 text-white no-underline"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#79ACFF]">
                      <PhoneIcon />
                    </div>

                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#657A98]">
                        Phone · India
                      </p>

                      <p className="mt-1 font-medium">
                        +91 88280 40046
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@balancemc.com"
                    className="group flex items-center gap-5 border-b border-white/10 py-6 text-white no-underline"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#79ACFF]">
                      <MailIcon />
                    </div>

                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#657A98]">
                        Email
                      </p>

                      <p className="mt-1 font-medium">
                        info@balancemc.com
                      </p>
                    </div>
                  </a>
                </div>

                <p className="mt-7 text-[0.72rem] tracking-[0.08em] text-[#657A98]">
                  Balance Management Consulting
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between border-b border-[#D8E0EB] pb-8">
                <div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                    02
                  </span>

                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8492A6]">
                    Send Us a Message
                  </p>

                  <h2 className="mt-4 text-[2rem] font-medium tracking-[-0.04em] text-[#020B1C]">
                    How can we help?
                  </h2>
                </div>

                <span className="mt-1 h-px w-10 bg-[#AFC0D3]" />
              </div>

              <form className="mt-8">
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      Name *
                    </span>

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className="mt-3 w-full border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      Email *
                    </span>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="mt-3 w-full border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      Contact No. *
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      className="mt-3 w-full border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      Company Name *
                    </span>

                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      required
                      className="mt-3 w-full border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                    />
                  </label>
                </div>

                <label className="mt-7 block">
                  <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                    Country *
                  </span>

                  <select
                    name="country"
                    defaultValue=""
                    required
                    className="mt-3 w-full border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="mt-7 block">
                  <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                    Your Message *
                  </span>

                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="mt-3 w-full resize-none border-0 border-b border-[#CBD5E1] bg-transparent px-0 py-3 text-[#020B1C] outline-none transition-colors focus:border-[#2563EB]"
                  />
                </label>

                <div className="mt-9 flex flex-col gap-6 border-t border-[#E2E8F0] pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-3 text-[0.85rem] text-[#64748B]">
                    <input
                      type="checkbox"
                      name="subscribe"
                      className="h-4 w-4 accent-[#2563EB]"
                    />

                    <span>Subscribe to Balance updates</span>
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between gap-8 rounded-xl bg-[#020F2B] px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#061A3D]"
                  >
                    Submit

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-8 flex flex-col gap-5 border-t border-[#D8E0EB] py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Our Locations
              </p>

              <p className="mt-2 text-[0.95rem] text-[#586981]">
                Noida · Mohali · Edmonton
              </p>
            </div>

            <Link
              to="/about#locations"
              className="group inline-flex items-center gap-6 font-medium text-[#020B1C] no-underline"
            >
              View Our Locations

              <span className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ContactPage;
