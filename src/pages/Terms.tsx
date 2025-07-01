import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface LayoutContext {
  darkMode: boolean;
}

export default function Terms() {
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
        <link rel="canonical" href="https://www.estatespresswash.com/terms" />
        <title>Terms of Service | Estates Pressure Washing</title>
        <meta
          name="description"
          content="Read the Terms of Service for Estates Pressure Washing. Our comprehensive terms outline service agreements, liability, payment terms, and customer responsibilities for all pressure washing services."
        />
        <meta
          name="keywords"
          content="terms of service, service agreement, liability terms, payment terms, Estates Pressure Washing, Bucks County, Montgomery County, Philadelphia"
        />
      </Helmet>

      <div className="pt-32"></div>
      <h1>Terms of Service</h1>
      <div className="container mx-auto px-6 py-12">
        <div
          id="policy"
          style={{ border: "none", width: "640px", height: "480px" }}
          data-policy-key="YkVwSFprMXJNbkJqT1dkR1QyYzlQUT09"
        >
          Please wait while the terms are loaded. If they do not load, please{" "}
          <a
            rel="nofollow"
            href="https://app.termageddon.com/api/policy/YkVwSFprMXJNbkJqT1dkR1QyYzlQUT09?"
            target="_blank"
            aria-label="View Terms"
          >
            click here to view the terms
          </a>
          .
        </div>
      </div>
    </div>
  );
}