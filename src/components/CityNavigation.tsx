
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cities } from "../config/cityConfig";

interface CityNavigationProps {
  darkMode: boolean;
}

export default function CityNavigation({ darkMode }: CityNavigationProps) {
  return (
    <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg opacity-75">
            We proudly serve communities throughout Bucks, Montgomery, and Philadelphia Counties
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/cities/${city.slug}`}
              className={`p-6 rounded-lg border transition-all hover:shadow-lg ${
                darkMode 
                  ? "border-gray-700 bg-gray-900 hover:bg-gray-700" 
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start">
                <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                  <p className="text-sm opacity-75 mb-2">{city.county}</p>
                  <p className="text-sm mb-3 line-clamp-2">{city.description}</p>
                  <div className="text-blue-600 font-medium text-sm">
                    View Services →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
