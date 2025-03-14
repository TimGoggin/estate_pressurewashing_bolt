
import React from "react";
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const images = [
  {
    src: "/before.jpg",
    alt: "Before cleaning",
    caption: "Before Professional Cleaning"
  },
  {
    src: "/after.jpg",
    alt: "After cleaning",
    caption: "After Professional Cleaning"
  },
  {
    src: "/residential.jpeg",
    alt: "Residential cleaning",
    caption: "Residential Property Cleaning"
  },
  {
    src: "/commercial.jpeg",
    alt: "Commercial cleaning",
    caption: "Commercial Property Cleaning"
  },
  {
    src: "/driveways.jpeg",
    alt: "Driveway cleaning",
    caption: "Driveway & Walkway Cleaning"
  },
  {
    src: "/paver.png",
    alt: "Paver cleaning",
    caption: "Paver Cleaning & Sealing"
  }
];

export default function Gallery() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work Gallery</h1>
          <p className="text-xl text-blue-100">See the transformative power of professional cleaning</p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}>
                <div className="aspect-video">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
