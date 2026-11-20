import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { homepageAssets } from "./assets";

const featuredSpeakers = [
  {
    name: "Dr. Siti Yulidhar Harunasari, M.Pd.",
    role: "Opening Speech",
    detail: "Rector of Universitas LIA",
    initials: "SY",
    tone: "rose",
    assetKey: "openingSpeech",
  },
  {
    name: "Prof. Ilza Mayuni, M.A.",
    role: "Keynote Speaker",
    detail: "Chairperson, Universitas LIA",
    initials: "IM",
    tone: "teal",
    assetKey: "keynote",
  },
];

const invitedSpeakers = [
  {
    name: "Prof. Dayang Affizah",
    country: "UNIMAS, Malaysia",
    initials: "DA",
    tone: "sage",
    assetKey: "dayangAffizah",
  },
  {
    name: "Asst. Prof. Supaphorn Akkapin",
    country: "Thailand",
    initials: "SA",
    tone: "peach",
    assetKey: "supaphornAkkapin",
  },
  {
    name: "Prof. Dr. Rahmat Budiarto",
    country: "Saudi Arabia",
    initials: "RB",
    tone: "gold",
    assetKey: "rahmatBudiarto",
  },
];

function PortraitPlaceholder({ initials, tone, circular = false, src, alt }) {
  return (
    <div
      className={`portrait-placeholder portrait-${tone}${circular ? " circular" : ""}${src ? " has-photo" : ""}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `Temporary portrait placeholder for ${initials}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 310px, 290px" />
      ) : (
        <>
          <span>{initials}</span>
          <small>Photo placeholder</small>
        </>
      )}
    </div>
  );
}

export default function SpeakersSection() {
  return (
    <section className="speakers-section section-pad" id="speakers">
      <div className="content-width">
        <SectionHeading
          title="Who's Speaking"
          description="Meet the distinguished academic leaders and visionaries headlining IC2EST 2027."
        />
        <div className="featured-speakers">
          {featuredSpeakers.map((speaker) => (
            <article className="featured-card" key={speaker.name}>
              <PortraitPlaceholder
                initials={speaker.initials}
                tone={speaker.tone}
                src={homepageAssets.speakers[speaker.assetKey]}
                alt={`Portrait of ${speaker.name}`}
              />
              <div className="speaker-card-copy">
                <p className="speaker-role">{speaker.role}</p>
                <h3>{speaker.name}</h3>
                <p>{speaker.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="invited-heading">
          <SectionHeading
            title="Invited Speakers"
            description="Distinguished international experts sharing groundbreaking research and global insights at IC2EST 2027."
          />
        </div>
        <div className="invited-speakers">
          {invitedSpeakers.map((speaker) => (
            <article className="invited-card" key={speaker.name}>
              <PortraitPlaceholder
                initials={speaker.initials}
                tone={speaker.tone}
                circular
                src={homepageAssets.speakers[speaker.assetKey]}
                alt={`Portrait of ${speaker.name}`}
              />
              <h3>{speaker.name}</h3>
              <p>{speaker.country}</p>
            </article>
          ))}
        </div>
        <a className="button button-blue speaker-button" href="#speakers">
          Explore All Speakers
        </a>
      </div>
    </section>
  );
}
