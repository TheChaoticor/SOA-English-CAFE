import "./footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { getSubstackEmbedUrl } from "../utils/substackConfig";

function Footer() {
    return (
        <footer className="footer">

            {/* Social Icons */}
            <div className="footer-socials">
                <a
                    href="https://www.instagram.com/soaenglishcafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.linkedin.com/company/soa-english-cafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>

            {/* Newsletter */}
            <div className="footer-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{ marginBottom: '10px' }}>Sign up to our newsletter</h4>
                <div style={{ width: '100%', maxWidth: '350px', height: '150px', background: 'transparent', overflow: 'hidden' }}>
                    <iframe
                        src={getSubstackEmbedUrl()}
                        title="Substack Newsletter Subscribe"
                        width="100%"
                        height="100%"
                        style={{ background: 'transparent' }}
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;