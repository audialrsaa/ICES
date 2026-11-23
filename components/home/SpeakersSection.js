import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { homepageAssets } from "./assets";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const FEATURED_SPEAKERS = [
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

const INVITED_SPEAKERS = [
  {
    name: "Dr. Intan Mutia, S.T., M.M.S.I",
    affiliation: "Universitas Indraprasta PGRI (Unindra)",
    src: "/image/Intan Mutia_1.png",
    initials: "IM",
  },
  {
    name: "Dr. Risna Saswati, M.Hum.",
    affiliation: "Universitas LIA",
    src: "/image/plc.jpg",
    initials: "RS",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

// Diperbarui: Menggunakan aspectRatio (4/5) agar ukuran foto proporsional dan konsisten
function PortraitPlaceholder({ initials, tone, src, alt }) {
  return (
    <div
      className={`portrait-placeholder portrait-${tone} ${src ? "has-photo" : ""}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `Temporary portrait placeholder for ${initials}`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/5",
        overflow: "hidden",
        borderRadius: "8px", // Ujung membulat
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
      ) : (
        <div style={{ textAlign: "center", color: "#64748b" }}>
          <span style={{ fontSize: "2.5rem", fontWeight: "bold", display: "block" }}>{initials}</span>
          <small style={{ fontSize: "0.875rem" }}>Photo placeholder</small>
        </div>
      )}
    </div>
  );
}

function InvitedPortrait({ speaker }) {
  return (
    <div 
      className="invited-speaker-photo"
      style={{ width: "100%", marginBottom: "20px" }}
    >
      {speaker.src ? (
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden", borderRadius: "8px" }}>
          <Image
            src={speaker.src}
            alt={`Portrait of ${speaker.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      ) : (
        <div
          className="invited-speaker-fallback"
          aria-label={`Placeholder portrait for ${speaker.name}`}
          style={{
            width: "100%",
            aspectRatio: "4/5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e2e8f0",
            borderRadius: "8px",
            color: "#64748b",
            fontSize: "2rem",
            fontWeight: "bold"
          }}
        >
          <span>{speaker.initials}</span>
        </div>
      )}
    </div>
  );
}

// Desain Card Featured Speaker disamakan dengan Invited Speaker
function FeaturedCard({ speaker }) {
  return (
    <article 
      className="featured-card" 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        textAlign: "center",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <PortraitPlaceholder
        initials={speaker.initials}
        tone={speaker.tone}
        src={homepageAssets.speakers[speaker.assetKey]}
        alt={`Portrait of ${speaker.name}`}
      />
      <div className="speaker-card-copy" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <p className="speaker-role" style={{ fontSize: "0.875rem", fontWeight: "600", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
          {speaker.role}
        </p>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px", lineHeight: "1.4" }}>
          {speaker.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>
          {speaker.detail}
        </p>
      </div>
    </article>
  );
}

function InvitedCard({ speaker }) {
  return (
    <article 
      className="invited-card" 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        height: "100%",
        textAlign: "center",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <InvitedPortrait speaker={speaker} />
      
      <div className="invited-speaker-info" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px", lineHeight: "1.4" }}>
          {speaker.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>
          {speaker.affiliation}
        </p>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function SpeakersSection() {
  return (
    <section className="speakers-section section-pad" id="speakers">
      <div className="content-width">
        
        {/* Bagian 1: Who's Speaking */}
        <SectionHeading
          title="Who's Speaking"
          description="Meet the distinguished academic leaders and visionaries headlining IC2EST 2027."
        />

        {/* PERBAIKAN: Grid Layout untuk Featured Speakers dibuat seragam dengan Invited */}
        <div 
          className="featured-speakers" 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "24px", 
            maxWidth: "800px", 
            margin: "0 auto 60px auto" // marginBottom 60px untuk jarak antar section
          }}
        >
          {FEATURED_SPEAKERS.map((speaker) => (
            <FeaturedCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

        {/* Bagian 2: Invited Speakers */}
        <div className="invited-heading">
          <SectionHeading
            title="Invited Speakers"
            description="Learn from distinguished academics sharing their knowledge and insights at IC2EST 2027."
          />
        </div>

        <div 
          className="invited-speakers" 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "24px", 
            maxWidth: "800px", 
            margin: "0 auto" 
          }}
        >
          {INVITED_SPEAKERS.map((speaker) => (
            <InvitedCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

        {/* Bagian 3: Tombol Explore */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginTop: "48px", 
            width: "100%" 
          }}
        >
          <Link 
            className="button button-blue speaker-button" 
            href="/speaker"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 32px",
              fontSize: "1rem",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)",
              transition: "all 0.2s ease",
            }}
          >
            Explore All Conference Speakers &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}