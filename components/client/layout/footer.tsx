import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Heart,
  ArrowUpRight,
  Mountain,
  Sparkles,
} from "lucide-react";

import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bhakti-footer">
      {/* Decorative background */}
      <div className="footer-decoration footer-decoration-one" />
      <div className="footer-decoration footer-decoration-two" />

      <div className="footer-container">
        {/* Organization information */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Mountain size={29} strokeWidth={1.7} />
            </span>

            <span className="footer-logo-text">
              <span className="footer-brand-name">Bhaktiyog Foundation</span>
              <span className="footer-brand-country">NEPAL</span>
            </span>
          </Link>

          <p className="footer-description">
            Promoting Sanatan Vedic Dharma and Bhakti Yoga, spreading spiritual
            awareness, and inspiring a peaceful world through devotion,
            knowledge, and selfless service.
          </p>

          <div className="footer-mission">
            <Sparkles size={18} />
            <span>Devotion. Wisdom. Universal Welfare.</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-link"
            >
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
            </a>
          </div>
        </div>

        {/* Quick navigation */}
        <div className="footer-column">
          <h3 className="footer-heading">Explore</h3>

          <ul className="footer-links">
            <li>
              <Link href="/">
                Home <ArrowUpRight size={14} />
              </Link>
            </li>

            <li>
              <Link href="/about-us">
                About Us <ArrowUpRight size={14} />
              </Link>
            </li>

            <li>
              <Link href="/services">
                Our Activities <ArrowUpRight size={14} />
              </Link>
            </li>

            <li>
              <Link href="/contact-us">
                Contact Us <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Work and mission */}
        <div className="footer-column footer-work">
          <h3 className="footer-heading">Our Mission</h3>

          <div className="footer-work-card">
            <span className="footer-work-icon">
              <Sparkles size={21} />
            </span>

            <div>
              <h4>Spiritual Guidance</h4>
              <p>
                Sharing the teachings of Sanatan Vedic Dharma and Bhakti Yoga.
              </p>
            </div>
          </div>

          <div className="footer-work-card">
            <span className="footer-work-icon">
              <Heart size={21} />
            </span>

            <div>
              <h4>Universal Welfare</h4>
              <p>
                Inspiring devotion, harmony, and compassion for the well-being
                of all.
              </p>
            </div>
          </div>

          <div className="footer-preacher">
            <span className="footer-status-dot" />
            <span>Preaching and serving since December 16, 2022</span>
          </div>
        </div>

        {/* Contact information */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Get in Touch</h3>

          <p className="footer-contact-intro">
            Connect with us for spiritual guidance and information about our
            activities.
          </p>

          <a href="tel:9844804563" className="footer-contact-item">
            <span className="footer-contact-icon">
              <Phone size={19} />
            </span>

            <span className="footer-contact-text">
              <span className="footer-contact-label">Phone</span>
              <span className="footer-contact-value">984-4804563</span>
            </span>
          </a>

          <a href="mailto:bhaktiyogf@gmail.com" className="footer-contact-item">
            <span className="footer-contact-icon">
              <Mail size={19} />
            </span>

            <span className="footer-contact-text">
              <span className="footer-contact-label">Email</span>
              <span className="footer-contact-value">bhaktiyogf@gmail.com</span>
            </span>
          </a>

          <a
            href="https://www.facebook.com/messages/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <MessageCircle size={19} />
            </span>

            <span className="footer-contact-text">
              <span className="footer-contact-label">Messenger</span>
              <span className="footer-contact-value">
                Bhaktiyog Foundation Nepal
              </span>
            </span>
          </a>

          <Link href="/contact-us" className="footer-contact-button">
            Contact Our Foundation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © {currentYear} Bhaktiyog Foundation Nepal. All rights reserved.
          </p>

          <p className="footer-blessing">
            Made with <Heart size={14} fill="currentColor" /> for spiritual
            harmony.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
