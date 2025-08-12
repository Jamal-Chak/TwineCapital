import React from "react";
import auditImage from "../../assets/services/audit.png"; // Ensure this image exists

function AuditingAssurance() {
  const skills = [
    { name: "Regulatory Compliance", level: "94%" },
    { name: "Internal Control Analysis", level: "91%" },
    { name: "Risk Identification", level: "88%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Auditing & Assurance</h1>

      {/* Text & Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our auditing services provide independent and objective evaluations of your financial
            statements, systems, and processes to ensure accuracy, compliance, and integrity.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Internal & External Audits</li>
            <li>Regulatory and Compliance Checks</li>
            <li>Risk-Based Auditing</li>
            <li>Operational & Performance Audits</li>
          </ul>
        </div>

        <img
          src={auditImage}
          alt="Audit Illustration"
          className="rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-0"
        />
      </div>

      {/* Skill Set */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Core Competencies</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-600">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 shadow text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Need assurance on your operations?
        </h3>
        <p className="text-blue-600 font-semibold dark:text-blue-400">
          Our auditing services will help you build stakeholder trust and improve internal performance.
        </p>
      </div>
    </section>
  );
}

export default AuditingAssurance;
