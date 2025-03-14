import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  Home, 
  Info,
  Image,
  Star,
  MessageSquare,
  Phone,
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg') : (darkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm')}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Droplet className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
              <span className="text-xl font-bold">PressureProClean</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link flex items-center group">
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600 mt-0.5"></span>
            </Link>
            
            <Link to="/about" className="nav-link flex items-center group">
              <Info className="h-4 w-4 mr-1" />
              <span>About Us</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600 mt-0.5"></span>
            </Link>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onClick={() => toggleDropdown('services')}
              >
                <Droplet className="h-4 w-4 mr-1" />
                <span>Services</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link to="/services/residential" className={`block px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>House Washing</Link>
                <Link to="/services/roof" className={`block px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Roof Cleaning</Link>
                <Link to="/services/driveways" className={`block px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Driveways & Sidewalks</Link>
                <Link to="/services/commercial" className={`block px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Commercial Power Washing</Link>
                <Link to="/services/gutters" className={`block px-4 py-2 text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Gutter Cleaning</Link>
              </div>
            </div>
            
            <Link to="/gallery" className="nav-link flex items-center group">
              <Image className="h-4 w-4 mr-1" />
              <span>Gallery</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600 mt-0.5"></span>
            </Link>
            
            <Link to="/reviews" className="nav-link flex items-center group">
              <Star className="h-4 w-4 mr-1" />
              <span>Reviews</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600 mt-0.5"></span>
            </Link>
            
            <Link to="/contact" className="nav-link flex items-center group">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>Contact</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600 mt-0.5"></span>
            </Link>
          </nav>

          {/* Right Side - Phone, Social, CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-blue-600'} transition-colors`}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
            {/* Phone */}
            <a href="tel:5551234567" className="flex items-center text-sm font-medium">
              <Phone className={`h-4 w-4 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span>(555) 123-4567</span>
            </a>
            
            {/* CTA Button */}
            <Link to="/#quote" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center">
              <span>Get an Instant Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <a href="tel:5551234567" className="mr-2">
              <Phone className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </a>
            <button onClick={toggleDarkMode} className="mr-2">
              {darkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>
            <button 
              onClick={toggleMobileMenu}
              className={`${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className={`px-4 pt-2 pb-4 space-y-1 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Link to="/" className={`block py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center`}>
            <Home className="h-5 w-5 mr-3" />
            <span>Home</span>
          </Link>
          
          <Link to="/about" className={`block py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center`}>
            <Info className="h-5 w-5 mr-3" />
            <span>About Us</span>
          </Link>
          
          <div>
            <button 
              onClick={() => toggleDropdown('mobileServices')}
              className={`w-full text-left py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center justify-between`}
            >
              <div className="flex items-center">
                <Droplet className="h-5 w-5 mr-3" />
                <span>Services</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
            </button>
            <Link to="/services" className="block py-2">Our Services</Link>
          </div>
          
          <Link to="/gallery" className={`block py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center`}>
            <Image className="h-5 w-5 mr-3" />
            <span>Gallery</span>
          </Link>
          
          <Link to="/reviews" className={`block py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center`}>
            <Star className="h-5 w-5 mr-3" />
            <span>Reviews</span>
          </Link>
          
          <Link to="/contact" className={`block py-3 px-4 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex items-center`}>
            <MessageSquare className="h-5 w-5 mr-3" />
            <span>Contact</span>
          </Link>
          
          <div className="pt-2">
            <Link to="/#quote" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center shadow-md">
              Get an Instant Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 