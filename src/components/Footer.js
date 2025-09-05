import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Banner.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <div className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Have any questions or want to work with us? Fill out the form below!
      </p>
    
      <div className="contact-container">
        {/* Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4785431368455!2d80.2707183153343!3d13.082680490765053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265dd6d39dbe3%3A0x6b1f2ec5c92dbd0!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1679477760010!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
    
        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            rows="5"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-about">
          <h3 className="footer-title">VIZAG MALL</h3>
         <p className="footer-text">
        123 Main Street, Visakhapatnam, India <br />
        Phone: +91 98765 43210 <br />
        Email: info@mywebsite.com
      </p>
        </div>
         <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
    
        {/* Middle - Links */}
        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li><Link to ="/dining/restaurant1">Men’s wear</Link></li>
           <li><Link  to="/dining/restaurant2">Women’s wear</Link></li>
           <li><Link to="/dining/restaurant3">Kidswear</Link></li>
           <li><Link to="/dining/restaurant4">Sports wear</Link></li>
           <li><Link to ="/dining/restaurant5">Kidswear</Link></li>
           <li><Link to ="/dining/restaurant6">Traditional wear</Link></li>
    
          </ul>
        </div>
    
        {/* Right Side - Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
      <a href="0"><FaFacebook size={28} /></a>
      <a href="0"><FaTwitter size={28} /></a>
      <a href="0"><FaInstagram size={28} /></a>
      <a href="0"><FaLinkedin size={28} /></a>
    </div>
        </div>
      </div>
    
      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </div>
    </div>
    
    
  )
}

export default Footer