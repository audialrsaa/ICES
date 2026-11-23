import Link from "next/link";
import Footer from "../../components/home/Footer";
import Icon from "../../components/home/Icon";
import Navbar from "../../components/home/Navbar";
import "./proceeding.css";

export const metadata = {
  title: "Conference Proceedings | IC2EST 2027",
  description:
    "Peer-Reviewed Research Publications of IC2EST. Explore publication standards, proceedings archive, and research areas.",
};

const standards = [
  "Peer-reviewed academic contributions",
  "Multidisciplinary research coverage",
  "Publication opportunities",
  "Academic knowledge exchange",
];

const researchAreas = [
  {
    no: 1,
    area: "Education",
    topics: [
      "Curriculum Design & Pedagogy",
      "E-learning & Digital Tools",
      "Educational Leadership",
      "Inclusive Learning Models",
    ],
    description:
      "Penelitian mengenai pengembangan pendidikan, metode pembelajaran, teknologi pendidikan, kepemimpinan, dan sistem pendidikan inklusif.",
  },
  {
    no: 2,
    area: "Economics",
    topics: [
      "Sustainable Development",
      "Macroeconomic Policies",
      "Digital Economy & Fintech",
      "Emerging Market Analysis",
    ],
    description:
      "Penelitian mengenai pembangunan ekonomi berkelanjutan, kebijakan ekonomi makro, transformasi ekonomi digital, fintech, dan analisis pasar berkembang.",
  },
  {
    no: 3,
    area: "Social Science",
    topics: [
      "Global Sociological Trends",
      "Public Policy & Governance",
      "Media & Communication",
      "Cultural Heritage Studies",
    ],
    description:
      "Penelitian mengenai dinamika sosial global, kebijakan publik, tata kelola pemerintahan, komunikasi, media, dan pelestarian warisan budaya.",
  },
  {
    no: 4,
    area: "Technology",
    topics: [
      "Artificial Intelligence",
      "Data Science & Big Data",
      "Cybersecurity & Networking",
      "IoT & Smart Cities",
    ],
    description:
      "Penelitian mengenai perkembangan teknologi, kecerdasan buatan, pengolahan data, keamanan jaringan, Internet of Things, dan kota pintar.",
  },
];

export default function ProceedingPage() {
  return (
    <>
      <Navbar activePage="proceeding" />

      <main>
        {/* Hero Banner */}
        <section className="proceeding-hero-banner" id="top">
          <div className="content-width proceeding-hero-content">
            <p className="proceeding-hero-tag">HOME &gt; PROCEEDING</p>
            <h1 className="proceeding-hero-title">Conference Proceedings</h1>
            <p className="proceeding-hero-subtitle">
              Peer-Reviewed Research Publications of IC2EST
            </p>
          </div>
        </section>

        {/* Section 1: Publication & Indexing Standards */}
        <section className="standards-section">
          <div className="content-width standards-grid">
            <div className="standards-left">
              <h2>Publication &amp; Indexing Standards</h2>
              <p>
                All accepted and registered papers for the International
                Conference on Innovations in Computer Science, Engineering and
                Technology (IC2EST) will be submitted for inclusion into leading
                academic proceedings and index databases. Our commitment to
                maintaining rigorous scientific standards ensures your research
                receives the visibility and academic recognition it deserves.
              </p>
              <p>
                Authors will have the opportunity to present their findings to a
                global audience of researchers, practitioners, and industry
                experts. The peer-review process is managed by an international
                technical program committee, adhering to the highest ethical and
                quality benchmarks in academic publishing.
              </p>
            </div>

            <div className="standards-card">
              <h3 className="standards-card-title">STANDARDS OVERVIEW</h3>
              <ul className="standards-list">
                {standards.map((item) => (
                  <li className="standards-list-item" key={item}>
                    <span className="standards-icon-box" aria-hidden="true">
                      <Icon name="layers" width={18} height={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Proceedings Archive */}
        <section className="archive-section">
          <div className="content-width">
            <div className="section-heading-centered">
              <h2>Proceedings Archive</h2>
              <div className="section-heading-accent" />
              <p>
                Access materials, historical metadata, and schedules from the
                flagship International Conference on Emerging Science,
                Technology, and Studies.
              </p>
            </div>

            <div className="archive-cards-grid">
              {/* Upcoming Edition Card */}
              <article className="archive-card">
                <span className="archive-badge-upcoming">UPCOMING EDITION</span>
                <h3 className="archive-card-title">The 2nd IC2EST 2027</h3>
                <p className="archive-card-volume">Vol. 2 (2027)</p>
                <p className="archive-card-desc">
                  Join leading researchers and global innovators for our next
                  annual milestone. Submit papers, browse accepted abstracts, and
                  access the comprehensive presentation schedules.
                </p>
                <div className="archive-meta-row">
                  <Icon name="calendar" width={16} height={16} />
                  <span>January 20–21, 2027</span>
                </div>
                <Link className="archive-btn-action" href="/schedule">
                  View Schedule
                </Link>
              </article>

              {/* Previous Edition Card */}
              <article className="archive-card">
                <span className="archive-badge-previous">PREVIOUS EDITION</span>
                <h3 className="archive-card-title">The 1st IC2EST</h3>
                <p className="archive-card-volume muted">Vol. 1 (2026)</p>
                <p className="archive-card-desc">
                  Our inaugural edition set the standard with high-impact
                  research. Digital volumes and peer-reviewed articles are
                  presently undergoing curation and indexing in top global
                  repositories.
                </p>
                <div className="archive-meta-row">
                  <Icon name="clock" width={16} height={16} />
                  <span>Published Proceedings Pending</span>
                </div>
                <span className="archive-btn-disabled">
                  Archive Coming Soon
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* Section 3: Research Areas & Proceedings */}
        <section className="research-areas-section">
          <div className="content-width">
            <div className="section-heading-centered">
              <h2>Research Areas &amp; Proceedings</h2>
              <div className="section-heading-accent" />
              <p>
                Seluruh paper atau karya ilmiah yang berhasil lolos proses seleksi
                akan diterbitkan dalam Official Conference Proceedings. Publikasi
                prosiding akan diindeks pada berbagai leading scientific
                databases.
              </p>
            </div>

            <div className="research-table-wrapper">
              <table className="research-table">
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>RESEARCH AREA</th>
                    <th>SUB-RESEARCH AREAS / TOPICS</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  {researchAreas.map((row) => (
                    <tr key={row.no}>
                      <td className="research-col-no">{row.no}</td>
                      <td className="research-col-area">{row.area}</td>
                      <td className="research-col-topics">
                        <ul className="research-topics-list">
                          {row.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="research-col-desc">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
