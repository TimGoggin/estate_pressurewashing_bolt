import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './components/Layout'
import Accessibility from './pages/Accessibility'; // Added import for Accessibility page
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/accessibility-statement" element={<Accessibility />} /> {/* Added route for Accessibility page */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)