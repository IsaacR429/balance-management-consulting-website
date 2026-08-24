import Container from "../../../../components/ui/Container.jsx";

import heroBackground from "../../../../assets/images/northframe/hero-background.webp";
import northframeLogoWhite from "../../../../assets/images/northframe/northframe-logo-white.webp";

const capabilities = [
    {
        id: "decisions",
        title: "Decisions",
        description: "AI-powered insights and recommendations.",
        position: "lg:left-0 lg:top-10",
        icon: "decisions",
    },
    {
        id: "assurance",
        title: "Assurance",
        description: "Continuous validation and operational visibility.",
        position: "lg:right-0 lg:top-14",
        icon: "assurance",
    },
    {
        id: "governance",
        title: "Governance",
        description: "Controls, compliance and audit readiness.",
        position: "lg:bottom-12 lg:left-0",
        icon: "governance",
    },
    {
        id: "resilience",
        title: "Resilience",
        description: "Business continuity and recovery readiness.",
        position: "lg:bottom-10 lg:right-0",
        icon: "resilience",
    },
];

function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#020b1c] text-white">
            {/* Background image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-40"
            >
                <img
                    src={heroBackground}
                    alt=""
                    fetchPriority="high"
                    decoding="async"
                    className="northframe-motion absolute inset-0 h-full w-full object-cover object-[65%_center] animate-[northframeBackgroundDrift_18s_ease-in-out_infinite]"
                />
            </div>

            {/* Main dark overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(2,11,28,0.99)_0%,rgba(2,11,28,0.96)_35%,rgba(2,11,28,0.74)_65%,rgba(2,11,28,0.6)_100%)]"
            />

            {/* Blue atmosphere */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_73%_43%,rgba(37,99,235,0.2),transparent_38%)]"
            />

            {/* Technical grid */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]"
            />

            {/* Bottom fade */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#020b1c]/95 to-transparent"
            />

            {/* Small decorative light */}
            <div
                aria-hidden="true"
                className="absolute right-[18%] top-[14%] -z-10 hidden h-28 w-28 rounded-full bg-blue-500/10 blur-3xl lg:block"
            />

            <Container>
                <div className="grid min-h-[650px] items-center gap-8 py-[72px] sm:py-[78px] lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-[84px]">
                    {/* Left content */}
                    <div className="max-w-2xl">
                        <div className="h-0.5 w-10 bg-blue-500" />

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
                            Continuous operational assurance
                        </p>

                        <h1 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[40px] lg:text-[44px] xl:text-[48px]">
                            Operational Assurance &amp; Governance
                        </h1>

                        <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-200 sm:text-base">
                            Continuous reliability assurance. Confident decisions. Stronger
                            governance.
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                            Northframe brings assurance-driven operational technology and
                            intelligence together to validate changes, strengthen control
                            effectiveness and build organisational resilience—so teams can
                            move faster without increasing risk.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-5">
                            <a
                                href="#platform-model"
                                className="group inline-flex items-center border-b border-blue-300/70 px-1 py-3 font-semibold text-white transition duration-300 hover:border-blue-300 hover:text-blue-300"
                            >
                                Explore the Platform

                                <span
                                    aria-hidden="true"
                                    className="ml-3 transition-transform duration-300 group-hover:translate-y-1"
                                >
                                    ↓
                                </span>
                            </a>
                        </div>

                        <div className="mt-7 flex items-center gap-3 text-sm text-slate-400">
                            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 font-semibold text-blue-300">
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full border border-blue-300/20"
                                />

                                N
                            </div>

                            <p>
                                Powered by{" "}
                                <span className="font-semibold text-blue-300">
                                    Northframe
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right platform visual */}
                    <div className="relative flex min-h-[540px] flex-col items-center justify-center lg:block">
                        {/* Outer orbit */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-[42%] hidden h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 lg:block"
                        />

                        {/* Animated outer orbit */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-[42%] hidden h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 animate-[spin_34s_linear_infinite] rounded-full lg:block"
                        >
                            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-blue-200/70 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.95)]" />

                            <span className="absolute bottom-[16%] right-[7%] h-1.5 w-1.5 rounded-full bg-blue-300/80 shadow-[0_0_14px_rgba(147,197,253,0.8)]" />
                        </div>

                        {/* Middle orbit */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-[42%] hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 lg:block"
                        />

                        {/* Animated inner orbit */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-[42%] hidden h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 animate-[spin_25s_linear_infinite] rounded-full [animation-direction:reverse] lg:block"
                        >
                            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-blue-200/60 bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.9)]" />
                        </div>

                        {/* Inner static orbit */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-[42%] hidden h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30 lg:block"
                        />

                        {/* Animated connection nodes */}
                        <div
                            aria-hidden="true"
                            className="northframe-motion absolute left-[28%] top-[25%] hidden h-2 w-2 rounded-full bg-blue-400 animate-[northframePulseNode_3.5s_ease-in-out_infinite] lg:block"
                        />

                        <div
                            aria-hidden="true"
                            className="northframe-motion absolute right-[26%] top-[30%] hidden h-2 w-2 rounded-full bg-blue-400 animate-[northframePulseNode_4s_ease-in-out_1s_infinite] lg:block"
                        />

                        <div
                            aria-hidden="true"
                            className="northframe-motion absolute bottom-[22%] left-[32%] hidden h-1.5 w-1.5 rounded-full bg-blue-300 animate-[northframePulseNode_3.2s_ease-in-out_1.8s_infinite] lg:block"
                        />

                        {/* Central platform */}
                        <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-blue-400/50 bg-blue-950/60 shadow-[0_0_90px_rgba(37,99,235,0.35)] backdrop-blur lg:absolute lg:left-1/2 lg:top-[42%] lg:-translate-x-1/2 lg:-translate-y-1/2">
                            <div
                                aria-hidden="true"
                                className="absolute inset-3 rounded-full border border-blue-300/10"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_68%)]"
                            />

                            {/* Rotating rings around logo */}
                            <div
                                aria-hidden="true"
                                className="northframe-motion absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/20 animate-[northframeOrbit_28s_linear_infinite]"
                            >
                                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

                                <span className="absolute bottom-[18px] right-[20px] h-1.5 w-1.5 rounded-full bg-blue-300/80 shadow-[0_0_14px_rgba(147,197,253,0.7)]" />
                            </div>

                            <div
                                aria-hidden="true"
                                className="northframe-motion absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 animate-[northframeOrbitReverse_40s_linear_infinite]"
                            >
                                <span className="absolute right-[26px] top-[45px] h-1.5 w-1.5 rounded-full bg-blue-400/75 shadow-[0_0_14px_rgba(96,165,250,0.7)]" />
                            </div>

                            <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-blue-400/50 bg-[#03132f]/85 shadow-[inset_0_0_45px_rgba(37,99,235,0.28)]">
                                <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300">
                                    Platform
                                </span>

                                <img
                                    src={northframeLogoWhite}
                                    alt="Northframe"
                                    className="w-36 object-contain sm:w-40"
                                />
                            </div>
                        </div>

                        {/* Capability cards */}
                        <div className="mt-10 grid w-full grid-cols-2 gap-4 lg:contents">
                            {capabilities.map((capability, index) => {
                                const floatAnimations = [
                                    "northframe-motion animate-[northframeFloat_6s_ease-in-out_infinite]",
                                    "northframe-motion animate-[northframeFloat_7s_ease-in-out_0.8s_infinite]",
                                    "northframe-motion animate-[northframeFloat_6.5s_ease-in-out_1.4s_infinite]",
                                    "northframe-motion animate-[northframeFloat_7.5s_ease-in-out_2s_infinite]",
                                ];

                                return (
                                    <article
                                        key={capability.id}
                                        className={[
                                            floatAnimations[index % floatAnimations.length],
                                            "group rounded-xl border border-white/10",
                                            "bg-white/[0.04] p-4 text-center",
                                            "backdrop-blur-sm transition duration-300",
                                            "hover:-translate-y-1 hover:border-blue-300/25",
                                            "hover:bg-blue-500/[0.07]",
                                            "lg:absolute lg:w-44 lg:border-transparent",
                                            "lg:bg-transparent lg:p-0 lg:hover:bg-transparent",
                                            capability.position,
                                        ].join(" ")}
                                    >
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200 shadow-[0_0_22px_rgba(37,99,235,0.12)] transition duration-300 group-hover:border-blue-300/70 group-hover:bg-blue-500/15 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.28)]">
                                            <CapabilityIcon type={capability.icon} />
                                        </div>

                                        <h2 className="mt-3 font-semibold text-white transition group-hover:text-blue-100">
                                            {capability.title}
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-slate-400 transition group-hover:text-slate-300">
                                            {capability.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function CapabilityIcon({ type }) {
    const iconClass =
        "h-6 w-6 transition-transform duration-300 group-hover:scale-110";

    if (type === "decisions") {
        return (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className={iconClass}
            >
                <path
                    d="M9 18H15M10 21H14M8.5 14.5C6.96 13.41 6 11.62 6 9.7C6 6.55 8.55 4 11.7 4C14.85 4 17.4 6.55 17.4 9.7C17.4 11.65 16.42 13.47 14.85 14.54C14.32 14.9 14 15.5 14 16.14V16.5H9.4V16.11C9.4 15.48 9.06 14.87 8.5 14.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (type === "assurance") {
        return (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className={iconClass}
            >
                <path
                    d="M12 3L19 6V11C19 15.5 16.1 19.3 12 21C7.9 19.3 5 15.5 5 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />

                <path
                    d="M9 12L11 14L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (type === "governance") {
        return (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className={iconClass}
            >
                <path
                    d="M7 3H14L18 7V20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20V4C6 3.45 6.45 3 7 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />

                <path
                    d="M14 3V8H18M9 12H15M9 16H13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className={iconClass}
        >
            <path
                d="M7 17C4.79 17 3 15.21 3 13C3 10.96 4.53 9.28 6.5 9.04C7.14 6.7 9.29 5 11.83 5C14.89 5 17.38 7.45 17.45 10.5C19.43 10.72 21 12.4 21 14.44C21 16.63 19.22 18.4 17.03 18.4H8.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />

            <path
                d="M10 14L7 17L10 20M7.5 17H15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default HeroSection;