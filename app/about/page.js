import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/home/Footer";
import Icon from "../../components/home/Icon";
import Navbar from "../../components/home/Navbar";
import { homepageAssets } from "../../components/home/assets";
import "./about.css";

export const metadata = {
  title: "About IC2EST 2027 | Universitas LIA",
  description:
    "Discover the vision, mission, leadership, and multidisciplinary fields of study for the 2nd IC2EST 2027 organized by Universitas LIA.",
};

const tracks = [
  {
    title: "Education",
    icon: "education",
    topics: [
      "Curriculum & Pedagogy",
      "Digital Learning Innovation",
      "Educational Management",
    ],
  },
  {
    title: "Economics",
    icon: "economy",
    topics: [
      "Digital Economy & Business",
      "Financial Management",
      "Accounting & Auditing",
      "Entrepreneurship",
    ],
  },
  {
    title: "Social Science",
    icon: "society",
    topics: [
      "Communication & Media",
      "Law",
      "Society & Culture",
      "Public Policy",
      "Language & Linguistics",
    ],
  },
  {
    title: "Technology",
    icon: "technology",
    topics: [
      "Information Systems",
      "Software Engineering",
      "Applied Technology",
      "Data Science & AI",
    ],
  },
];

const leaders = [
  {
    name: "Dr. Siti Yulidhar Harunasari, M.Pd.",
    badge: "PATRON / OPENING SPEAKER",
    role: "Rector of Universitas LIA",
    image: homepageAssets.speakers.openingSpeech || "/image/yulidhar.png",
  },
  {
    name: "Prof. Ilza Mayuni, M.A.",
    badge: "KEYNOTE SPEAKER",
    role: "Chairperson of the Board of Management, Yayasan LIA",
    image: homepageAssets.speakers.keynote || "/image/ilza.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />

      <main>
        {/* Hero Banner / Breadcrumb */}
        <section className="about-hero-banner" id="top">
          <div className="content-width">
            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">HOME</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">ABOUT</span>
            </nav>
            <h1 className="about-hero-title">About IC2EST 2027</h1>
            <p className="about-hero-subtitle">
              Discover Our Vision, Mission, and Organizing Institution
            </p>
          </div>
        </section>

        {/* Section 1: Welcome to IC2EST 2027 */}
        <section className="about-welcome-section">
          <div className="content-width about-welcome-grid">
            <div className="about-welcome-copy">
              <h2 className="about-section-heading">Welcome to IC2EST 2027</h2>
              <span className="gold-accent-bar" aria-hidden="true" />
              <p className="about-body-text">
                The International Conference on Education, Economics, Social
                Science, and Technology (IC2EST) is a premier international
                forum organized by Universitas LIA, Jakarta, Indonesia. Building
                upon the success of our inaugural event, the 2nd IC2EST 2027
                serves as a dynamic multidisciplinary platform designed for
                academics, researchers, professionals, and students from around
                the globe. Our core objective is to provide an inclusive space
                to present cutting-edge research findings, share innovative
                ideas, and foster robust academic discussions regarding
                contemporary global issues across diverse fields of study.
              </p>
            </div>
            <div className="about-welcome-poster">
              <div className="poster-frame">
                <Image
                  src={homepageAssets.about || "/image/about.jpeg"}
                  alt="IC2EST 2027 Conference Poster"
                  width={480}
                  height={680}
                  className="poster-img"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Organized by Universitas LIA */}
        <section className="about-organizer-section">
          <div className="content-width about-organizer-grid">
            <div className="about-organizer-logo-box">
              <Image
                src={homepageAssets.partners.universitasLia || "/image/logo-lia.png"}
                alt="Universitas LIA"
                width={340}
                height={130}
                className="organizer-logo-img"
              />
            </div>
            <div className="about-organizer-copy">
              <h2 className="about-section-heading">Organized by Universitas LIA</h2>
              <span className="gold-accent-bar" aria-hidden="true" />
              <p className="about-body-text">
                Universitas LIA is a reputable higher education institution
                based in Jakarta, committed to excellence in education,
                technological innovation, and societal development. With strong
                academic foundations and a forward-looking vision, Universitas
                LIA actively bridges theoretical knowledge with practical
                industry applications, fostering international partnerships and
                scholarly contributions across Southeast Asia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Multidisciplinary Fields of Study */}
        <section className="about-tracks-section">
          <div className="content-width">
            <div className="about-section-header-center">
              <h2 className="about-section-heading">
                Multidisciplinary Fields of Study
              </h2>
              <span className="gold-accent-bar centered" aria-hidden="true" />
              <p className="about-section-sub">
                The conference covers four major tracks, aligning with modern
                industrial and academic demands.
              </p>
            </div>

            <div className="about-tracks-grid">
              {tracks.map((track) => (
                <article className="about-track-card" key={track.title}>
                  <div className="about-track-icon-wrapper">
                    <Icon name={track.icon} className="track-svg" />
                  </div>
                  <h3 className="about-track-name">{track.title}</h3>
                  <span className="track-mini-line" aria-hidden="true" />
                  <ul className="about-track-topics">
                    {track.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Leadership & Key Figures */}
        <section className="about-leadership-section">
          <div className="content-width">
            <div className="about-section-header-center">
              <h2 className="about-section-heading">Leadership &amp; Key Figures</h2>
              <span className="gold-accent-bar centered" aria-hidden="true" />
              <p className="about-section-sub">
                IC2EST 2027 is supported by distinguished academic leaders and a
                multidisciplinary scientific and organizing committee.
              </p>
            </div>

            <div className="leadership-cards-wrapper">
              {leaders.map((leader) => (
                <article className="about-leader-card" key={leader.name}>
                  <div className="leader-photo-box">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={360}
                      height={280}
                      className="leader-photo-img"
                    />
                  </div>
                  <div className="leader-card-body">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-badge">{leader.badge}</p>
                    <p className="leader-role">{leader.role}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Scientific & Organizing Committee Banner */}
            <div className="scientific-committee-banner">
              <h3 className="committee-title">
                Scientific &amp; Organizing Committee
              </h3>
              <p className="committee-text">
                Distinguished professors, researchers, and faculty members from
                Universitas LIA and international partner universities.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Be Part of IC2EST 2027 */}
        <section className="about-cta-section">
          <div className="content-width">
            <h2 className="about-cta-title">Be Part of IC2EST 2027</h2>
            <p className="about-cta-sub">
              Join academics, researchers, professionals, and students from
              around the world to exchange knowledge, present innovative
              research, and build meaningful academic collaborations.
            </p>
            <Link className="about-cta-button" href="https://s.id/IC2EST2027">
              Register Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <span aria-hidden="true">⌃</span>
      </a>
    </>
  );
}
