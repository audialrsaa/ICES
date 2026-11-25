import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { homepageAssets } from "./assets";

const highlights = [
  "Multidisciplinary academic tracks covering EdTech, Economics, and Social Innovation.",
  "Keynotes from internationally acclaimed speakers and industry experts.",
  "Opportunities for publication in high-impact indexed proceedings.",
];

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-grid content-width">
        <div className="about-copy">
          <SectionHeading title="Welcome to IC2EST 2027" centered={false} />
          <p className="about-text">
            The International Conference on Education, Economics, Social
            Science, and Technology (IC2EST) is a premier international forum
            organized by Universitas LIA, Jakarta, Indonesia. Building upon the
            success of our inaugural event, the 2nd IC2EST 2027 serves as a
            dynamic multidisciplinary platform designed for academics,
            researchers, professionals, and students from around the globe. Our
            core objective is to provide an inclusive space to present
            cutting-edge research findings, share innovative ideas, and foster
            robust academic discussions regarding contemporary global issues
            across diverse fields of study.
          </p>
          <ul className="highlight-list">
            {highlights.map((item, index) => (
              <li key={item}>
                <span className="highlight-icon" aria-hidden="true">
                  {["◆", "◖", "▤"][index]}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link className="button button-blue" href="/about">
              Discover More About IC2EST &rarr;
            </Link>
          </div>
        </div>
        {homepageAssets.about ? (
          <Image
            className="about-image"
            src={homepageAssets.about}
            alt="IC2EST 2027 conference poster"
            width={520}
            height={740}
            sizes="(max-width: 640px) 100vw, 40vw"
            priority
          />
        ) : (
          <div className="poster-placeholder" role="img" aria-label="Temporary IC2EST 2027 event poster placeholder">
            <div className="poster-partners">UNIVERSITAS LIA　 GICI　 ACADEMIC PARTNERS</div>
            <p className="poster-call">CALL FOR PAPERS</p>
            <strong className="poster-title">IC2EST 2027</strong>
            <p className="poster-subtitle">
              The 2nd International Conference on Education, Economics, Social
              Science, and Technology
            </p>
            <div className="poster-band">
              Artificial Intelligence, Digital Transformation, and
              Interdisciplinary Collaboration
            </div>
            <div className="poster-columns">
              <div>
                <b>Scope of Topics</b>
                <span>Education and Pedagogy</span>
                <span>Economics and Business</span>
                <span>Social Sciences</span>
                <span>Technology and AI</span>
              </div>
              <div>
                <b>Date and Time</b>
                <span>January 27, 2027</span>
                <span>Hybrid</span>
                <span>Registration &amp; Payment</span>
              </div>
            </div>
            <div className="poster-dates">
              <b>Important Dates</b>
              <span>Paper submission　 •　 Registration　 •　 Conference</span>
            </div>
            <small>Temporary poster artwork — original poster asset not included</small>
          </div>
        )}
      </div>
    </section>
  );
}

