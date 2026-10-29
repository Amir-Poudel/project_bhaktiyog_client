"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

const navItems = [
  { label: "गृहपृष्ठ", href: "#home" },
  { label: "हाम्रो परिचय", href: "#about" },
  { label: "उद्देश्य", href: "#mission" },
  { label: "कार्यक्रम", href: "#programs" },
  { label: "ग्यालरी", href: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label="मुख्य नेभिगेसन">
        <div className="container">
          <Link
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label="भक्तियोग फाउन्डेसन नेपालको गृहपृष्ठ"
          >
            <span className="logo" aria-hidden="true">
              ॐ
            </span>

            <span className="brandText">
              <span className="brandName">
                भक्तियोग फाउन्डेसन नेपाल
              </span>
              <span className="brandTagline">
                भक्ति • ज्ञान • सेवा • संस्कार
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="menuToggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "मेनु बन्द गर्नुहोस्" : "मेनु खोल्नुहोस्"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span className="menuIcon">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

          <div
            id="main-navigation"
            className={`navContent ${
              menuOpen ? "navContentOpen" : ""
            }`}
          >
            <ul className="navLinks">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="navLink"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="contactButton"
              onClick={closeMenu}
            >
              सम्पर्क गर्नुहोस् →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}