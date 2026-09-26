'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState('General Website Enquiry');

  const openEnquiryModal = (title: string) => {
    setEnquiryTopic(title);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Sticky Top Navigation (Dark Background matching the logo) */}
      <nav className="navbar">
        <div className="logo-container">
          <Image src="/logo.jpeg" alt="Naimi Group Logo" width={45} height={45} className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#amenities">Working Areas</a>
          <a href="#location">Location</a>
        </div>
        <button className="cta-btn" onClick={() => openEnquiryModal('General Website Enquiry')}>Enquire Now</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="overview">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">Andheri West, Mumbai</span>
          <h1>Naimi Heights</h1>
          <p>Higher Floors Premium Balcony Residences & Sundeck Homes starting from ₹2.34 Cr + Taxes.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => openEnquiryModal('Schedule Site Visit')}>Schedule Site Visit</button>
            <button className="secondary-btn" onClick={() => openEnquiryModal('Download Brochure')}>Download Brochure</button>
          </div>
        </div>
      </header>

      {/* Detailed About / Verification Section (Client Provided Text) */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>We Don’t Just Market Homes—We Verify Them First.</h2>
            <p>
              Your peace of mind is our starting point. Before stepping in as the Official Marketing Partner for this luxury 2 & 3 BHK Andheri West development, Naimi Group’s independent verification team completed exhaustive due diligence across all approvals, RERA compliances, and builder track records.
            </p>
            <p>
              Backed by 9+ years of market leadership and hundreds of on-ground site visits in Andheri West over the last year, we only represent residences we would confidently recommend to our own family. Our specialists have already done the hard homework so you can invest with zero doubt and 100% security.
            </p>
            <p className="font-semibold text-gray-900">
              Enjoy priority inventory access, direct-from-developer pricing, and end-to-end documentation support—all backed by the assurance of a thoroughly verified property.
            </p>
          </div>
          <div className="about-image-card">
            <div className="image-overlay"></div>
            <span>29th Slab Work in Full Swing (Delivering Next Year)</span>
          </div>
        </div>
      </section>

      {/* Detailed Properties & Pricing Section */}
      <section className="config-section" id="properties">
        <h2>Crafted For The Highest Order of Living</h2>
        <p className="section-sub">Explore our exclusive residences. Click any card to open the enquiry form.</p>
        
        <div className="config-grid">
          <div className="config-card" onClick={() => openEnquiryModal('2 BHK Comfort (649 SQFT - ₹2.34 Cr)')}>
            <h3>2 BHK Comfort</h3>
            <p className="carpet">Carpet: 649 SQFT</p>
            <div className="price">₹2.34 Cr <span>+ Taxes</span></div>
            <button className="card-btn">Enquire for 2 BHK</button>
          </div>

          <div className="config-card featured" onClick={() => openEnquiryModal('2 BHK Grand (702 SQFT - ₹2.53 Cr)')}>
            <span className="popular-tag">Most Popular</span>
            <h3>2 BHK Grand</h3>
            <p className="carpet">Carpet: 702 SQFT</p>
            <div className="price">₹2.53 Cr <span>+ Taxes</span></div>
            <button className="card-btn">Enquire for 2 BHK</button>
          </div>

          <div className="config-card" onClick={() => openEnquiryModal('3 BHK Luxury Deck (1001 SQFT - ₹3.60 Cr)')}>
            <h3>3 BHK Luxury Deck</h3>
            <p className="carpet">Carpet: 1001 SQFT</p>
            <div className="price">₹3.60 Cr <span>+ Taxes</span></div>
            <button className="card-btn">Enquire for 3 BHK</button>
          </div>

          <div className="config-card" onClick={() => openEnquiryModal('Exclusive Duplex - ₹3.32 Cr+')}>
            <h3>Exclusive Duplex</h3>
            <p className="carpet">Sky-High Living</p>
            <div className="price">₹3.32 Cr+ <span>+ Taxes</span></div>
            <button className="card-btn">Enquire for Duplex</button>
          </div>
        </div>
      </section>

      {/* Working Areas & Transition Image Gallery Showcase */}
      <section className="amenities-section" id="amenities">
        <h2>Working Areas & Lifestyle Amenities</h2>
        <p className="section-sub">15+ lifestyle amenities designed for elevated living. Hover or tap to explore.</p>
        
        <div className="amenities-grid">
          <div className="amenity-card bg-gym" onClick={() => openEnquiryModal('Fitness Centre & Gym')}>
            <div className="amenity-overlay"></div>
            <span>Fitness Centre & Gym</span>
          </div>
          <div className="amenity-card bg-pool" onClick={() => openEnquiryModal('Swimming Pool & Deck')}>
            <div className="amenity-overlay"></div>
            <span>Swimming Pool & Deck</span>
          </div>
          <div className="amenity-card bg-hall" onClick={() => openEnquiryModal('Multipurpose Banquet Hall')}>
            <div className="amenity-overlay"></div>
            <span>Multipurpose Banquet Hall</span>
          </div>
          <div className="amenity-card bg-deck" onClick={() => openEnquiryModal('Sundeck & Sky Lounge')}>
            <div className="amenity-overlay"></div>
            <span>Sundeck & Sky Lounge</span>
          </div>
        </div>
      </section>

      {/* Location Connectivity Section */}
      <section className="location-section" id="location">
        <div className="location-content">
          <h2>At the Centre of Access. At the Height of Ease.</h2>
          <p>Seamless connectivity across Mumbai via 3 Metro lines, Link Road, and Western Express Highway.</p>
          
          <div className="location-grid">
            <div className="loc-item"><strong>Oshiwara Metro Station:</strong> 1 Min</div>
            <div className="loc-item"><strong>Kokilaben Hospital:</strong> 5 Min</div>
            <div className="loc-item"><strong>JBCN Intl. School:</strong> 2 Min</div>
            <div className="loc-item"><strong>Infinity Mall:</strong> 3 Min</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>NAIMI GROUP</h3>
            <p>Delivering exceptional real estate marketing, advisory, and premium luxury developments across Mumbai.</p>
            <p className="rera">Agent MahaRERA Reg. No.: A51900043176</p>
          </div>
          <div className="footer-col">
            <h4>Sales Office Location & Project Compliance</h4>
            <p className="rera text-gray-300">Project MahaRERA Reg. No.: P51800049875</p>
            <p>Naimi Heights, New Link Road, Near Oshiwara Metro Station, Andheri (W), Mumbai - 400053.</p>
            <a href="https://maps.app.goo.gl/khaqTxVNr6DVmeuD8" target="_blank" rel="noreferrer" className="map-link">View on Google Maps</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Naimi Group. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Interactive Enquiry Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" style={{ display: 'flex' }}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeEnquiryModal}>&times;</button>
            <h3>Unlock Exclusive Pricing</h3>
            <p id="modalSubtext">Enquiring about: <span className="font-semibold text-[#C5A059]">{enquiryTopic}</span></p>
            
            <form className="enquiry-form" onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted Successfully!'); closeEnquiryModal(); }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" required />
              </div>
              <button type="submit" className="submit-btn">Submit Enquiry</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}