import React from "react";

// ✅ Import your images
import accounting from "../assets/portfolio/accounting-tax.jpg";
import consulting from "../assets/portfolio/financial-consulting.jpg";
import auditing from "../assets/portfolio/auditing-assurance.jpg";
import statements from "../assets/portfolio/financial-statements.jpg";
import development from "../assets/portfolio/software-development.jpg";
import analytics from "../assets/portfolio/data-analytics.jpg";
import consultingSoft from "../assets/portfolio/software-consulting.jpg";
import uxui from "../assets/portfolio/ux-ui.jpg";

const portfolioData = [
  {
    title: "Accounting & Tax Advisory",
    image: accounting,
    description: "Helping businesses stay compliant and financially sound.",
  },
  {
    title: "Financial Consulting",
    image: consulting,
    description: "Strategic financial advice to grow and protect your assets.",
  },
  {
    title: "Auditing & Assurance",
    image: auditing,
    description: "Independent audits to ensure financial transparency.",
  },
  {
    title: "Financial Statement Preparation",
    image: statements,
    description: "Accurate financial reports tailored to your business.",
  },
  {
    title: "Software Product Development",
    image: development,
    description: "Custom software solutions built to scale your business.",
  },
  {
    title: "Data Analytics",
    image: analytics,
    description: "Transform your data into actionable insights.",
  },
  {
    title: "Software Consulting",
    image: consultingSoft,
    description: "Expert advice on selecting and using software tools.",
  },
  {
    title: "UX/UI Design",
    image: uxui,
    description: "Crafting intuitive user experiences and modern interfaces.",
  },
];

function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

