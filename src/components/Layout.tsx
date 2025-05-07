import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Added import
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred color scheme
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HelmetProvider> {/* Added HelmetProvider */}
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} font-sans`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Outlet context={{ darkMode, toggleDarkMode }} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </HelmetProvider> {/* Added HelmetProvider */}
  );
}