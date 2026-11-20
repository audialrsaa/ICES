"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageAssets } from "./assets";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Speaker", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Proceeding", href: "#registration" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Universitas LIA home">
          {homepageAssets.logo ? (
            <Image
              className="brand-image"
              src={homepageAssets.logo}
              alt="Universitas LIA"
              width={220}
              height={60}
              priority
            />
          ) : (
            <>
              <span className="brand-mark" aria-hidden="true">
                <span>LIA</span>
                <i />
              </span>
              <span className="brand-name">UNIVERSITAS LIA</span>
            </>
          )}
        </a>
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
          {navigation.map((item, index) => (
            <a
              className={index === 0 ? "active" : ""}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
