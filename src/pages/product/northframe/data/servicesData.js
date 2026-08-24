import assessAdviseImage from "../../../../assets/images/northframe/assess-advise.webp";
import designPilotImage from "../../../../assets/images/northframe/design-pilot.webp";
import implementIntegrateImage from "../../../../assets/images/northframe/implement-integrate.webp";
import operateAssureImage from "../../../../assets/images/northframe/operate-assure.webp";

export const services = [
    {
        id: "assess",
        phase: "01",
        title: "Assess & Advise",
        summary:
            "Evaluate the current operating environment and define a practical roadmap for improvement.",
        activities: [
            "Current-state assessment",
            "Risk and control review",
            "Tool and data landscape",
            "Target operating model",
        ],
        image: assessAdviseImage,
        imageAlt:
            "Professionals assessing a technology and operational environment",
        imagePosition: "center",
    },
    {
        id: "design",
        phase: "02",
        title: "Design & Pilot",
        summary:
            "Translate priorities into a focused solution design and validate it through a controlled pilot.",
        activities: [
            "Use-case prioritisation",
            "Pilot definition",
            "Solution design",
            "Business-case validation",
        ],
        image: designPilotImage,
        imageAlt:
            "Technology specialists designing and validating a solution",
        imagePosition: "center",
    },
    {
        id: "implement",
        phase: "03",
        title: "Implement & Integrate",
        summary:
            "Deploy the solution and connect it with the systems, controls and workflows already in place.",
        activities: [
            "Platform configuration",
            "System integration",
            "Data and control models",
            "User enablement",
        ],
        image: implementIntegrateImage,
        imageAlt:
            "Professionals implementing and integrating enterprise technology",
        imagePosition: "center",
    },
    {
        id: "operate",
        phase: "04",
        title: "Operate & Assure",
        summary:
            "Support continuous assurance through structured monitoring, reporting and operational improvement.",
        activities: [
            "Continuous assurance",
            "Exception management",
            "Reporting and dashboards",
            "Operational improvement",
        ],
        image: operateAssureImage,
        imageAlt:
            "Operations specialist monitoring technology systems in a control centre",
        imagePosition: "50% 38%",
    },
];

export const whyBmcItems = [
    {
        id: "expertise",
        number: "01",
        title: "Operational depth",
        description:
            "Experience across technology operations, governance, risk and organisational change.",
    },
    {
        id: "modular",
        number: "02",
        title: "Modular delivery",
        description:
            "Engagements can begin with one defined priority and expand as the capability matures.",
    },
    {
        id: "outcomes",
        number: "03",
        title: "Outcome-focused design",
        description:
            "Solutions are shaped around practical operating outcomes rather than technology alone.",
    },
    {
        id: "framework",
        number: "04",
        title: "Reusable foundations",
        description:
            "Common architecture, controls and operating patterns reduce unnecessary rebuilding.",
    },
    {
        id: "governance",
        number: "05",
        title: "Governance by design",
        description:
            "Accountability, evidence and control visibility are considered throughout delivery.",
    },
];