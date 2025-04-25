import React from "react";
import { useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Contact() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100">
            We're here to help with all your exterior cleaning needs
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="w-full h-[600px]">
              <iframe
                src={darkMode ? "https://bv6w3pwoi5y.typeform.com/to/HNxNwJKc" : "https://bv6w3pwoi5y.typeform.com/to/ChJZphDN"}
                style={{ width: "100%", height: "100%", border: "0" }}
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        267-917-6994
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        epw@estatesfireplace.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        Bucks County, Montgomery County, and Philadelphia County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        Monday, Tuesday, Wednesday, Friday : 9am-4pm
                        <br />
                        Thursday: 9am-7pm
                        <br />
                        Saturday: 9am-3pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}