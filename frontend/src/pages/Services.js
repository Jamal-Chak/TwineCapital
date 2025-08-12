import React from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "Accounting & Tax Advisory", route: "accounting-tax" },
  { name: "Financial Consulting", route: "financial-consulting" },
  { name: "Auditing & Assurance", route: "auditing-assurance" },
  { name: "Financial Statement Preparation", route: "financial-statements" },
  { name: "Software Product Development", route: "software-development" },
  { name: "Data Analytics", route: "data-analytics" },
  { name: "Software Consulting", route: "software-consulting" },
  { name: "UX/UI Design", route: "ux-ui-design" },
];

function Services() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            to={`/services/${service.route}`}
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn more about our {service.name.toLowerCase()} services.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
