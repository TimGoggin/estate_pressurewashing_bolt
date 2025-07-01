import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const loadAccessibilityTools = () => {
    // Define the EqualWeb configuration
    (window as any).interdeal = {
      "sitekey": "20757c8cfaf6da895f46c68088047322",
      "Position": "left",
      "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
      },
      "Menulang": "EN",
      "btnStyle": {
        "vPosition": [
          "90%",
          "10%"
        ],
        "scale": [
          "0.5",
          "0.5"
        ],
        "color": {
          "main": "#1C4ED8",
          "second": "#FFFFFF"
        },
        "icon": {
          "outline": false,
          "type": 1,
          "shape": "circle"
        }
      }
    };

    // Load the accessibility script
    const coreCall = document.createElement('script');
    coreCall.src = 'https://cdn.equalweb.com/core/5.1.0/accessibility.js';
    coreCall.defer = true;
    coreCall.integrity = 'sha512-TcsprTlCCE0u/G5TN3zikzkynCEIRcfd96+RejMcyd2HFPnTpVUDxumXmFb/rSJ3ogQM+b/yvYWLwV6duAuJQg==';
    coreCall.crossOrigin = 'anonymous';
    coreCall.setAttribute('data-cfasync', 'true');

    document.body.appendChild(coreCall);
  };

  return (
    <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-12`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <OptimizedImage
                src="/EstatesLogo.png"
                alt="Estates Logo"
                className="h-12 w-auto mr-2"
                width={100}
                height={48}
                quality={90}
              />
              <span className="text-xl font-bold"></span>
            </div>
            <p
              className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}
            >
              Professional pressure washing services for residential and
              commercial properties. Serving local homeowners and businesses
              since 2017. Serving Bucks, Montgomery, and Philadelphia counties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+12676850530"
                className={`flex items-center ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
              >
                <Phone className="h-5 w-5 mr-2" />
                (267) 685-0530
              </a>
              <div className="flex mt-4 space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <div className="space-y-2">
            <p
              className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
            >
              © {new Date().getFullYear()} Estates Pressure Washing. All rights
              reserved.
            </p>
            <p className="space-x-4">
              <a 
                href="/sitemap.xml"
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} text-sm`}
              >
                Sitemap
              </a>
              <Link
                to="/accessibility-statement"
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} text-sm`}
              >
                Accessibility
              </Link>
              <button
                onClick={loadAccessibilityTools}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} text-sm ml-4 underline cursor-pointer`}
              >
                Accessibility Tools
              </button>
              <Link
                to="/privacy-policy"
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} text-sm ml-4`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} text-sm ml-4`}
              >
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}