import Link from "next/link";

const footerLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Speakers", "/speaker"],
  ["Schedule", "/schedule"],
  ["Proceeding", "/proceeding"],
];

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid content-width">
          <div className="footer-about">
            <h2>IC2EST 2027</h2>
            <p>
              International Conference on Innovation, Science, Engineering,
              Technology, and Social Sciences. Empowering the global academic
              community through collaborative research.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {footerLinks.map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li><span aria-hidden="true">⌖</span> Secretariat IC2EST, Universitas LIA, Jakarta</li>
              <li><span aria-hidden="true">✉</span> info@ic2est.lia.ac.id</li>
              <li><span aria-hidden="true">⌕</span> +62 21 7918 1188</li>
            </ul>
          </div>
          <div>
            <h3>Venue Location</h3>
            <p>
              Hotel Bidakara Jakarta Jl. Gatot Subroto No.Kav. 71–73,
              Pancoran, Jakarta Selatan, 12870, Indonesia.
            </p>
          </div>
        </div>
        <div className="footer-bottom content-width" />
      </footer>
      <div className="copyright">
        Copyright © IC2EST 2027 | Universitas LIA
      </div>
    </>
  );
}
