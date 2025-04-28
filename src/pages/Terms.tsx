
import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  darkMode: boolean;
}

export default function Terms() {
  const { darkMode } = useOutletContext<LayoutContext>();

  useEffect(() => {
    // Load Termageddon script
    const script = document.createElement('script');
    script.src = 'https://app.termageddon.com/js/termageddon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="pt-32"></div>
      <div className="container mx-auto px-6 py-12">
        <div id="policy" width="640" height="480" data-policy-key="UzJGSmRYWXZXR2xoV1VoT1FrRTlQUT09">
          Please wait while the policy is loaded. If it does not load, please <a rel="nofollow" href="https://app.termageddon.com/api/policy/UzJGSmRYWXZXR2xoV1VoT1FrRTlQUT09?" target="_blank" aria-label="View Policy">click here to view the policy</a>.
        </div>
      </div>
    </div>
  );
}
