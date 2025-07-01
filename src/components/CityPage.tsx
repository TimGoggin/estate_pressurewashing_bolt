
import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { cities, CityData } from "../config/cityConfig";
import OptimizedImage from "./OptimizedImage";

interface LayoutContext {
  darkMode: boolean;
}

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { darkMode } = useOutletContext<LayoutContext>();
  
  const city = cities.find(c => c.slug === citySlug);
  
  if (!city) {
    return (
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
        <div className="pt-32 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p>The requested city page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <Helmet>
        <link rel="canonical" href={`https://www.estatespresswash.com/cities/${city.slug}`} />
        <title>Pressure Washing {city.name}, {city.county} | Estates Pressure Washing</title>
        <meta name="description" content={city.metaDescription} />
        <meta
          name="keywords"
          content={`pressure washing ${city.name}, ${city.county} pressure washing, ${city.name} exterior cleaning, commercial cleaning ${city.name}, residential pressure washing ${city.county}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: `https://www.estatespresswash.com/cities/${city.slug}`,
            image: "https://www.estatespresswash.com/hero_images/home_hero_1.jpg",
            logo: "https://www.estatespresswash.com/logo.png",
            description: `Professional pressure washing services in ${city.name}, ${city.county}. Residential and commercial exterior cleaning.`,
            telephone: "+1-267-917-6994",
            email: "epw@estatesfireplace.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "Place",
              name: city.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: city.name,
                addressRegion: "PA",
                addressCountry: "US",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `Estates Pressure Washing Services in ${city.name}`,
              itemListElement: city.services.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service,
                  description: `Professional ${service.toLowerCase()} in ${city.name}, ${city.county}`,
                },
              })),
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <OptimizedImage
          src="/hero_images/home_hero_1.jpg"
          alt={`Pressure washing services in ${city.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pressure Washing in {city.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional exterior cleaning services throughout {city.county}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-267-917-6994"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Call (267) 917-6994
            </a>
            <a
              href="/contact-us"
              className="border border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* About the City */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About {city.name}</h2>
          <p className="text-lg mb-4">{city.description}</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 text-blue-600" size={20} />
                <div>
                  <p className="font-medium">{city.name}, {city.county}</p>
                  <p className="text-sm opacity-75">
                    ZIP Codes: {city.zipCodes.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Notable Areas We Service</h3>
              <ul className="space-y-2">
                {city.landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 text-green-600" size={16} />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services for This City */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Services in {city.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"
                }`}
              >
                <CheckCircle className="text-green-600 mb-3" size={24} />
                <h3 className="font-semibold mb-2">{service}</h3>
                <p className="text-sm opacity-75">
                  Professional {service.toLowerCase()} tailored for {city.name} properties.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className={`p-8 rounded-lg text-center ${
          darkMode ? "bg-gray-800" : "bg-blue-50"
        }`}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Clean Your {city.name} Property?
          </h2>
          <p className="text-lg mb-6">
            Get a free estimate for professional pressure washing services in {city.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-267-917-6994"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={18} />
              (267) 917-6994
            </a>
            <a
              href="/contact-us"
              className={`border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                darkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900" : ""
              }`}
            >
              Contact Us Online
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
