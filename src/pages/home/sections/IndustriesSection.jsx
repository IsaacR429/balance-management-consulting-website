import Container from "../../../components/ui/Container.jsx";
import { industries } from "../homeData.js";

function IndustryIcon({ type, dark = false }) {
  const iconSizeClass = "h-14 w-14";
  const primary = dark ? "#79ACFF" : "#3B76F6";
  const soft = dark
    ? "rgba(121,172,255,0.32)"
    : "rgba(59,118,246,0.22)";

  const common = {
    fill: "none",
    stroke: primary,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    /* ======================================================
       BANKING
       Classical institution / financial infrastructure
       ====================================================== */
    case "banking":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <path
            d="M17 34L48 18L79 34"
            {...common}
          />

          <path
            d="M21 37H75"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path d="M27 40V65" {...common} />
          <path d="M41 40V65" {...common} />
          <path d="M55 40V65" {...common} />
          <path d="M69 40V65" {...common} />

          <path
            d="M21 68H75"
            {...common}
          />

          <path
            d="M17 74H79"
            stroke={soft}
            strokeWidth="1.5"
          />

          <circle
            cx="48"
            cy="29"
            r="3"
            fill={primary}
            stroke="none"
          />
        </svg>
      );

    /* ======================================================
       INSURANCE
       Protection / risk / assurance
       ====================================================== */
    case "insurance":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <path
            d="
              M48 17
              C57 24 66 27 75 29
              V46
              C75 63 65 74 48 81
              C31 74 21 63 21 46
              V29
              C30 27 39 24 48 17Z
            "
            {...common}
          />

          <path
            d="M35 48L44 57L62 38"
            {...common}
          />

          <circle
            cx="48"
            cy="48"
            r="23"
            stroke={soft}
            strokeWidth="1"
          />
        </svg>
      );

    /* ======================================================
       CAPITAL MARKETS
       Candlestick / market movement
       ====================================================== */
    case "markets":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <path
            d="M18 74H79"
            stroke={soft}
            strokeWidth="1"
          />

          <path d="M29 31V66" {...common} />
          <rect
            x="25"
            y="40"
            width="8"
            height="16"
            rx="2"
            {...common}
          />

          <path d="M47 23V61" {...common} />
          <rect
            x="43"
            y="31"
            width="8"
            height="19"
            rx="2"
            {...common}
          />

          <path d="M65 35V70" {...common} />
          <rect
            x="61"
            y="45"
            width="8"
            height="15"
            rx="2"
            {...common}
          />

          <path
            d="M20 59L37 48L52 53L75 28"
            stroke={soft}
            strokeWidth="1.5"
          />

          <circle
            cx="75"
            cy="28"
            r="3"
            fill={primary}
            stroke="none"
          />
        </svg>
      );

    /* ======================================================
       MANUFACTURING
       Factory / production
       ====================================================== */
    case "manufacturing":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <path
            d="
              M18 70V42
              L34 51
              V42
              L50 51
              V34
              H69
              V70
              Z
            "
            {...common}
          />

          <path
            d="M60 34V22H69V34"
            stroke={soft}
            strokeWidth="1.5"
          />

          <rect
            x="27"
            y="59"
            width="8"
            height="11"
            rx="1"
            stroke={primary}
            fill="none"
          />

          <rect
            x="43"
            y="59"
            width="8"
            height="11"
            rx="1"
            stroke={primary}
            fill="none"
          />

          <rect
            x="57"
            y="52"
            width="7"
            height="7"
            rx="1"
            stroke={soft}
            fill="none"
          />

          <path
            d="M18 76H76"
            stroke={soft}
            strokeWidth="1"
          />
        </svg>
      );

    /* ======================================================
       EDUCATION
       Open book / knowledge
       ====================================================== */
    case "education":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <path
            d="
              M17 28
              C29 26 39 29 48 36
              V70
              C38 64 28 62 17 64
              Z
            "
            {...common}
          />

          <path
            d="
              M79 28
              C67 26 57 29 48 36
              V70
              C58 64 68 62 79 64
              Z
            "
            {...common}
          />

          <path
            d="M26 39C33 39 38 41 42 44"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path
            d="M70 39C63 39 58 41 54 44"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path
            d="M26 49C33 49 38 51 42 54"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path
            d="M70 49C63 49 58 51 54 54"
            stroke={soft}
            strokeWidth="1.5"
          />
        </svg>
      );

    /* ======================================================
       COMMUNICATION
       Connectivity / information flow
       ====================================================== */
    case "communication":
      return (
        <svg
          viewBox="0 0 96 96"
          aria-hidden="true"
          className={iconSizeClass}
        >
          <circle
            cx="48"
            cy="50"
            r="6"
            fill={primary}
            stroke="none"
          />

          <path
            d="M34 39C42 31 54 31 62 39"
            {...common}
          />

          <path
            d="M26 31C38 18 58 18 70 31"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path
            d="M34 61C42 69 54 69 62 61"
            {...common}
          />

          <circle
            cx="20"
            cy="50"
            r="4"
            stroke={primary}
            strokeWidth="1.5"
            fill="none"
          />

          <circle
            cx="76"
            cy="50"
            r="4"
            stroke={primary}
            strokeWidth="1.5"
            fill="none"
          />

          <path
            d="M24 50H42"
            stroke={soft}
            strokeWidth="1.5"
          />

          <path
            d="M54 50H72"
            stroke={soft}
            strokeWidth="1.5"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function IndustriesSection() {
  return (
    <section className="bg-[#F7F9FC] py-24 lg:py-28">
      <Container>
        {/* Section heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Industries
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#020B1C] sm:text-5xl lg:text-[3.4rem]">
              Where we create value.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#53647E] lg:justify-self-end lg:text-lg">
            Experience across regulated and operationally complex environments,
            with particular focus on financial services.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const dark = industry.theme === "dark";

            return (
              <article
                key={industry.id}
                className={[
                  "group relative flex min-h-[360px] flex-col overflow-hidden rounded-[24px] border p-8 transition-all duration-300 lg:p-9",
                  "hover:-translate-y-1",
                  dark
                    ? "border-[#17335D] bg-[#031A3D] text-white hover:shadow-[0_24px_70px_rgba(2,11,28,0.20)]"
                    : "border-[#DDE5F0] bg-white text-[#020B1C] hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]",
                ].join(" ")}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className={[
                      "text-xs font-semibold tracking-[0.18em]",
                      dark ? "text-[#6FA8FF]" : "text-[#2563EB]",
                    ].join(" ")}
                  >
                    {industry.id}
                  </span>

                  <span
                    className={[
                      "mt-1 block h-px w-9 transition-all duration-300 group-hover:w-12",
                      dark ? "bg-[#9DC4FF]" : "bg-[#2563EB]",
                    ].join(" ")}
                  />
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4 flex items-center">
                  <div className="transition-transform duration-500 group-hover:translate-x-1">
                    <IndustryIcon
                      type={industry.icon}
                      dark={dark}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-[1.65rem] font-medium leading-tight tracking-[-0.035em]">
                    {industry.title}
                  </h3>

                  <p
                    className={[
                      "mt-4 max-w-sm text-[0.98rem] leading-7",
                      dark
                        ? "text-[#C2D0E5]"
                        : "text-[#596A83]",
                    ].join(" ")}
                  >
                    {industry.description}
                  </p>
                </div>

                {/* Very subtle hover glow */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                    dark
                      ? "bg-blue-500/10"
                      : "bg-blue-400/10",
                  ].join(" ")}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
