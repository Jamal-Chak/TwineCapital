import React from "react";
import devImage1 from "../../assets/services/www1.png";
import devImage2 from "../../assets/services/commerce.png";
import devImage3 from "../../assets/services/global.png";

function SoftwareDevelopment() {
  const skillSet = [
    { name: "React.js", level: "95%" },
    { name: "Node.js", level: "90%" },
    { name: "Python / Flask", level: "92%" },
    { name: "MongoDB", level: "88%" },
    { name: "UI/UX Design", level: "85%" },
  ];

  const imageAlts = [
    "Custom software interface",
    "E-commerce integration design",
    "Global deployment dashboard",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Software Product Development
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        From MVPs to full-scale platforms, we build robust and scalable software
        that meets your specific business needs. Using the latest technologies
        like Python, React, and MongoDB, our team ensures security, speed, and
        seamless user experience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        What We Offer
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-10">
        <li>Custom Web Applications</li>
        <li>Mobile App Development</li>
        <li>API Development & Integration</li>
        <li>Cloud & DevOps Deployment</li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[devImage1, devImage2, devImage3].map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={img}
              alt={imageAlts[index]}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Skill Set & Proficiency
      </h2>
      <div className="space-y-4 mb-10">
        {skillSet.map((skill, index) => (
          <div key={index}>
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

      <div className="bg-blue-100 dark:bg-gray-800 border-l-4 border-blue-600 p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
          Do you have any software requirements?
        </h3>
        <p className="text-blue-600 font-semibold dark:text-blue-400">
          We're here to turn your ideas into reality. Whether it's a prototype or a full platform — we’ve got you covered!
        </p>
      </div>
    </section>
  );
}

export default SoftwareDevelopment;
