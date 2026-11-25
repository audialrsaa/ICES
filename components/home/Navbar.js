"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { homepageAssets } from "./assets";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speaker", href: "/speaker" },
  { label: "Schedule", href: "/schedule" },
  { label: "Proceeding", href: "/proceeding" },
];

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (item) => {
    if (activePage) {
      return item.label.toLowerCase() === activePage.toLowerCase();
    }
    if (pathname?.startsWith("/about") && item.label === "About") return true;
    if (pathname?.startsWith("/speaker") && item.label === "Speaker") return true;
    if (pathname?.startsWith("/schedule") && item.label === "Schedule") return true;
    if (pathname?.startsWith("/proceeding") && item.label === "Proceeding") return true;
    if ((pathname === "/" || pathname === "" || !pathname) && item.label === "Home") return true;
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="top">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Universitas LIA home">
          <Image
            className="brand-image"
            src={scrolled ? (homepageAssets.logo || "/image/logo-lia.png") : (homepageAssets.logoWhite || "/image/logo-lia-white.png")}
            alt="Universitas LIA"
            width={220}
            height={60}
            priority
          />
        </Link>
        
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              className={`nav-link${isItemActive(item) ? " active" : ""}`}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}