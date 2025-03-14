import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  Phone, 
  Calendar, 
  MapPin, 
  MessageSquare,
  Facebook,
  Instagram,
} from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-12`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/EstatesLogo.png" alt="Estates Logo" className="h-12 w-auto mr-2" />
              <span className="text-xl font-bold">Estates Pressure Washing</span> {/* Updated company name */}
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Professional pressure washing services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-blue-600'}`}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-blue-600'}`}>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
              <li><Link to="/services/residential" className="hover:underline">Residential Washing</Link></li>
              <li><Link to="/services/commercial" className="hover:underline">Commercial Washing</Link></li>
              <li><Link to="/services/roof" className="hover:underline">Roof Cleaning</Link></li>
              <li><Link to="/services/deck-patio" className="hover:underline">Deck & Patio Cleaning</Link></li>
              <li><Link to="/services/gutters" className="hover:underline">Gutter Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team</Link></li>
              <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Cleaning St, Washville, WA 98765</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>info@pressurepro.example</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            © {new Date().getFullYear()} Estates Pressure Washing. All rights reserved. {/* Updated company name */}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} text-sm`}>Privacy Policy</Link>
            <Link to="/terms" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} text-sm`}>Terms of Service</Link>
            <Link to="/sitemap" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} text-sm`}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}