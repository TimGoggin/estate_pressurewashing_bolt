import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface LayoutContext {
  darkMode: boolean;
}

export default function Privacy() {
  const { darkMode } = useOutletContext<LayoutContext>();

  useEffect(() => {
    // Load Termageddon script
    const script = document.createElement("script");
    script.src = "https://app.termageddon.com/js/termageddon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <Helmet>
        <link rel="canonical" href="https://www.estatespresswash.com/privacy" />
        <title>Privacy Policy | Estates Pressure Washing</title>
        <meta
          name="description"
          content="Our comprehensive privacy policy details how Estates Pressure Washing collects, processes, and protects your personal information. We prioritize data security, transparent communication practices, and compliance with privacy regulations to ensure your information remains safe and confidential."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, user privacy, Estates Pressure Washing, Bucks County, Montgomery County, Philadelphia"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estates Pressure Washing",
            url: "https://www.estatespresswash.com/privacy",
            image: "https://www.estatespresswash.com/AboutHero.jpeg",
            logo: "https://www.estatespresswash.com/logo.png",
            description:
              "Learn how Estates Pressure Washing handles your personal data and ensures your privacy when you interact with our website or services.",
            telephone: "+1-267-685-0530",
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

      <div className="pt-32"></div>
      <h1>Privacy Policy</h1>
      <div className="container mx-auto px-6 py-12">
        <div
          id="policy"
          width="640"
          height="480"
          data-policy-key="YkVwSFprMXJNbkJqT1dkR1QyYzlQUT09"
        >
          Please wait while the policy is loaded. If it does not load, please{" "}
          <a
            rel="nofollow"
            href="https://app.termageddon.com/api/policy/YkVwSFprMXJNbkJqT1dkR1QyYzlQUT09?"
            target="_blank"
            aria-label="View Policy"
          >
            click here to view the policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
