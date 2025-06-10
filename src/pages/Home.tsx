import React, { useState, useEffect, useRef } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Droplet,
  Shield,
  Clock,
  ThumbsUp,
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  Home as HomeIcon,
  Building,
  Wrench,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import ContactForm from "../components/ContactForm";
{/* Quote Form Section */}
      <section
        id="quote"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Quote</h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to transform your property? Fill out our quick form below
              and we'll provide you with a personalized quote.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </section>