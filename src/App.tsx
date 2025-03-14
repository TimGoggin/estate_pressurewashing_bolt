import React, { useState, useRef, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Droplet,
  Home,
  Building2,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  MapPin,
  Shield,
  ThumbsUp,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Info,
  Image,
  MessageSquare,
  Facebook,
  Instagram,
  ChevronDown,
  Moon,
  Sun,
  Calculator,
} from "lucide-react";
import Navigation from "./components/Navigation";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const beforeImage = "/before.jpg";
const afterImage = "/after.jpg";

function App() {
  const { darkMode, toggleDarkMode } = useOutletContext<LayoutContext>();
  const [selectedSurface, setSelectedSurface] = useState("driveway");
  const [squareFootage, setSquareFootage] = useState(500);
  const [quoteEstimate, setQuoteEstimate] = useState(150);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Calculate quote based on surface type and square footage
  useEffect(() => {
    const baseRates: Record<string, number> = {
      driveway: 0.25,
      deck: 0.35,
      siding: 0.3,
      roof: 0.4,
      patio: 0.28,
    };

    const rate = baseRates[selectedSurface] || 0.25;
    const estimate = Math.round(squareFootage * rate);
    setQuoteEstimate(Math.max(estimate, 100)); // Minimum $100
  }, [selectedSurface, squareFootage]);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }

      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const testimonials = [
    {
      name: "William Betz Jr.",
      location: "",
      text: "Allen and his team did a fantastic job on our patios. The pavers needed cleaning and re-grouting. They pressure washed and removed all the old grout, re-sanded and used a vibratory machine to compact. Finally sealed with microseal. They spent a lot of time on the project and made sure it was done right. I highly recommend them for their quality work, great communication and friendly service!",
      rating: 5,
      image: "/WilliamBetz.webp",
    },
    {
      name: "Maddy Hrin",
      location: "",
      text: "Great young crew willing to do whatever it takes to please their customers! They did such a great job I didn't even recognize my house when I got home!",
      rating: 5,
      image: "/maddyhrin.png",
    },
    {
      name: "Gary Manzi",
      location: "",
      text: "Fair pricing, courteous and a job well done. Highly recommend.",
      rating: 5,
      image: "/GaryManzi.jpg",
    },
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} font-sans`}
    >
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d)",
        }}
      >
        {/* Animated water particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="water-animation"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Restore Your Home's Beauty with{" "}
            <span className="text-blue-400">Professional Pressure Washing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Eco-friendly cleaning solutions with a 100% satisfaction guarantee.
            Serving local homeowners and businesses since 2017.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('quote');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Get a Free Quote
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all">
              <Calendar className="mr-2 h-5 w-5 inline" />
              Schedule Service
            </button>
          </div>
        </div>
      </div>

      {/* Before-After Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See the Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <img
                src={beforeImage}
                alt="Before pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
                Before
              </div>
            </div>

            <div className="relative">
              <img
                src={afterImage}
                alt="After pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Professional Services
          </h2>
          <p
            className={`text-xl text-center ${darkMode ? "text-gray-300" : "text-gray-600"} mb-12 max-w-3xl mx-auto`}
          >
            We provide comprehensive exterior cleaning solutions for residential
            and commercial properties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105`}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url(/residential.jpeg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Residential Pressure Washing
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                >
                  Revitalize your home's exterior with our comprehensive
                  residential pressure washing services.
                </p>
                <ul className="mb-4">
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Driveways & Walkways</span>
                  </li>
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>House Siding & Gutters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Decks & Patios</span>
                  </li>
                </ul>
                <button className="text-blue-500 font-semibold flex items-center hover:text-blue-400">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105`}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url(/commercial.jpeg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Commercial Pressure Washing
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                >
                  Maintain your business's professional appearance with our
                  commercial cleaning services.
                </p>
                <ul className="mb-4">
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Storefronts & Entrances</span>
                  </li>
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Parking Lots & Garages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Building Exteriors</span>
                  </li>
                </ul>
                <button className="text-blue-500 font-semibold flex items-center hover:text-blue-400">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105`}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url(/specialty.jpeg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Specialty Cleaning</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                >
                  Our specialized cleaning services address unique surfaces and
                  challenging cleaning needs.
                </p>
                <ul className="mb-4">
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Paver Sanding and Sealing</span>
                  </li>
                  <li className="flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Gutter Installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Graffiti Removal</span>
                  </li>
                </ul>
                <button className="text-blue-500 font-semibold flex items-center hover:text-blue-400">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator */}
      <section
        id="quote"
        className={`py-16 ${darkMode ? "bg-gray-800" : "bg-blue-50"} scroll-mt-20`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get an Instant Quote
          </h2>
          <p
            className={`text-xl text-center ${darkMode ? "text-gray-300" : "text-gray-600"} mb-12 max-w-3xl mx-auto`}
          >
            Select your surface type and enter the approximate square footage
            for an estimate
          </p>

          <div
            className={`max-w-4xl mx-auto ${darkMode ? "bg-gray-900" : "bg-white"} rounded-xl shadow-lg p-8`}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Select Surface Type
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <button
                  className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSurface === "driveway" ? (darkMode ? "bg-blue-900 border-2 border-blue-500" : "bg-blue-100 border-2 border-blue-500") : darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => setSelectedSurface("driveway")}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Driveway</span>
                </button>

                <button
                  className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSurface === "deck" ? (darkMode ? "bg-blue-900 border-2 border-blue-500" : "bg-blue-100 border-2 border-blue-500") : darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => setSelectedSurface("deck")}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Deck</span>
                </button>

                <button
                  className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSurface === "siding" ? (darkMode ? "bg-blue-900 border-2 border-blue-500" : "bg-blue-100 border-2 border-blue-500") : darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => setSelectedSurface("siding")}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Siding</span>
                </button>

                <button
                  className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSurface === "roof" ? (darkMode ? "bg-blue-900 border-2 border-blue-500" : "bg-blue-100 border-2 border-blue-500") : darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => setSelectedSurface("roof")}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Roof</span>
                </button>

                <button
                  className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${selectedSurface === "patio" ? (darkMode ? "bg-blue-900 border-2 border-blue-500" : "bg-blue-100 border-2 border-blue-500") : darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => setSelectedSurface("patio")}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Patio</span>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Approximate Square Footage
              </h3>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={squareFootage}
                onChange={(e) => setSquareFootage(parseInt(e.target.value))}
                className={`w-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-lg appearance-none cursor-pointer`}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
                <span>100 sq ft</span>
                <span className="font-semibold">{squareFootage} sq ft</span>
                <span>2000 sq ft</span>
              </div>
            </div>

            <div
              className={`${darkMode ? "bg-blue-900" : "bg-blue-50"} p-6 rounded-lg`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Your Estimate</h3>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Based on {squareFootage} sq ft of {selectedSurface}
                  </p>
                </div>
                <div className="text-3xl font-bold text-blue-500">
                  ${quoteEstimate}
                </div>
              </div>
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mt-2`}
              >
                *This is an estimate only. Final pricing may vary based on site
                conditions and specific requirements.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Request Exact Quote
              </button>
              <button
                className={`bg-transparent ${darkMode ? "hover:bg-blue-900 text-blue-400 border-2 border-blue-400" : "hover:bg-blue-50 text-blue-600 border-2 border-blue-600"} font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center`}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p
            className={`text-xl text-center ${darkMode ? "text-gray-300" : "text-gray-600"} mb-12 max-w-3xl mx-auto`}
          >
            Don't just take our word for it. Here's what our satisfied customers
            have to say.
          </p>

          <div className="max-w-4xl mx-auto relative">
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg p-8 md:p-12`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={`${testimonials[currentTestimonial].name}'s property after pressure washing`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ),
                    )}
                  </div>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg italic mb-6`}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p
                      className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrevTestimonial}
                className={`w-12 h-12 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} shadow-md flex items-center justify-center transition-all`}
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className={`w-12 h-12 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} shadow-md flex items-center justify-center transition-all`}
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Pressure Washing Service?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Shield className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Licensed & Insured
                    </h3>
                    <p className="text-blue-100">
                      Fully licensed and insured for your complete peace of
                      mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Droplet className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Eco-Friendly</h3>
                    <p className="text-blue-100">
                      We use environmentally safe cleaning solutions for all
                      services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <ThumbsUp className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Satisfaction Guaranteed
                    </h3>
                    <p className="text-blue-100">
                      100% satisfaction guarantee on all our work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Locally Owned</h3>
                    <p className="text-blue-100">
                      Proudly serving our local community since 2017.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} ${darkMode ? "text-white" : "text-gray-800"} rounded-xl shadow-lg p-8`}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">
                Ready to Restore Your Property?
              </h3>
              <p
                className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}
              >
                Fill out the form below for a free, no-obligation quote.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-1`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500" : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-md shadow-sm`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-1`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500" : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-md shadow-sm`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-1`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500" : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-md shadow-sm`}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} mb-1`}
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className={`w-full px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500" : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-md shadow-sm`}
                  >
                    <option>Residential Pressure Washing</option>
                    <option>Commercial Pressure Washing</option>
                    <option>Roof Cleaning</option>
                    <option>Deck & Patio Cleaning</option>
                    <option>Other (Please specify)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${darkMode ?"text-gray-300" : "text-gray-700"} mb-1`}
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500" : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-md shadow-sm`}
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all shadow-md"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;