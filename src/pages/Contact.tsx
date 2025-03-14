
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
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">We're here to help with all your exterior cleaning needs</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg`}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 focus:border-blue-500"
                      } focus:ring-1 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 focus:border-blue-500"
                      } focus:ring-1 focus:ring-blue-500`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                        : "bg-gray-50 border-gray-300 focus:border-blue-500"
                    } focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                        : "bg-gray-50 border-gray-300 focus:border-blue-500"
                    } focus:ring-1 focus:ring-blue-500`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                        : "bg-gray-50 border-gray-300 focus:border-blue-500"
                    } focus:ring-1 focus:ring-blue-500`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all"
                >
                  Send Message
                </button>
              </form>
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
                      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>+1 (215) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>info@estatespowerwashing.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        Bucks County, Montgomery County, and Philadelphia County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
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
