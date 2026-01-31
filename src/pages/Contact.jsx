import "../styles/Contact.css";

function Contact() {
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

            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
              <textarea placeholder="Message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
