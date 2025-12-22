import {
    FaCalculator,
    FaChartLine,
    FaClipboardCheck,
    FaFileInvoiceDollar,
    FaLaptopCode,
    FaDatabase,
    FaLightbulb,
    FaPaintBrush
} from "react-icons/fa";

export const servicesData = {
    "accounting-tax": {
        title: "Accounting & Tax Advisory",
        icon: FaCalculator,
        shortDescription: "Comprehensive financial compliance, bookkeeping, and strategic tax planning tailored for modern enterprises.",
        fullDescription: "Navigate the complexities of financial regulations with our expert accounting and tax advisory services. We go beyond simple bookkeeping to provide strategic insights that optimize your tax position and ensure full compliance. Our proactive approach helps you anticipate financial challenges and seize opportunities for growth.",
        features: [
            "Corporate & Individual Tax Planning",
            "Regulatory Compliance & Filings (VAT, PAYE)",
            "Cloud-Based Bookkeeping & Payroll",
            "Annual Financial Statements",
            "Cash Flow Management"
        ],
        benefits: [
            { title: "Minimize Liability", desc: "Strategic planning to legally minimize tax obligations." },
            { title: "Stay Compliant", desc: "Avoid penalties with timely and accurate regulatory filings." },
            { title: "Real-Time Insight", desc: "Access up-to-date financial data for better decision-making." },
            { title: "Peace of Mind", desc: "Focus on your business while we handle the numbers." }
        ],
        image: "/assets/services-background.jpg"
    },
    "financial-consulting": {
        title: "Financial Consulting",
        icon: FaChartLine,
        shortDescription: "Data-driven financial strategies to optimize cash flow, capital allocation, and long-term business growth.",
        fullDescription: "Our financial consulting services act as your strategic partner in growth. We analyze your financial health, identify inefficiencies, and develop robust strategies to improve profitability. Whether you are scaling up, restructuring, or seeking investment, our expert guidance ensures your financial foundation is solid.",
        features: [
            "Financial Modeling & Forecasting",
            "Capital Allocation Strategy",
            "Mergers & Acquisitions Support",
            "Cost Reduction Analysis",
            "Investment Feasibility Studies"
        ],
        benefits: [
            { title: "Data-Driven Growth", desc: "Strategies backed by rigorous financial analysis." },
            { title: "Optimized Capital", desc: "Make every Rand work harder for your business." },
            { title: "Risk Mitigation", desc: "Identify and neutralize financial risks before they impact you." },
            { title: "Investor Readiness", desc: "Prepare your business for funding with professional financials." }
        ],
        image: "/assets/services-background.jpg"
    },
    "auditing-assurance": {
        title: "Auditing & Assurance",
        icon: FaClipboardCheck,
        shortDescription: "Rigorous independent verifications ensuring financial accuracy, risk management, and stakeholder trust.",
        fullDescription: "Build trust with stakeholders through our rigorous auditing and assurance services. We provide independent verification of your financial statements, ensuring accuracy and transparency. Our audits not only satisfy regulatory requirements but also provide valuable insights into your internal controls and operational efficiency.",
        features: [
            "Statutory Audits",
            "Internal Audit & Control",
            "Risk Management Assessment",
            "Forensic Accounting",
            "Regulatory Compliance Audits"
        ],
        benefits: [
            { title: "Enhanced Credibility", desc: "Boost investor and stakeholder confidence." },
            { title: "Operational Insight", desc: "Uncover inefficiencies in your internal processes." },
            { title: "Fraud Prevention", desc: "Strengthen controls to protect company assets." },
            { title: "Compliance Assurance", desc: "Meet all statutory reporting requirements with confidence." }
        ],
        image: "/assets/services-background.jpg"
    },
    "financial-statements": {
        title: "Financial Statement Preparation",
        icon: FaFileInvoiceDollar,
        shortDescription: "Automated, regulation-compliant financial reporting systems designed for transparency and speed.",
        fullDescription: "Accurate financial statements are the bedrock of business credibility. We prepare comprehensive, IFRS-compliant financial statements that present a true and fair view of your company's performance. Our streamlined process ensures timely delivery, empowering you to communicate your financial story effectively to banks, investors, and boards.",
        features: [
            "IFRS & GAAP Compliant Reporting",
            "Consolidated Financial Statements",
            "Interim & Annual Reports",
            "Management Accounts",
            "Financial Statement Analysis"
        ],
        benefits: [
            { title: "Accuracy Guaranteed", desc: "Precise reporting adhering to global standards." },
            { title: "Timely Delivery", desc: "Never miss a reporting deadline." },
            { title: "Stakeholder Clarity", desc: "Clear, understandable reports for non-financial stakeholders." },
            { title: "Audit Readiness", desc: "Statements prepared to withstand rigorous audit scrutiny." }
        ],
        image: "/assets/services-background.jpg"
    },
    "software-development": {
        title: "Software Product Development",
        icon: FaLaptopCode,
        shortDescription: "End-to-end engineering of scalable SaaS platforms, mobile applications, and mission-critical software systems.",
        fullDescription: "Turn your vision into reality with our world-class software development services. We build scalable, secure, and high-performance applications tailored to your unique business needs. From MVP to enterprise-grade solutions, our agile development methodology ensures rapid delivery and continuous improvement.",
        features: [
            "Custom Web & Mobile App Development",
            "SaaS Platform Engineering",
            "API Development & Integration",
            "Legacy System Modernization",
            "DevOps & CI/CD Pipelines"
        ],
        benefits: [
            { title: "Scalable Architecture", desc: "Systems built to grow with your user base." },
            { title: "High Performance", desc: "Optimized code for blazing fast user experiences." },
            { title: "Security First", desc: "Robust security baked into every line of code." },
            { title: "Agile Delivery", desc: "Frequent updates and rapid feedback loops." }
        ],
        image: "/assets/services-background.jpg"
    },
    "data-analytics": {
        title: "Data Analytics",
        icon: FaDatabase,
        shortDescription: "Transforming raw data into actionable business intelligence using advanced AI and machine learning insights.",
        fullDescription: "Unlock the power of your data. Our data analytics services transform raw information into actionable business intelligence. We implement advanced analytics pipelines, dashboards, and AI models that help you understand customer behavior, optimize operations, and predict future trends.",
        features: [
            "Business Intelligence Dashboards",
            "Predictive Analytics & AI Models",
            "Data Warehousing & ETL",
            "Customer Behavior Analysis",
            "Operational Efficiency Metrics"
        ],
        benefits: [
            { title: "Informed Decisions", desc: "Stop guessing and start knowing with data-backed insights." },
            { title: "Predictive Power", desc: "Anticipate market trends before they happen." },
            { title: "Operational Efficiency", desc: "Identify bottlenecks and optimize processes." },
            { title: "Customer Personalization", desc: "Tailor experiences based on deep user insights." }
        ],
        image: "/assets/services-background.jpg"
    },
    "software-consulting": {
        title: "Software Consulting",
        icon: FaLightbulb,
        shortDescription: "Expert guidance on digital transformation, cloud architecture, and tech stack modernization strategies.",
        fullDescription: "Navigate the rapidly evolving technology landscape with confidence. Our software consulting services provide the expert guidance you need to make the right technology investments. Whether you are migrating to the cloud, selecting a tech stack, or planning a digital transformation, we ensure your technology strategy aligns with your business goals.",
        features: [
            "Digital Transformation Strategy",
            "Cloud Migration & Architecture",
            "Technology Stack Selection",
            "IT Audit & Roadmap",
            "Technical Leadership & CTO Advisory"
        ],
        benefits: [
            { title: "Strategic Alignment", desc: "Ensure tech investments drive business value." },
            { title: "Future-Proofing", desc: "Build systems that last with modern architecture." },
            { title: "Cost Optimization", desc: "Eliminate waste and optimize cloud spend." },
            { title: "Accelerated Innovation", desc: "Adopt new technologies faster and with less risk." }
        ],
        image: "/assets/services-background.jpg"
    },
    "ux-ui-design": {
        title: "UX/UI Design",
        icon: FaPaintBrush,
        shortDescription: "Creating intuitive, user-centric interfaces that drive engagement and deliver exceptional digital experiences.",
        fullDescription: "Great software starts with great design. Our UX/UI design team creates intuitive, engaging, and beautiful digital experiences. We focus on user-centric design principles to ensure your product is not only visually stunning but also easy to use, accessible, and optimized for conversion.",
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "High-Fidelity UI Design",
            "Design Systems & Style Guides",
            "Usability Testing"
        ],
        benefits: [
            { title: "Higher Engagement", desc: "Keep users hooked with intuitive interfaces." },
            { title: "Increased Conversion", desc: "Design flows that guide users to action." },
            { title: "Brand Consistency", desc: " unified look and feel across all touchpoints." },
            { title: "Development Efficiency", desc: "Clear specs and design systems speed up coding." }
        ],
        image: "/assets/services-background.jpg"
    }
};
