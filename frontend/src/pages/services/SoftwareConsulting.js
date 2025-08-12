import React from "react";
import consultingImg from "../../assets/services/consulting.png"; // ✅ Ensure the image exists

function SoftwareConsulting() {
  const strengths = [
    { name: "Scalability Planning", level: "91%" },
    { name: "Architecture Design", level: "94%" },
    { name: "Tech Stack Strategy", level: "89%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Software Consulting
      </h1>

      {/* Description & Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 items-start">
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Get expert guidance on software architecture, scalability,
            integrations, and digital transformation. Our team helps turn your
            vision into reality.
          </p>

          <h2 className="text-xl font-semibold mb-2 text-blue-600">Expertise Includes:</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Technology Audits</li>
            <li>Cloud Architecture Consulting</li>
            <li>DevOps & CI/CD Setup</li>
            <li>Agile Digital Transformation</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={consultingImg}
            alt="Software Consulting"
            className="w-full h-64 object-cover brightness-95 mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-gray-900/30 to-transparent" />
        </div>
      </div>

      {/* Strength Bars */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Strength Areas</h2>
        {strengths.map((skill, index) => (
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

      {/* CTA Section */}
      <div className="bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-600 p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
          Not sure how to scale your app?
        </h3>
        <p className="text-blue-600 font-semibold dark:text-blue-400">
          Our consultants help you choose the right tech, process, and architecture.
        </p>
      </div>
    </section>
  );
}

export default SoftwareConsulting;
