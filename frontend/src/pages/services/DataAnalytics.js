import React from "react";
import analyticsImg from "../../assets/services/analytics.png"; // ✅ Ensure image exists

function DataAnalytics() {
  const skills = [
    { name: "Insight Accuracy", level: "93%" },
    { name: "Data Modeling", level: "90%" },
    { name: "Report Automation", level: "88%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Data Analytics</h1>

      {/* Description + Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
        {/* Text */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Transform raw data into actionable insights. Our analytics solutions help businesses make smarter, data-driven decisions.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">What We Offer:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Data Visualization Dashboards</li>
            <li>Business Intelligence Reports</li>
            <li>Predictive Analytics</li>
            <li>ETL & Data Warehousing</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={analyticsImg}
            alt="Analytics Illustration"
            className="w-full h-64 object-cover brightness-95 mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-gray-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Skills Progress Bars */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Key Capabilities</h2>
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

      {/* CTA Banner */}
      <div className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-600 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
          Need better data insights?
        </h3>
        <p className="text-blue-700 dark:text-blue-300 font-medium">
          We’ll build custom dashboards and predictive models tailored to your needs.
        </p>
      </div>
    </section>
  );
}

export default DataAnalytics;
