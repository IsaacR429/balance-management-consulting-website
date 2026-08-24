import { useState } from "react";

import Container from "../../../../components/ui/Container.jsx";

import integrationImage from "../../../../assets/images/northframe/platform-integration.webp";
import buildImage from "../../../../assets/images/northframe/platform-build.webp";
import scaleImage from "../../../../assets/images/northframe/platform-scale.webp";

const platformTabs = [
    {
        id: "integration",
        label: "Integration",
        eyebrow: "Connect the landscape",
        heading:
            "Integrate with the systems supporting your technology operations.",
        description:
            "Northframe connects operational information across service management, observability, testing and software-delivery platforms to create one consistent operational context.",

        features: [
            {
                title: "System connectivity",
                description:
                    "Connect existing platforms without replacing core systems.",
            },
            {
                title: "Operational context",
                description:
                    "Bring fragmented operational signals into one coherent view.",
            },
            {
                title: "Enterprise interoperability",
                description:
                    "Support workflows across service management, testing and delivery tools.",
            },
            {
                title: "Reliable data flow",
                description:
                    "Enable controlled and reusable integration across operational domains.",
            },
        ],

        contextTitle: "Operational technology landscape",

        contextGroups: [
            {
                label: "Service management",
                value: "ITSM",
            },
            {
                label: "Observability",
                value: "Splunk · Dynatrace",
            },
            {
                label: "Testing & delivery",
                value: "Application testing · Infrastructure testing · CI/CD",
            },
        ],

        image: integrationImage,
        imageAlt:
            "Professional interacting with connected enterprise technology systems",

        stats: [
            {
                label: "Coverage",
                value: "Cross-tool",
            },
            {
                label: "Context",
                value: "Unified",
            },
        ],
    },
    {
        id: "build",
        label: "Build",
        eyebrow: "Create operational intelligence",
        heading: "Build a unified operational view of the enterprise.",
        description:
            "Northframe continuously enriches operational information through Operational Memory and generates actionable recommendations that support operational teams and executive leadership.",
        features: [
            {
                title: "Operational Memory",
                description:
                    "Structure evidence, events and context into one working model.",
            },
            {
                title: "Decision support",
                description:
                    "Generate insights that help teams act with greater confidence.",
            },
            {
                title: "Cross-system intelligence",
                description:
                    "Correlate signals across tools, workflows and business activities.",
            },
            {
                title: "Executive visibility",
                description:
                    "Turn operating data into clear, decision-ready information.",
            },
        ],
        contextTitle: "Delivery framework",

        contextGroups: [
            {
                label: "Discovery",
                value: "Use-case design",
            },
            {
                label: "Pilot & validation",
                value: "Pilot definition · Solution validation",
            },
            {
                label: "Operating model",
                value: "Roles · Controls · Delivery structure",
            },
        ],
        image: buildImage,
        imageAlt:
            "Professional using immersive interface to build digital operational models",
        stats: [
            { label: "Insights", value: "Actionable" },
            { label: "View", value: "Enterprise" },
        ],
    },
    {
        id: "scale",
        label: "Scale",
        eyebrow: "Extend the foundation",
        heading: "Scale one common foundation across multiple domains.",
        description:
            "Northframe provides a common architectural and governance foundation that can be extended across operational domains without rebuilding the platform for every new use case.",
        features: [
            {
                title: "Reusable architecture",
                description:
                    "Expand capabilities without rebuilding the platform each time.",
            },
            {
                title: "Consistent governance",
                description:
                    "Maintain shared standards, controls and operating discipline.",
            },
            {
                title: "Cross-domain rollout",
                description:
                    "Apply the same capability model across multiple business areas.",
            },
            {
                title: "Sustainable growth",
                description:
                    "Support long-term expansion with a stable operating foundation.",
            },
        ],
        contextTitle: "Enterprise scaling model",

        contextGroups: [
            {
                label: "Foundation",
                value: "Reusable components",
            },
            {
                label: "Governance & rollout",
                value: "Governance · Rollout patterns",
            },
            {
                label: "Assurance",
                value: "Continuous assurance",
            },
        ],
        image: scaleImage,
        imageAlt:
            "Glowing bar chart representing scalable growth and performance",
        stats: [
            { label: "Expansion", value: "Multi-domain" },
            { label: "Growth", value: "Scalable" },
        ],
    },
];

function PlatformModelSection() {
    const [activeTabId, setActiveTabId] = useState("integration");

    const activeTab =
        platformTabs.find((tab) => tab.id === activeTabId) ?? platformTabs[0];

    return (
        <section
            id="platform-model"
            className="relative isolate overflow-hidden bg-slate-50 py-10 sm:py-12"
        >
            {/* Soft section atmosphere */}
            <div
                aria-hidden="true"
                className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl"
            />

            <Container>
                {/* Introduction */}
                <div className="max-w-3xl">
                    <div className="h-0.5 w-9 bg-blue-600" />

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                        Platform Model
                    </p>

                    <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                        How Northframe builds durable operational capabilities
                    </h2>

                    <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                        Northframe connects existing systems, builds shared operational
                        intelligence and scales that capability across the organisation.
                    </p>
                </div>

                {/* Refined tabs */}
                <div
                    role="tablist"
                    aria-label="Northframe platform model"
                    className="mt-5 flex gap-3 overflow-x-auto border-b border-slate-300 pb-px"
                >
                    {platformTabs.map((tab, index) => {
                        const isActive = tab.id === activeTabId;
                        const number = String(index + 1).padStart(2, "0");

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`platform-panel-${tab.id}`}
                                onClick={() => setActiveTabId(tab.id)}
                                className={[
                                    "group relative flex items-center gap-2.5 border-b-2 px-4 py-2.5 text-sm font-semibold transition duration-300",
                                    isActive
                                        ? "border-blue-600 bg-white text-blue-700 shadow-[0_-8px_24px_rgba(15,23,42,0.035)]"
                                        : "border-transparent text-slate-500 hover:border-slate-300 hover:bg-white/50 hover:text-slate-900",
                                ].join(" ")}
                            >
                                <span
                                    className={[
                                        "flex h-6 w-6 items-center justify-center rounded-full border text-[9px] font-bold transition duration-300",
                                        isActive
                                            ? "border-blue-600 bg-blue-600 text-white shadow-[0_6px_16px_rgba(37,99,235,0.22)]"
                                            : "border-slate-300 bg-white text-slate-500 group-hover:border-blue-300 group-hover:text-blue-700",
                                    ].join(" ")}
                                >
                                    {number}
                                </span>

                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content panel */}
                <div
                    key={activeTab.id}
                    id={`platform-panel-${activeTab.id}`}
                    role="tabpanel"
                    className="relative mt-5 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_65px_rgba(15,23,42,0.075)] ring-1 ring-slate-950/[0.02] animate-[northframePanelIn_400ms_ease-out]"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                    />

                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                        {/* Left content */}
                        <div className="relative bg-[linear-gradient(145deg,#ffffff_0%,#ffffff_72%,#f8fbff_100%)] p-5 sm:p-6 lg:p-7">
                            <div className="absolute left-0 top-7 h-12 w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-blue-700 shadow-[0_0_18px_rgba(37,99,235,0.28)]" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-blue-700">
                                {activeTab.eyebrow}
                            </p>

                            <h3 className="mt-3 max-w-xl text-xl font-semibold leading-tight tracking-[-0.028em] text-slate-950">
                                {activeTab.heading}
                            </h3>

                            <p className="mt-2.5 max-w-xl text-[15px] leading-7 text-slate-600">
                                {activeTab.description}
                            </p>

                            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                                {activeTab.features.map((feature, index) => (
                                    <article
                                        key={feature.title}
                                        className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/65 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/70 via-blue-300/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                                        />

                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <div className="h-0.5 w-7 bg-blue-600 transition-all duration-300 group-hover:w-10" />

                                                <h4 className="mt-3 text-sm font-semibold text-slate-950">
                                                    {feature.title}
                                                </h4>
                                            </div>

                                            <span className="text-[9px] font-bold tracking-[0.12em] text-slate-300 transition duration-300 group-hover:text-blue-500">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <p className="mt-1.5 text-[11px] leading-[18px] text-slate-600">
                                            {feature.description}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            {activeTab.contextGroups && (
                                <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.035)]">
                                    <div className="grid sm:grid-cols-[155px_repeat(3,minmax(0,1fr))]">
                                        <div className="relative flex items-center border-b border-slate-200 bg-[#f4f8ff] px-3.5 py-2.5 sm:border-b-0 sm:border-r">
                                            <div
                                                aria-hidden="true"
                                                className="absolute bottom-0 left-0 top-0 w-0.5 bg-blue-600"
                                            />

                                            <p className="text-[8px] font-bold uppercase tracking-[0.145em] text-blue-700">
                                                {activeTab.contextTitle}
                                            </p>
                                        </div>

                                        {activeTab.contextGroups.map((group, index) => (
                                            <div
                                                key={group.label}
                                                className={[
                                                    "group/context relative px-3.5 py-2.5 transition duration-300 hover:bg-slate-50",
                                                    index > 0
                                                        ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                                                        : "",
                                                ].join(" ")}
                                            >
                                                <p className="text-[8px] font-bold uppercase tracking-[0.11em] text-slate-400 transition group-hover/context:text-blue-600">
                                                    {group.label}
                                                </p>

                                                <p className="mt-1 text-[10px] font-medium leading-4 text-slate-700">
                                                    {group.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right image */}
                        <PlatformImageVisual tab={activeTab} />
                    </div>
                </div>
            </Container>

            <style>
                {`
          @keyframes northframePanelIn {
            from {
              opacity: 0.45;
              transform: translateY(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes northframeImageIn {
            from {
              opacity: 0.7;
              transform: scale(1.045);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
            </style>
        </section>
    );
}

function PlatformImageVisual({ tab }) {
    return (
        <div className="group relative min-h-[270px] overflow-hidden bg-[#03142e] lg:min-h-full">
            <img
                key={tab.id}
                src={tab.image}
                alt={tab.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.025]"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/82 via-[#020b1c]/12 to-slate-950/10" />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(96,165,250,0.14),transparent_34%)]"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:48px_48px]"
            />

            {/* Top status detail */}
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 text-white backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-40" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100">
                    Northframe model
                </span>
            </div>

            {/* Bottom information panel */}
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <div className="rounded-xl border border-white/10 bg-[#030b1d]/75 px-4 py-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                                Active capability
                            </p>

                            <p className="mt-1 text-sm font-semibold text-blue-100">
                                {tab.label}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {tab.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="min-w-[82px] rounded-lg border border-white/10 bg-white/[0.055] px-2.5 py-2 text-center transition duration-300 hover:border-blue-300/25 hover:bg-blue-500/10"
                                >
                                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                                        {stat.label}
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatformModelSection;