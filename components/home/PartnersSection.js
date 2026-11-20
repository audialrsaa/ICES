import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { homepageAssets } from "./assets";

const partners = [
  { name: "UNIVERSITAS LIA", style: "partner-lia", assetKey: "universitasLia" },
  { name: "GICI", style: "partner-gici", assetKey: "gici" },
  {
    name: "Partner institution",
    style: "partner-seal",
    placeholder: true,
    assetKey: "partnerSealOne",
  },
  {
    name: "Partner institution",
    style: "partner-seal partner-seal-blue",
    placeholder: true,
    assetKey: "partnerSealTwo",
  },
  { name: "STMIK AL MUSLIM", style: "partner-stmik", assetKey: "stmikAlMuslim" },
  { name: "Sinta", style: "partner-sinta", assetKey: "sinta" },
  { name: "Scopus", style: "partner-scopus", assetKey: "scopus" },
  { name: "Google Scholar", style: "partner-google", assetKey: "googleScholar" },
];

export default function PartnersSection() {
  return (
    <section className="partners-section section-pad">
      <div className="content-width">
        <SectionHeading
          eyebrow="Academic Collaborations & Indexing"
          title="Organized With & Academic Partners"
        />
        <div className="partner-grid">
          {partners.map((partner) => (
            <div
              className={`partner-logo ${partner.style}`}
              key={partner.assetKey}
              role="img"
              aria-label={partner.placeholder ? "Temporary partner logo placeholder" : `${partner.name} logo`}
            >
              {homepageAssets.partners[partner.assetKey] ? (
                <Image
                  className="partner-logo-image"
                  src={homepageAssets.partners[partner.assetKey]}
                  alt=""
                  width={160}
                  height={54}
                  sizes="(max-width: 640px) 40vw, 160px"
                />
              ) : partner.placeholder ? (
                <span className="partner-seal-mark" aria-hidden="true">✦</span>
              ) : (
                partner.name
              )}
            </div>
          ))}
        </div>
        <p className="asset-note">
          Partner logo placeholders are shown where source artwork was not provided.
        </p>
      </div>
    </section>
  );
}
