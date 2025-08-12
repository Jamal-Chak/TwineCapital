import React from "react";
import financeImage from "../../assets/services/finance.png"; // ✅ Make sure this file exists

function FinancialConsulting() {
  const skills = [
    { name: "Budget Forecasting", level: "93%" },
    { name: "Risk Assessment", level: "87%" },
    { name: "ROI Strategy", level: "90%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Financial Consulting</h1>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
        {/* Text Column */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We guide companies through data-driven strategies to maximize profit, optimize spending,
            and plan for long-term financial success.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">Services Include:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Cash flow analysis and optimization</li>
            <li>Growth & scaling strategy</li>
            <li>Forecasting and financial modeling</li>
            <li>Risk analysis and scenario planning</li>
          </ul>
        </div>

        {/* Image Column */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={financeImage}
            alt="Financial Consulting"
            className="w-full h-64 object-cover brightness-95 mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-gray-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Skills & Tools</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-600">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 shadow text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Need financial clarity?
        </h3>
        <p className="text-blue-600 font-semibold dark:text-blue-400">
          Partner with our consultants for expert insights into your business.
        </p>
      </div>
    </section>
  );
}

export default FinancialConsulting;
