
import { useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Contact() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link rel="canonical" href="https://www.estatespresswash.com/contact-us" />
        <title>Contact Estates Pressure Washing | Get a Free Quote Today</title>
        <meta
          name="description"
          content="Get in touch with Estates Pressure Washing for professional residential, commercial, and specialty cleaning services across Bucks, Montgomery, and Philadelphia Counties. Call 1-267-685-0530 or fill out our contact form today!"
        />
        <meta
          name="keywords"
          content="contact Estates Pressure Washing, free quote, pressure washing estimate, exterior cleaning contact, residential cleaning contact, commercial cleaning contact, Bucks County, Montgomery County, Philadelphia"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/contact-us",
            image: "https://www.estatespresswash.com/AboutHero.jpeg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "Contact Estates Pressure Washing for expert residential, commercial, and specialty exterior cleaning services across Bucks, Montgomery, and Philadelphia Counties.",
            telephone: "+1-267-685-0530",
            email: "epw@estatesfireplace.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
                opens: "09:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Thursday",
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "15:00",
              },
            ],
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
          })}
        </script>
      </Helmet>

      <div className="relative pt-32 pb-20 ">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            We're here to help with all your exterior cleaning needs
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm darkMode={darkMode} />

            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        267-917-6994
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        epw@estatesfireplace.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        Bucks County, Montgomery County, and Philadelphia County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-600"}
                      >
                        Monday, Tuesday, Wednesday, Friday : 9am-4pm
                        <br />
                        Thursday: 9am-7pm
                        <br />
                        Saturday: 9am-3pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
