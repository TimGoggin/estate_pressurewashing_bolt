
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Calculator } from "lucide-react";

interface LayoutContext {
  darkMode: boolean;
}

export default function Services() {
  const { darkMode } = useOutletContext<LayoutContext>();

  const services = [
    {
      title: "House Washing",
      description:
        "Restore your home's exterior to its original beauty with our gentle yet effective house washing service.",
      features: [
        "Removes dirt, mold, and mildew",
        "Safe for all siding types",
        "Improves curb appeal",
      ],
      image: "/house.jpg",
      type: "residential"
    },
    {
      title: "Roof Cleaning",
      description:
        "Protect and extend your roof's life while improving your home's appearance with our specialized roof cleaning.",
      features: [
        "Removes black streaks and algae",
        "Extends roof lifespan",
        "Improves energy efficiency",
      ],
      image: "/residential.jpeg",
      type: "residential"
    },
    {
      title: "Walkways & Driveways",
      description:
        "Transform your outdoor surfaces with our professional pressure washing services.",
      features: [
        "Removes tough stains",
        "Prevents weed growth",
        "Enhances safety",
      ],
      image: "/driveways.jpeg",
      type: "commercial"
    },
    {
      title: "Paver Cleaning & Sealing",
      description:
        "Revitalize your pavers with our comprehensive cleaning and sealing service.",
      features: [
        "Deep cleaning",
        "Joint sand stabilization",
        "Protective sealing",
      ],
      image: "/paver.png",
      type: "commercial"
    },
    {
      title: "Gutter Cleaning",
      description:
        "Keep your gutters functioning properly with our thorough cleaning service.",
      features: [
        "Prevents water damage",
        "Removes debris",
        "Extends gutter life",
      ],
      image: "/driveways.jpeg",
      type: "specialty"
    },
    {
      title: "Graffiti Removal",
      description:
        "Professional removal of unwanted graffiti from various surfaces.",
      features: [
        "Safe removal techniques",
        "Surface restoration",
        "Protective coating available",
      ],
      image: "/commercial.jpeg",
      type: "specialty"
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      {/* Hero Section */}
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/residential.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Exterior Cleaning Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From houses to driveways, we deliver exceptional results with our
            comprehensive cleaning solutions
          </p>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem("scrollToQuote", "true");
              window.location.href = "/";
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-6">
        <div id="residential" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Residential Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.filter(service => service.type === "residential").map((service, index) => (
              <div
                key={index}
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                    {service.description}
                  </p>
                  <ul className="mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div id="commercial" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Commercial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.filter(service => service.type === "commercial").map((service, index) => (
              <div
                key={index}
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                    {service.description}
                  </p>
                  <ul className="mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="specialty">
          <h2 className="text-2xl font-bold mb-8">Specialty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.filter(service => service.type === "specialty").map((service, index) => (
              <div
                key={index}
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                    {service.description}
                  </p>
                  <ul className="mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Service Area
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              We proudly serve residential and commercial properties throughout:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Bucks County</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Including Doylestown, Newtown, Yardley, and surrounding areas
                </p>
              </div>
              <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Montgomery County</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Including Blue Bell, King of Prussia, Lansdale, and surrounding areas
                </p>
              </div>
              <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3">Philadelphia County</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Serving all neighborhoods within Philadelphia proper
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
