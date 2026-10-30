"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import "./navbar.css";

const navItems = [
  { label: "गृहपृष्ठ", href: "/" },
  { label: "हाम्रो परिचय", href: "/about-us" },
  { label: "उद्देश्य", href: "/mission" },
  { label: "कार्यक्रम", href: "/programs" },
  { label: "ग्यालरी", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const updateActiveSection = () => {
      frame = 0;
      const header = document.querySelector<HTMLElement>(".header");
      const marker = (header?.getBoundingClientRect().bottom ?? 0) + 1;
      const section = ["home", "mission"].find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        const bounds = element.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });

      setActiveSection(section ?? null);
    };

    const handleViewportChange = () => {
      handleScroll();
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    handleViewportChange();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("popstate", handleViewportChange);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("popstate", handleViewportChange);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSectionNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(sectionId);
    const header = document.querySelector<HTMLElement>(".header");
    const container = header?.querySelector<HTMLElement>(".container");

    if (!target || !header || !container) return;

    event.preventDefault();
    closeMenu();

    const hash = `#${sectionId}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }

    let top = 0;
    if (sectionId !== "home") {
      header.classList.add("scrolled");
      const collapsedHeaderHeight = Number.parseFloat(
        window.getComputedStyle(container).minHeight,
      );
      top =
        window.scrollY +
        target.getBoundingClientRect().top -
        collapsedHeaderHeight;
    }

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "instant"
      : "smooth";

    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  const handleContactNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const footer = document.getElementById("contact");
    const header = document.querySelector<HTMLElement>(".header");

    if (!footer || !header) return;

    event.preventDefault();
    closeMenu();
    header.classList.add("scrolled");
    setIsScrolled(true);

    const targetTop =
      window.scrollY +
      footer.getBoundingClientRect().top -
      header.getBoundingClientRect().height;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const top = Math.min(Math.max(0, targetTop), maxScroll);

    if (window.location.hash !== "#contact") {
      window.history.pushState(null, "", "#contact");
    }

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "instant"
      : "smooth";

    window.scrollTo({ top, behavior });
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label="मुख्य नेभिगेसन">
        <div className="container">
          <Link
            href="#home"
            className="brand"
            onClick={(event) => handleSectionNavigation(event, "home")}
            aria-label="भक्तियोग फाउन्डेसन नेपालको गृहपृष्ठ"
          >
            <span className="logo" aria-hidden="true">
              ॐ
            </span>

            <span className="brandText">
              <span className="brandName">भक्तियोग फाउन्डेसन नेपाल</span>
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
            <span className="menuIcon">{menuOpen ? "✕" : "☰"}</span>
          </button>

          <div
            id="main-navigation"
            className={`navContent ${menuOpen ? "navContentOpen" : ""}`}
          >
            <ul className="navLinks">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`navLink ${
                      activeSection === item.href.slice(1) ? "isActive" : ""
                    }`}
                    aria-current={
                      activeSection === item.href.slice(1) ? "location" : undefined
                    }
                    onClick={(event) => {
                      if (item.href === "#home" || item.href === "#mission") {
                        handleSectionNavigation(event, item.href.slice(1));
                      } else {
                        closeMenu();
                      }
                    }}
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
