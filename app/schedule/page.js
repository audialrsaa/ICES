import Link from "next/link";
import Footer from "../../components/home/Footer";
import Icon from "../../components/home/Icon";
import Navbar from "../../components/home/Navbar";
import PartnersSection from "../../components/home/PartnersSection";
import "./schedule.css";

export const metadata = {
  title: "Conference Schedule | IC2EST 2027",
  description:
    "Explore the complete program, keynote sessions, parallel presentations, important dates, and room allocations for the 2nd IC2EST 2027.",
};

const keyInfo = [
  {
    title: "Conference Date",
    detail: "January 27, 2027",
    icon: "calendar",
  },
  {
    title: "Venue",
    detail: "Hybrid",
    icon: "location",
  },
  {
    title: "Time",
    detail: "08.00-17.00",
    icon: "clock",
  },
];

const importantDates = [
  {
    date: " Nov 1 – Dec 15, 2026",
    badge: "SUBMISSION PERIOD",
    theme: "blue",
    title: "Full Paper Submission",
  },
  {
    date: "Dec 21, 2026",
    badge: "NOTIFICATION",
    theme: "gold",
    title: "Notification of Acceptance",
    description:
      "Acceptance notifications will be sent to corresponding authors via email with peer review feedback.",
  },
  {
    date: "Nov 30, 2026",
    badge: "FULL PAPER",
    theme: "blue",
    title: "Camera Ready Paper Submission",
    description:
      "Submission of completed final papers incorporating reviewers' feedback for journal consideration.",
  },
  // {
  //   date: "Dec 15, 2026",
  //   badge: "REGISTRATION DEADLINE",
  //   theme: "gold",
  //   title: "Registration & Payment Deadline",
  //   description:
  //     "Last date for presenters and general delegates to register and finalize fee transfers.",
  // },
  {
    date: "Jan 27, 2027",
    badge: "CONFERENCE",
    theme: "blue",
    title: "Main Event",
    description:
      "The main event of IC2EST 2027 featuring keynote sessions, presentations, and technical tracks.",
  },
];

// const rooms = [
//   {
//     roomCode: "ROOM A",
//     track: "Education",
//     topics: "Curriculum, Digital Learning, and Educational Management.",
//     location: "Anggrek Room",
//   },
//   {
//     roomCode: "ROOM B",
//     track: "Economics",
//     topics: "Digital Economy, Finance, Accounting, and Entrepreneurship.",
//     location: "Melati Room",
//   },
//   {
//     roomCode: "ROOM C",
//     track: "Social Science",
//     topics: "Communication, Law, Public Policy, and Language Studies.",
//     location: "Kenanga Room",
//   },
//   {
//     roomCode: "ROOM D",
//     track: "Technology",
//     topics: "Information Systems, Software, Applied Tech, Data Science & AI.",
//     location: "Cempaka Room",
//   },
// ];

// const programSchedule = [
//   {
//     time: "08:30 AM - 09:30 AM",
//     session: "Registration & Morning Reception",
//     speaker: "Organizing Committee",
//     location: "Main Lobby Entrance",
//   },
//   {
//     time: "09:30 AM - 10:00 AM",
//     session: "Opening Ceremony & Welcome Address",
//     speaker: "Dr. Sarah Jenkins (General Chair)",
//     location: "Main Auditorium",
//   },
//   {
//     time: "10:00 AM - 11:30 AM",
//     session: "Keynote Speech: Sustainable Tech Innovations",
//     speaker: "Prof. Marcus Vance (MIT)",
//     location: "Main Auditorium",
//   },
//   {
//     time: "11:30 AM - 01:00 PM",
//     session: "Parallel Sessions: Track A (Energy) & Track B (IT)",
//     speaker: "Session Chairs & Presenters",
//     location: "Rooms 301 & 302",
//   },
// ];

export default function SchedulePage() {
  return (
    <>
      <Navbar activePage="schedule" />

      <main>
        {/* Hero Banner */}
        <section className="schedule-hero-banner" id="top">
          <div className="content-width schedule-hero-content">
            <p className="schedule-hero-tag">IC2EST 2027</p>
            <h1 className="schedule-hero-title">Conference Schedule</h1>
            <p className="schedule-hero-subtitle">
              Explore the complete program, keynote sessions, parallel presentations,
              and important conference activities.
            </p>
            <nav className="schedule-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-slash">/</span>
              <span>Schedule</span>
            </nav>
          </div>
        </section>

        {/* Section 1: Key Conference Information */}
        <section className="schedule-logistics-section">
          <div className="content-width">
            <div className="schedule-section-header-left">
              <p className="schedule-eyebrow">IC2EST 2027 LOGISTICS</p>
              <h2 className="schedule-section-heading">
                Key Conference Information
              </h2>
            </div>

            <div className="logistics-grid">
              {keyInfo.map((info) => (
                <article className="logistics-card" key={info.title}>
                  <div className="logistics-icon-box">
                    <Icon name={info.icon} className="logistics-svg" />
                  </div>
                  <div className="logistics-card-body">
                    <h3 className="logistics-card-title">{info.title}</h3>
                    <p className="logistics-card-detail">{info.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Important Dates */}
        <section className="schedule-dates-section">
          <div className="content-width">
            <div className="schedule-section-header-center">
              <h2 className="schedule-section-heading">Important Dates</h2>
              <p className="schedule-section-sub">
                Stay informed about the important deadlines and key milestones of
                IC2EST 2027.
              </p>
            </div>

            <div className="dates-timeline-list">
              {importantDates.map((item) => (
                <article
                  className={`dates-timeline-card theme-${item.theme}`}
                  key={item.title}
                >
                  <div className="dates-left-col">
                    <h3 className="dates-time-text">{item.date}</h3>
                    <span className={`dates-badge badge-${item.theme}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="dates-right-col">
                    <h4 className="dates-item-title">{item.title}</h4>
                    <p className="dates-item-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Parallel Session & Room Allocation
        <section className="schedule-rooms-section">
          <div className="content-width">
            <div className="schedule-section-header-center">
              <h2 className="schedule-section-heading">
                Parallel Session &amp; Room Allocation
              </h2>
              <p className="schedule-section-sub">
                Explore the four research tracks and their designated presentation
                rooms.
              </p>
            </div>

            <div className="rooms-grid">
              {rooms.map((room) => (
                <article className="room-card" key={room.roomCode}>
                  <p className="room-code-tag">{room.roomCode}</p>
                  <h3 className="room-track-title">{room.track}</h3>
                  <p className="room-topics-text">{room.topics}</p>
                  <div className="room-location-box">
                    <Icon name="location" className="room-pin-icon" />
                    <span>{room.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* Section 4: Conference Program
        <section className="schedule-program-section">
          <div className="content-width">
            <div className="schedule-section-header-center">
              <h2 className="schedule-section-heading">Conference Program</h2>
              <p className="schedule-section-sub">
                Detailed activities for the two-day conference.
              </p>
            </div>

            <div className="program-table-container">
              <table className="program-table">
                <thead>
                  <tr>
                    <th>TIME</th>
                    <th>SESSION</th>
                    <th>SPEAKER</th>
                    <th>LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {programSchedule.map((row) => (
                    <tr key={row.session}>
                      <td className="program-col-time">{row.time}</td>
                      <td className="program-col-session">{row.session}</td>
                      <td className="program-col-speaker">{row.speaker}</td>
                      <td className="program-col-location">{row.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section> */}

        {/* Section 5: Academic Partners */}
        <PartnersSection />
      </main>

      <Footer />

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <span aria-hidden="true">⌃</span>
      </a>
    </>
  );
}
