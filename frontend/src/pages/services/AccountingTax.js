import React from "react";
import taxImage from "../../assets/services/accounting.png";

function AccountingTax() {
  const skills = [
    { name: "Tax Planning", level: "95%" },
    { name: "Regulatory Compliance", level: "90%" },
    { name: "Financial Reporting", level: "92%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Accounting & Tax Advisory</h1>

      {/* Description + Image Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our team delivers expert accounting and tax services to help your business stay compliant and
            optimize cash flow. From bookkeeping to annual returns — we handle it all.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">What We Cover:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Corporate and individual tax planning</li>
            <li>Financial statement preparation</li>
            <li>VAT, PAYE, and other regulatory filings</li>
            <li>Cloud-based bookkeeping & payroll</li>
          </ul>
        </div>

        {/* Image with blend effect */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={taxImage}
            alt="Accounting"
            className="w-full h-64 object-cover brightness-95 mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-gray-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Skill Set</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-600 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
          Do you have accounting or tax requirements?
        </h3>
        <p className="text-blue-700 dark:text-blue-300 font-medium">
          Let <span className="font-bold">TwineCapital</span> take care of it for you!
        </p>
      </div>
    </section>
  );
}

export default AccountingTax;
