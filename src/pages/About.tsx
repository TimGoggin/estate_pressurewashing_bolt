import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Shield,
  ThumbsUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Phone, MessageSquare } from "lucide-react";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function About() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      {/* Hero Section */}
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/AboutHero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        {/* Animated water droplets background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 10%)",
          }}
        ></div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Estates Pressure Washing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Delivering exceptional exterior cleaning services with
              professionalism and dedication since 2017
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us Today
              </Link>
              <a
                href="tel:+12676850530"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Today!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p
                className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                At Estates Pressure Washing, we're committed to restoring and
                maintaining the beauty of your property through superior
                cleaning services and unmatched customer care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      We guarantee our work meets the highest standards of
                      cleanliness and safety.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Customer Satisfaction
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Your satisfaction is our top priority, and we work
                      tirelessly to exceed expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Our skilled professionals bring years of experience and
                      expertise to every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/after17.jpg"
                  alt="Professional Pool Cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Estates Pressure Washing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} p-8 rounded-lg shadow-lg`}
            >
              <Shield
                className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"} mb-6`}
              />
              <h3 className="text-xl font-semibold mb-4">Licensed & Insured</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Full coverage and protection for your property with
                comprehensive insurance and proper licensing.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} p-8 rounded-lg shadow-lg`}
            >
              <Clock
                className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"} mb-6`}
              />
              <h3 className="text-xl font-semibold mb-4">Timely Service</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                We respect your time with punctual arrivals and efficient
                completion of projects.
              </p>
            </div>
            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} p-8 rounded-lg shadow-lg`}
            >
              <CheckCircle
                className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"} mb-6`}
              />
              <h3 className="text-xl font-semibold mb-4">
                Satisfaction Guaranteed
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                We stand behind our work with a 100% satisfaction guarantee on
                all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-600 -translate-y-1/2"></div>

              {/* Timeline items */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative">
                  <div
                    className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
                  >
                    <span className="text-blue-600 font-bold text-lg mb-4 block text-center">
                      Step 1
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      Initial Consultation
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}
                    >
                      We begin with a thorough assessment of your property's
                      needs and discuss your specific requirements.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
                  >
                    <span className="text-blue-600 font-bold text-lg mb-4 block text-center">
                      Step 2
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      Custom Solution
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}
                    >
                      We develop a tailored cleaning plan that addresses your
                      specific needs and concerns.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
                  >
                    <span className="text-blue-600 font-bold text-lg mb-4 block text-center">
                      Step 3
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      Professional Execution
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}
                    >
                      Our expert team carries out the cleaning process using
                      state-of-the-art equipment and eco-friendly products.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
                  >
                    <span className="text-blue-600 font-bold text-lg mb-4 block text-center">
                      Step 4
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      Quality Inspection
                    </h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}
                    >
                      We perform a detailed inspection to ensure every aspect
                      meets our high standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                How much experience does your company have with pressure washing
                and soft washing?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Our company is led by an individual with over 8 years of
                experience in the industry.
              </p>
            </div>

            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-3">
                Is your company Licensed & Insured?
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                We are fully insured and registered with the State of
                Pennsylvania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Experience the difference professional pressure washing can make.
            Contact us today for a free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
