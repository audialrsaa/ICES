import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const importantDates = [
  { month: "Oct 2026", title: "Registration Opens", icon: "people" },
  { month: "Nov 2026", title: "Full Paper Submission", icon: "paper" },
  { month: "Dec 2026", title: "Registration Closed", icon: "calendar" },
  { month: "Jan 2027", title: "Conference Event", icon: "people" },
];

const plans = [
  {
    name: "Participant",
    price: "IDR 50,000",
    note: "Non-presenter access",
    benefits: ["Access to Keynote Sessions", "E-Certificate of Attendance", "Seminar Kit (Digital)"],
    action: "Register Now",
  },
  {
    name: "National Presenter (Student)",
    price: "IDR 75,000",
    note: "Requires valid student ID",
    benefits: ["15-Min Presentation Slot", "Abstract & Proceeding Pub.", "E-Certificate of Presenter", "Reviewers & Q&A Session"],
    action: "Select Student Plan",
    popular: true,
  },
  {
    name: "National Presenter (Lecturer)",
    price: "IDR 200,000",
    note: "Lecturer, Researcher & Academic",
    benefits: ["15-Min Presentation Slot", "Standard Publication Access", "E-Certificate of Presenter", "Proceeding Publication"],
    action: "Select Lecturer Plan",
  },
  {
    name: "International Presenter",
    price: "USD 12",
    note: "Global academic speakers",
    benefits: ["Global Presentation Slot", "International Proceedings", "E-Certificate of Presenter", "Q&A & International Session"],
    action: "Select USD Plan",
  },
];

export default function ConferenceDetailsSection() {
  return (
    <div className="details-section">
      <section className="dates-section section-pad" id="schedule">
        <div className="content-width">
          <SectionHeading
            title="Important Dates"
            description="Mark your calendar and track crucial milestones for the upcoming global conference."
          />
          <div className="date-grid">
            {importantDates.map((date) => (
              <article className="date-card" key={date.month}>
                <Icon name={date.icon} />
                <h3>{date.month}</h3>
                <span className="date-divider" />
                <p>{date.title}</p>
              </article>
            ))}
          </div>
          <a className="button button-blue schedule-button" href="#schedule">
            View Full Schedule
          </a>
        </div>
      </section>
      <section className="registration-section section-pad" id="registration">
        <div className="content-width">
          <SectionHeading
            title="Registration Fee"
            description="Choose your participation category and unlock access to keynotes, presentations, and global academic networking."
          />
          <div className="fee-grid">
            {plans.map((plan) => (
              <article className={`fee-card${plan.popular ? " popular" : ""}`} key={plan.name}>
                {plan.popular ? <span className="popular-tag">Most Popular</span> : null}
                <h3>{plan.name}</h3>
                <p className="fee-price">{plan.price}</p>
                <p className="fee-note">{plan.note}</p>
                <ul>
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <a className="button fee-button" href="#registration">
                  {plan.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
