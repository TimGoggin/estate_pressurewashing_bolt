
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type ContextType = { darkMode: boolean };

export default function Sitemap() {
  const { darkMode } = useOutletContext<ContextType>();

  const sitePages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/services', name: 'Our Services' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Sitemap
        </h1>
        <div className={`grid gap-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {sitePages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className={`flex items-center p-4 rounded-lg transition-all ${
                darkMode
                  ? 'hover:bg-gray-800 bg-gray-850'
                  : 'hover:bg-white bg-gray-100'
              } hover:shadow-md group`}
            >
              <ChevronRight className={`w-5 h-5 mr-2 transition-transform group-hover:translate-x-1 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <span className="text-lg">{page.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
