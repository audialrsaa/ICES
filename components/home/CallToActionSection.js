import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const opportunities = [
  {
    title: "Registration & Paper Submission",
    description:
      "Submit your academic manuscripts for peer review. Register early to secure your presentation slot at the conference panels.",
    action: "Submit & Register",
    icon: "upload",
  },
  {
    title: "Co-Host Registration",
    description:
      "Position your institution as a key stakeholder. Enjoy branding benefits, steering committee rights, and consolidated registrations.",
    action: "Register as Co-Host",
    icon: "cohost",
  },
];

export default function CallToActionSection() {
  return (
    <section className="join-section section-pad">
      <div className="content-width">
        <SectionHeading
          title="Be Part of IC2EST 2027"
          description="Join global researchers, scientists, and academics. Submit your original research or register your institution as an official partner."
        />
        <div className="opportunity-grid">
          {opportunities.map((item) => (
            <article className="opportunity-card" key={item.title}>
              <span className="opportunity-icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="button button-small" href="#registration">
                {item.action}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
