
import React from "react";
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Accessibility() {
  const { darkMode } = useOutletContext<LayoutContext>();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="pt-32"></div>
      <div className="container mx-auto px-6 py-12">
        <article className={`prose ${darkMode ? "prose-invert" : ""} max-w-4xl mx-auto`}>
          <h1>Declaration of Accessibility Introduction</h1>
          <p>The Internet constitutes the largest resource supporting freedom of information today for the user community in general and for users with disabilities in particular. For that reason we place emphasis on:</p>
          <ul>
            <li>Granting equal service to people with disabilities who use information displayed on the website</li>
            <li>Improving their browsing experience</li>
            <li>Ensuring our digital services will be accessible to people with disabilities</li>
            <li>Continuously improving our web pages as needed</li>
          </ul>
          
          <h2>Using the EqualWeb website accessibility tool</h2>
          <p>This website employs the Nagich By Click accessibility software and is connected through a special accessibility server. The software complies with Israeli standard SI 5568 at AA level. The software is subject to the manufacturer's Terms of Use. The website owners and/or agents bear the responsibility for the usage and implementation on the website, including the content displayed on the website under the Terms of Use of the Software.</p>
          
          <h2>How does the site's accessibility work?</h2>
          <ul>
            <li>The website features an accessibility menu</li>
            <li>A click on the menu makes accessibility buttons available</li>
            <li>After selecting a menu item, the user should wait for the page to be loaded</li>
          </ul>
          
          <h2>What are the mean items?</h2>
          <ul>
            <li>Option for keyboard-based navigation</li>
            <li>Adaptation of the website for NVDA assistive technology</li>
            <li>Enlargement of the font on the website to 4 levels of magnification</li>
            <li>Immobilization of moving elements, and stoppage of blinking</li>
            <li>Altered color contrast against dark background</li>
            <li>Altered color contrast against light background</li>
            <li>Adaptation for color-blind users</li>
            <li>Change of font for better readability</li>
            <li>Enlarged cursor, and change of color to black or white</li>
            <li>Enlargement of display to ~200%</li>
            <li>Emphasizing links on the website</li>
            <li>Emphasizing headings on the website</li>
            <li>Presentation of alt text to graphics</li>
            <li>Declaration of accessibility</li>
            <li>Sending of accessibility feedback</li>
          </ul>
          
          <h2>Clarification</h2>
          <p>Despite our efforts to apply accessibility to browsing on every webpage, it may be discovered that some of webpages have not yet received accessibility or are not suitable for any available accessibility solution.</p>
          <p>We are continuing the effort to improve the website's accessibility to the full extent possible, guided by our belief, and by our moral commitment, that the website should be usable by the entire population, including people with disabilities.</p>
          
          <h2>Measures to support accessibility</h2>
          <ul>
            <li>Include accessibility as a requirement for all web content</li>
            <li>Content must meet WCAG 2.1 AA, and should meet AAA as feasible</li>
            <li>Assign clear accessibility goals and responsibilities</li>
            <li>Ensure content authors have access to accessibility knowledge and skills</li>
            <li>Include accessibility as part of our technology mission</li>
            <li>Include accessibility throughout our website-related internal policies</li>
          </ul>
          
          <h2>Conformance status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance:</p>
          <ul>
            <li>Level A</li>
            <li>Level AA</li>
            <li>Level AAA</li>
          </ul>
          <p>"Fully conforms" means that the content meets all of the WCAG requirements at the specified Level without exceptions. We strive to be/remain fully compliant with an annual review of our website.</p>
          
          <h2>Feedback</h2>
          <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers.</p>
          
          <h2>Compatibility with browsers and assistive technology</h2>
          <ul>
            <li>Our website is designed to be compatible with assistive technologies and the last two versions of major browsers</li>
            <li>In Internet Explorer 10, 11, and older browsers, some aspects of the website may not display optimally</li>
            <li>The website is not designed for Internet Explorer 9 and earlier versions</li>
          </ul>
          
          <h2>Technical specifications</h2>
          <p>Our website relies upon the following technologies for conformance with WCAG 2.1:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SVG</li>
          </ul>
          <p>The following technologies are used to improve accessibility and the user experience for everyone:</p>
          <ul>
            <li>JavaScript</li>
          </ul>
          
          <h2>Limitations and alternatives</h2>
          <p>Several videos on our website use YouTube. As an alternative, the videos are provided as MP4 files on our server.</p>
          
          <h2>Assessment approach</h2>
          <ul>
            <li>We assess the accessibility of our website by self-evaluation</li>
            <li>We conduct annual reviews to maintain compliance</li>
          </ul>
          
          <h2>Formal approval of this accessibility statement</h2>
          <p>This Accessibility Statement is approved by Chris Tierney, Website Wannabe Technology Support.</p>
        </article>
      </div>
    </div>
  );
}
