import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="page">
      <div className="page-capsule contact-capsule">

        {/* CONTENT LAYER ABOVE IMAGE */}
        <div className="contact-content">

          {/* LEFT SIDE (visual space, empty for now) */}
          <div className="contact-left"></div>

          {/* RIGHT SIDE (form area) */}
          <div className="contact-right">
            <h2>Get in touch</h2>
            <p>
              Feel free to contact us and we will get back to you as soon as
              possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" disabled={status === "Sending..."}>
                {status === "Sending..." ? "Sending..." : "Send"}
              </button>
            </form>
            {status && status !== "Sending..." && (
              <p className="contact-status" style={{ marginTop: "1rem", color: status.includes("Error") ? "#ff4d4f" : "#52c41a", fontWeight: "bold" }}>
                {status}
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
