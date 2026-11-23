import Image from "next/image";
import { homepageAssets } from "./assets";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {homepageAssets.heroBackground ? (
        <>
          <Image
            className="hero-photo"
            src={homepageAssets.heroBackground}
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-photo-overlay" aria-hidden="true" />
        </>
      ) : (
        <div className="hero-placeholder" aria-hidden="true">
          <span className="placeholder-label">Conference photo placeholder</span>
        </div>
      )}
      <div className="hero-content">
        <p className="eyebrow">Call for papers &amp; participation</p>
        <h1 id="hero-title">
          International Conference on Education, Economics, Social Science, and
          Technology (IC2EST) 2027
        </h1>
        <p className="hero-description">
          The 2nd International Conference on Education, Economics, Social
          Science, and Technology | Organized by Universitas LIA, Jakarta,
          Indonesia
        </p>
        <span className="section-rule hero-rule" aria-hidden="true" />
        <p className="hero-date">
          January 20–21, 2027 <span>|</span> Hotel Bidakara Jakarta{" "}
          <span>|</span> Jakarta, Indonesia
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="https://s.id/IC2EST2027">
            Register &amp; Submit Paper
          </a>
          <a className="button button-outline" href="#about">
            Explore Conference
          </a>
        </div>
      </div>
    </section>
  );
}
