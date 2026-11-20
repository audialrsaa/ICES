export default function SectionHeading({ title, description, eyebrow, centered = true }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}
