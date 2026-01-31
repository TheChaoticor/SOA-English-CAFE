import "./footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/YOUR_LINKEDIN_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      {/* Newsletter */}
      <div className="footer-center">
        <h4>Sign up to our newsletter</h4>
        <div className="newsletter">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;