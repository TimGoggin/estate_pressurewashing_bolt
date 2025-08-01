import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Droplet,
  Home as HomeIcon,
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
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "./components/OptimizedImage";


interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const beforeImage = "/before17.jpg";
const afterImage = "/after17.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("scrollToQuote")) {
      sessionStorage.removeItem("scrollToQuote");
      const quoteElement = document.getElementById("quote");
      if (quoteElement) {
        setTimeout(() => {
          quoteElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
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
      <Helmet>
        <link rel="canonical" href="https://www.estatespresswash.com/" />
        <title>
          Estates Pressure Washing | Expert Residential & Commercial Cleaning in
          PA
        </title>
        <meta
          name="description"
          content="Estates Pressure Washing provides eco-friendly residential, commercial, and specialty pressure washing services across Bucks, Montgomery, and Philadelphia Counties. Licensed, insured, and trusted since 2017."
        />
        <meta
          name="keywords"
          content="pressure washing, soft washing, roof cleaning, driveway cleaning, paver sealing, gutter cleaning, graffiti removal, residential cleaning, commercial cleaning, Bucks County, Montgomery County, Philadelphia"
        />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Estates Pressure Washing | Expert Residential & Commercial Cleaning in PA" />
        <meta property="og:description" content="Estates Pressure Washing provides eco-friendly residential, commercial, and specialty pressure washing services across Bucks, Montgomery, and Philadelphia Counties. Licensed, insured, and trusted since 2017." />
        <meta property="og:url" content="https://www.estatespresswash.com/" />
        <meta property="og:image" content="https://www.estatespresswash.com/hero_images/home_hero_1.jpg" />
        <meta property="og:image:alt" content="Professional pressure washing services" />
        <meta property="og:site_name" content="Estates Pressure Washing" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estates Pressure Washing | Expert Residential & Commercial Cleaning in PA" />
        <meta name="twitter:description" content="Estates Pressure Washing provides eco-friendly residential, commercial, and specialty pressure washing services across Bucks, Montgomery, and Philadelphia Counties." />
        <meta name="twitter:image" content="https://www.estatespresswash.com/hero_images/home_hero_1.jpg" />
        <meta name="twitter:image:alt" content="Professional pressure washing services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com",
            image:
              "https://www.estatespresswash.com/hero_images/home_hero_1.jpg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "Estates Pressure Washing offers professional, eco-friendly pressure washing services for homes, businesses, and specialty surfaces throughout Bucks, Montgomery, and Philadelphia Counties.",
            telephone: "+1-267-917-6994",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            openingHours: "Mo-Sa 08:00-18:00",
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
              name: "Estates Pressure Washing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Residential Pressure Washing",
                    description:
                      "Exterior cleaning for roofs, siding, driveways, decks, patios, and fences.",
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

      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src="/hero_images/home_hero_1.jpg"
            alt="Professional pressure washing services hero image 1"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
            width={1920}
            height={1080}
            quality={90}
            fit="cover"
            loading="eager"
          />
          <OptimizedImage
            src="/hero_images/home_hero_2.jpg"
            alt="Professional pressure washing services hero image 2"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
            width={1920}
            height={1080}
            quality={90}
            fit="cover"
            loading="eager"
          />
          <OptimizedImage
            src="/hero_images/home_hero_3.jpg"
            alt="Professional pressure washing services hero image 3"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}
            width={1920}
            height={1080}
            quality={90}
            fit="cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Animated water particles */}
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
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </div>

      {/* Before-After Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See Our Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <OptimizedImage
                src={beforeImage}
                alt="Before pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                width={600}
                height={400}
                quality={85}
                fit="cover"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
                Before
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src={afterImage}
                alt="After pressure washing"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                width={600}
                height={400}
                quality={85}
                fit="cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
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
              <OptimizedImage
                src="/after3.png"
                alt="Residential pressure washing"
                className="h-48 bg-cover bg-center"
                width={400}
                height={192}
                quality={85}
                fit="cover"
              />
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
                    <span>Roofs</span>
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
                <Link
                  to="/services#services"
                  className="text-blue-500 font-semibold flex items-center hover:text-blue-400"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105`}
            >
              <OptimizedImage
                src="/after9.png"
                alt="Commercial pressure washing"
                className="h-48 bg-cover bg-center"
                width={400}
                height={192}
                quality={85}
                fit="cover"
              />
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
                    <span>Schools and Churches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Building Exteriors</span>
                  </li>
                </ul>
                <Link
                  to="/services#services"
                  className="text-blue-500 font-semibold flex items-center hover:text-blue-400"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105`}
            >
              <OptimizedImage
                src="/after20.jpg"
                alt="Specialty cleaning services"
                className="h-48 bg-cover bg-center"
                width={400}
                height={192}
                quality={85}
                fit="cover"
              />
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
                    <span>Gutter Brightening</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Graffiti Removal</span>
                  </li>
                </ul>
                <Link
                  to="/services#services"
                  className="text-blue-500 font-semibold flex items-center hover:text-blue-400"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Customers Are Saying
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
                    <OptimizedImage
                      src={testimonials[currentTestimonial].image}
                      alt={`${testimonials[currentTestimonial].name}'s property after pressure washing`}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                      quality={90}
                      fit="cover"
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

              <ContactForm darkMode={darkMode} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;