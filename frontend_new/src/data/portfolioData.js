export const portfolioData = {
    "global-tax-compliance": {
        title: "Global Tax Compliance System",
        category: "Finance",
        client: "Fortune 500 Manufacturing Firm",
        image: "/assets/portfolio/accounting-tax.jpg",
        shortDescription: "A centralized platform for managing multi-jurisdictional tax filings and compliance reporting.",
        challenge: "The client faced significant risks and inefficiencies managing tax compliance across 30+ countries using disparate spreadsheets and legacy systems. Data inconsistencies led to potential penalties and delayed reporting.",
        solution: "We engineered a centralized, cloud-based tax compliance platform. The system integrates directly with their ERP to pull financial data, applies jurisdiction-specific tax rules automatically, and generates audit-ready reports.",
        results: [
            "Reduced tax filing processing time by 65%",
            "Eliminated data entry errors by 99%",
            "Achieved 100% compliance rate across all active jurisdictions",
            "Saved approx. $2M annually in operational costs"
        ],
        techStack: ["React", "Python/Django", "PostgreSQL", "Azure Cloud"]
    },
    "algo-trading-infrastructure": {
        title: "Algo-Trading Infrastructure",
        category: "FinTech",
        client: "Leading Investment Bank",
        image: "/assets/portfolio/financial-consulting.jpg",
        shortDescription: "High-frequency trading architecture delivering microsecond latency.",
        challenge: "In the HFT world, milliseconds mean millions. The client's existing infrastructure suffered from jitter and latency spikes, causing them to miss profitable trade execution windows.",
        solution: "We rebuilt their trading engine using C++ for core execution logic and optimized the network stack. We implemented a low-latency messaging architecture and co-located servers to minimize physical distance to exchange matching engines.",
        results: [
            "Reduced trade capability latency to < 10 microseconds",
            "Increased daily trade volume capacity by 300%",
            "Improved system uptime to 99.999% during trading hours",
            "Secured a competitive advantage in key arbitrage markets"
        ],
        techStack: ["C++", "Rust", "Linux Kernel Tuning", "FPGA"]
    },
    "enterprise-audit-workflow": {
        title: "Enterprise Audit Workflow",
        category: "Audit",
        client: "Global Accounting Firm",
        image: "/assets/portfolio/auditing-assurance.jpg",
        shortDescription: "Digital transformation of audit processes reducing manual effort.",
        challenge: "Auditors were spending 40% of their time on manual data collection and formatting, reducing the time available for value-added analysis and risk assessment.",
        solution: "We developed a secure Audit Workflow Automation tool. It features automated data ingestion, intelligent anomaly detection using ML, and a collaborative workspace for auditors and clients to track document requests.",
        results: [
            "40% reduction in average audit engagement time",
            "Automated detection of 85% of common data anomalies",
            "Significantly improved client satisfaction scores due to less friction"
        ],
        techStack: ["Next.js", "Node.js", "MongoDB", "AWS S3"]
    },
    "automated-financial-reporting": {
        title: "Automated Financial Reporting",
        category: "Finance",
        client: "Multinational Conglomerate",
        image: "/assets/portfolio/financial-statements.jpg",
        shortDescription: "Real-time consolidated financial statement generation.",
        challenge: "Consolidating financials from 50+ subsidiaries took 3 weeks every month-end, delaying strategic decision-making.",
        solution: "We implemented a real-time financial consolidation engine. It continuously syncs data from subsidiary ledgers, handles currency conversion and inter-company eliminations automatically, and updates a central dashboard.",
        results: [
            "Month-end close cycle reduced from 21 days to 4 days",
            "Real-time visibility into global cash position",
            "Executive leadership can now view daily consolidated P&L"
        ],
        techStack: ["Power BI", "SQL Server", "Azure Data Factory", "C# .NET"]
    },
    "saas-crm-platform": {
        title: "SaaS CRM Platform",
        category: "Software",
        client: "High-Growth Tech Startup",
        image: "/assets/portfolio/software-development.jpg",
        shortDescription: "Custom-built CRM solution integrating sales and support.",
        challenge: "Off-the-shelf CRMs were too rigid for the client's unique usage-based billing model and customer onboarding flow/process.",
        solution: "We built a bespoke CRM tailored to their exact workflow. It includes deep integration with their product usage data, allowing sales to see exactly how leads are interacting with the trial before calling.",
        results: [
            "25% increase in lead-to-paid conversion rate",
            "360-degree view of customer data for support teams",
            "Seamless subscription billing automation"
        ],
        techStack: ["Vue.js", "Laravel", "MySQL", "Stripe API"]
    },
    "ai-market-analysis": {
        title: "AI-Driven Market Analysis",
        category: "Analytics",
        client: "Retail Chain",
        image: "/assets/portfolio/data-analytics.jpg",
        shortDescription: "Predictive analytics engine using machine learning.",
        challenge: "The client struggled to predict inventory demand, leading to stockouts in some regions and overstock in others.",
        solution: "We deployed an ML-driven demand forecasting system. It analyzes historical sales, seasonal trends, local events, and economic indicators to predict future demand per SKU per store.",
        results: [
            "Inventory costs reduced by 15%",
            "Stockouts reduced by 60%, boosting revenue",
            "More efficient logistics and distribution planning"
        ],
        techStack: ["Python", "TensorFlow", "Google BigQuery", "Tableau"]
    },
    "cloud-migration": {
        title: "Cloud Migration Strategy",
        category: "Consulting",
        client: "Logistics Provider",
        image: "/assets/portfolio/software-consulting.jpg",
        shortDescription: "Migration of legacy systems to scalable cloud architecture.",
        challenge: "Aging on-premise servers were causing downtime and preventing the client from scaling during peak holiday seasons.",
        solution: "We executed a 'Lift and Shift' followed by optimization strategy to AWS. We containerized applications using Docker and orchestrated them with Kubernetes for auto-scaling capabilities.",
        results: [
            "99.99% system availability achieved",
            "Infrastructure costs now scale with revenue (OpEx vs CapEx)",
            "Ability to handle 10x traffic spikes instantly"
        ],
        techStack: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    "banking-app-redesign": {
        title: "Banking App Redesign",
        category: "UX/UI",
        client: "Regional Bank",
        image: "/assets/portfolio/ux-ui.jpg",
        shortDescription: "Award-winning mobile banking interface.",
        challenge: "The bank's mobile app had a 2.5-star rating and low engagement due to a clunky, outdated interface.",
        solution: "We redesigned the app from the ground up, focusing on simplified navigation, biometric login, and 'financial wellness' features. We conducted extensive user testing to ensure inclusivity and ease of use.",
        results: [
            "App Store rating improved to 4.8 stars",
            "Mobile active users increased by 50% in 6 months",
            "Reduced support calls related to app usage by 30%"
        ],
        techStack: ["Figma", "React Native", "TypeScript"]
    }
};
