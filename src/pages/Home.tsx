
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

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Home() {
  const { darkMode } = useOutletContext<LayoutContext>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const slides = [
    "/hero_images/home_hero_1.jpg",
    "/hero_images/home_hero_2.jpg",
    "/hero_images/home_hero_3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const testimonials = [
    {
      name: "Gary Manzi",
      role: "Homeowner",
      image: "/GaryManzi.jpg",
      text: "Estates Pressure Washing did an incredible job on our home's exterior. The team was professional, punctual, and the results exceeded our expectations. Our siding looks brand new!",
      rating: 5,
    },
    {
      name: "William Betz",
      role: "Property Manager",
      image: "/WilliamBetz.webp",
      text: "We've been using Estates for our commercial properties for over two years. Their consistency and quality of work is unmatched. Highly recommended for any pressure washing needs.",
      rating: 5,
    },
  ];

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link rel="canonical" href="https://www.estatespresswash.com/" />
        <title>
          Estates Pressure Washing | Professional Exterior Cleaning Services |
          Bucks, Montgomery & Philadelphia Counties
        </title>
        <meta
          name="description"
          content="Professional pressure washing services for residential and commercial properties in Bucks, Montgomery, and Philadelphia Counties. Expert house washing, driveway cleaning, roof cleaning, and more. Free estimates available."
        />
        <meta
          name="keywords"
          content="pressure washing, house washing, driveway cleaning, roof cleaning, exterior cleaning, Bucks County, Montgomery County, Philadelphia County, residential pressure washing, commercial pressure washing"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/",
            image: "https://www.estatespresswash.com/hero_images/home_hero_1.jpg",
            logo: "https://www.estatespresswash.com/EstatesLogo.png",
            description:
              "Professional pressure washing services for residential and commercial properties in Bucks, Montgomery, and Philadelphia Counties.",
            telephone: "+1-267-685-0530",
            email: "epw@estatesfireplace.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
                opens: "09:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Thursday",
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "15:00",
              },
            ],
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "Newtown",
                "Yardley",
                "Blue Bell",
                "King of Prussia",
                "Philadelphia",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pressure Washing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Residential Pressure Washing",
                    description:
                      "Complete exterior cleaning for roofs, siding, driveways, decks, patios, and fences.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Pressure Washing",
                    description:
                      "Professional cleaning for storefronts, buildings, warehouses, and graffiti removal.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Specialty Cleaning",
                    description:
                      "Paver cleaning and sealing, gutter brightening, and surface prep for painting/staining.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide}')`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
        
        <div className="absolute inset-0 opacity-30">
          <div className="water-animation"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Restore Your Property's Beauty with{" "}
            <span className="text-blue-400">Professional Pressure Washing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Serving the local community since 2017 with eco-friendly cleaning
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="sms:+12679176994"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Text Us Now
            </a>
            <Link
              to="/contact-us"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </div>

      {/* Before/After Section */}
      <section
        className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See Our Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <OptimizedImage
                src="/homeBefore.jpg"
                alt="Before pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/homeAfter.jpg"
                alt="After pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                AFTER
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Comprehensive exterior cleaning solutions for residential and
              commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-center mb-4">
                <HomeIcon
                  className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                />
                <h3 className="text-xl font-bold ml-4">Residential</h3>
              </div>
              <p
                className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                House washing, driveway cleaning, deck restoration, and more for
                homeowners.
              </p>
              <Link
                to="/services#residential"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div
              className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-center mb-4">
                <Building
                  className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                />
                <h3 className="text-xl font-bold ml-4">Commercial</h3>
              </div>
              <p
                className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Professional cleaning for storefronts, warehouses, and business
                properties.
              </p>
              <Link
                to="/services#commercial"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div
              className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-center mb-4">
                <Wrench
                  className={`h-12 w-12 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                />
                <h3 className="text-xl font-bold ml-4">Specialty</h3>
              </div>
              <p
                className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Graffiti removal, gutter brightening, and specialized cleaning
                services.
              </p>
              <Link
                to="/services#specialty"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Estates Pressure Washing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-600" : "bg-blue-100"}`}
              >
                <Shield
                  className={`h-8 w-8 ${darkMode ? "text-white" : "text-blue-600"}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p
                className={darkMode ? "text-gray-300" : "text-gray-600"}
              >
                Complete liability coverage for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-600" : "bg-blue-100"}`}
              >
                <Clock
                  className={`h-8 w-8 ${darkMode ? "text-white" : "text-blue-600"}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Always On Time</h3>
              <p
                className={darkMode ? "text-gray-300" : "text-gray-600"}
              >
                Punctual service that respects your schedule
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-600" : "bg-blue-100"}`}
              >
                <Droplet
                  className={`h-8 w-8 ${darkMode ? "text-white" : "text-blue-600"}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p
                className={darkMode ? "text-gray-300" : "text-gray-600"}
              >
                Safe cleaning solutions that protect your landscape
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-600" : "bg-blue-100"}`}
              >
                <ThumbsUp
                  className={`h-8 w-8 ${darkMode ? "text-white" : "text-blue-600"}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p
                className={darkMode ? "text-gray-300" : "text-gray-600"}
              >
                We stand behind our work with a 100% guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p
                  className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    width={48}
                    height={48}
                    quality={90}
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p
                      className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 ${darkMode ? "bg-blue-900" : "bg-blue-600"} text-white`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Estates Pressure
            Washing for their exterior cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
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
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p
                className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                At Estates Pressure Washing, we're committed to restoring and
                maintaining the beauty of your property through superior cleaning
                services and unmatched customer care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      We guarantee our work meets the highest standards of
                      cleanliness and professionalism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Customer First</h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Your satisfaction is our priority. We listen to your needs
                      and exceed expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className={`h-6 w-6 mr-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Community Focused</h3>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Proudly serving our local communities with reliable,
                      professional service since 2017.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/AboutHero.jpeg"
                alt="Professional pressure washing service"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                width={600}
                height={500}
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
