import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const tracks = [
  {
    title: "Education",
    icon: "education",
    topics: [
      "Curriculum Design & Pedagogy",
      "Educational Technology & AI",
      "Higher Education Leadership",
      "Inclusive Education Models",
    ],
  },
  {
    title: "Economics",
    icon: "economy",
    topics: [
      "Global Trade & Policy",
      "Sustainable Development",
      "Financial Tech & Blockchain",
      "Circular Economy Models",
    ],
  },
  {
    title: "Social Science",
    icon: "society",
    topics: [
      "Societal Behaviors & Norms",
      "Public Policy & Law Reform",
      "Media & Digital Communication",
      "Cultural Heritage Studies",
    ],
  },
  {
    title: "Technology",
    icon: "technology",
    topics: [
      "Artificial Intelligence & ML",
      "Information Security & Trust",
      "Renewable Energy Systems",
      "Smart Cities & Infrastructure",
    ],
  },
];

export default function TracksSection() {
  return (
    <section className="tracks-section section-pad" id="tracks">
      <div className="content-width">
        <SectionHeading
          title="Conference Tracks"
          description="Explore the multidisciplinary research areas of IC2EST 2027."
        />
        <div className="track-grid">
          {tracks.map((track) => (
            <article className="track-card" key={track.title}>
              <span className="track-icon">
                <Icon name={track.icon} />
              </span>
              <h3>{track.title}</h3>
              <ul>
                {track.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
