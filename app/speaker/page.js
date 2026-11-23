import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import { homepageAssets } from "../../components/home/assets";
import "./speaker.css";

export const metadata = {
  title: "Conference Speakers | IC2EST 2027",
  description:
    "Meet the distinguished academic leaders, keynote speakers, and international invited scholars headlining the 2nd IC2EST 2027.",
};

const keynoteSpeakers = [
  {
    name: "Dr. Siti Yulidhar Harunasari, M.Pd.",
    badge: "OPENING SPEECH",
    affiliation: "Rector of Universitas LIA",
    bio: "As the Rector of Universitas LIA, Dr. Siti Yulidhar Harunasari is dedicated to pioneering innovative academic curricula that integrate language mastery with technical proficiency, empowering the next generation of global multidisciplinary researchers.",
    image: homepageAssets.speakers.openingSpeech || "/image/yulidhar.png",
  },
  {
    name: "Prof. Ilza Mayuni, M.A.",
    badge: "KEYNOTE SPEAKER",
    affiliation: "Yayasan LIA | Topic: Transforming Multidisciplinary Research",
    bio: "Prof. Ilza Mayuni is an eminent professor in linguistics and education at Yayasan LIA. Her keynote will focus on breaking disciplinary boundaries, facilitating global research collaboration, and translating academic findings into highly impactful community developments.",
    image: homepageAssets.speakers.keynote || "/image/ilza.png",
  },
];

const invitedSpeakers = [
  {
    name: "Prof. Dayang Affizah",
    badge: "KEYNOTE SPEAKER",
    affiliation: "Universiti Malaysia Sarawak (UNIMAS)",
    bio: "Distinguished authority in applied economics, specializing in sustainable economic transformation, green policies, and socio-economic modeling across the ASEAN region.",
    topic:
      "Green Economy Integration: Transition Paths and Sustainable Policies for Developing Nations",
    image: homepageAssets.speakers.dayangAffizah || "/image/dayang.png",
    objectPosition: "center 20%",
  },
  {
    name: "Asst. Prof. Supaphorn Akkapin",
    badge: "INVITED SPEAKER",
    affiliation: "Thammasat University, Thailand",
    bio: "Prominent researcher in biochemical engineering, dedicating focus to next-generation biomass optimization, green catalysts, and scalable waste-to-energy frameworks.",
    topic:
      "Next-Gen Biomass Conversion: Scaling Sustainable Chemical and Energy Production Systems",
    image: homepageAssets.speakers.supaphornAkkapin || "/image/supaphorn.png",
    objectPosition: "center 20%",
  },
  {
    name: "Prof. Dr. Rahmat Budiarto",
    badge: "INVITED SPEAKER",
    affiliation: "Albukhary International University, Malaysia",
    bio: "Leading expert in network computing and intelligent systems, leading crucial initiatives in decentralized architectures, cybersecurity, and IoT integration frameworks.",
    topic:
      "Securing Smart Infrastructure: AI-Driven Decentralized IoT Security & Privacy Frameworks",
    image: homepageAssets.speakers.rahmatBudiarto || "/image/rahmat.png",
    objectPosition: "center 30%",
  },
];

export default function SpeakerPage() {
  return (
    <>
      <Navbar activePage="speaker" />

      <main>
        {/* Hero Banner with CSS Background */}
        <section className="speaker-hero-banner" id="top">
          <div className="content-width speaker-hero-content">
            <p className="speaker-hero-tag">IC2EST 2027</p>
            <h1 className="speaker-hero-title">Conference Speakers</h1>
            <p className="speaker-hero-subtitle">
              Meet Our Distinguished Scholars and International Keynote Speakers
            </p>
            <nav className="speaker-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-slash">/</span>
              <span>Speakers</span>
            </nav>
          </div>
        </section>

        {/* Intro Section: Meet Our Esteemed Speakers */}
        <section className="speaker-intro-section">
          <div className="content-width speaker-intro-box">
            <p className="speaker-eyebrow">DISTINGUISHED SPEAKERS</p>
            <h2 className="speaker-section-heading">Meet Our Esteemed Speakers</h2>
            <span className="gold-accent-bar centered" aria-hidden="true" />
            <p className="speaker-intro-text">
              IC2EST 2027 brings together distinguished scholars, academic leaders,
              and international experts from different disciplines to share their
              knowledge, research, and perspectives on contemporary global challenges.
            </p>
          </div>
        </section>

        {/* Section 1: Opening & Keynote Speakers */}
        <section className="speaker-keynote-section">
          <div className="content-width">
            <div className="speaker-section-header">
              <h2 className="speaker-section-heading">
                Opening &amp; Keynote Speakers
              </h2>
              <span className="gold-accent-bar centered" aria-hidden="true" />
              <p className="speaker-section-sub">
                Distinguished academic leaders who will officially open and lead
                the intellectual discussions at IC2EST 2027.
              </p>
            </div>

            <div className="keynote-cards-list">
              {keynoteSpeakers.map((speaker) => (
                <article className="keynote-card" key={speaker.name}>
                  <div className="keynote-photo-wrapper">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={300}
                      height={280}
                      className="keynote-photo-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="keynote-card-body">
                    <span className="speaker-badge-gold">{speaker.badge}</span>
                    <h3 className="keynote-card-name">{speaker.name}</h3>
                    <p className="keynote-card-affiliation">
                      {speaker.affiliation}
                    </p>
                    <p className="keynote-card-bio">{speaker.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: International Invited Speakers */}
        <section className="speaker-invited-section">
          <div className="content-width">
            <div className="speaker-section-header">
              <p className="speaker-eyebrow-blue">LEARN FROM WORLD-CLASS EXPERTS</p>
              <h2 className="speaker-section-heading">
                International Invited Speakers
              </h2>
              <p className="speaker-section-sub">
                Learn from internationally recognized academics delivering
                pioneering research updates across key engineering and technology
                disciplines.
              </p>
              <span className="gold-accent-bar centered" aria-hidden="true" />
            </div>

            <div className="invited-cards-grid">
              {invitedSpeakers.map((speaker) => (
                <article className="invited-card-item" key={speaker.name}>
                  <div className="invited-photo-wrapper">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={400}
                      height={290}
                      className="invited-photo-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: speaker.objectPosition || "center 25%",
                      }}
                    />
                  </div>
                  <div className="invited-card-body">
                    <span className="speaker-badge-gold">{speaker.badge}</span>
                    <h3 className="invited-card-name">{speaker.name}</h3>
                    <p className="invited-card-affiliation">
                      {speaker.affiliation}
                    </p>
                    <p className="invited-card-bio">{speaker.bio}</p>
                    <div className="invited-topic-box">
                      <p>{speaker.topic}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Call to Action Section */}
        <section className="speaker-cta-section">
          <div className="content-width">
            <div className="speaker-cta-banner">
              <h2 className="speaker-cta-heading">
                Want to Present Your Research Alongside Our Speakers?
              </h2>
              <p className="speaker-cta-text">
                Submit your abstract and join academics, researchers, and industry
                leaders from across the globe. Take the stage at IC2EST and
                publish your findings.
              </p>
              <Link className="speaker-cta-button" href="https://s.id/IC2EST2027">
                Register &amp; Submit Paper
              </Link>
            </div>
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
