import React from "react";
import uiuxImg from "../../assets/services/uiux.png"; // Make sure this image exists

function UXUIDesign() {
  const designSkills = [
    { name: "User Experience (UX)", level: "95%" },
    { name: "Interface Aesthetics", level: "90%" },
    { name: "Prototyping Speed", level: "88%" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">UX/UI Design</h1>

      {/* Description & Image Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 items-center">
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Beautiful, intuitive interfaces built for users. We craft designs that engage, convert,
            and delight across devices — always putting user experience first.
          </p>

          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Wireframes & Prototypes</li>
            <li>Responsive Web & App Design</li>
            <li>User Journey Mapping</li>
            <li>Figma / Adobe XD Designs</li>
          </ul>
        </div>

        <img
          src={uiuxImg}
          alt="UI/UX Design"
          className="rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Design Strengths</h2>
        {designSkills.map((skill, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 shadow text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Want stunning UI for your users?
        </h3>
        <p className="text-blue-600 font-semibold dark:text-blue-400">
          We build fast, beautiful, accessible interfaces that convert.
        </p>
      </div>
    </section>
  );
}

export default UXUIDesign;
