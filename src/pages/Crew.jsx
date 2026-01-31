import "../styles/Crew.css";

function Crew() {
  return (
    <section className="page">
      <div className="crew-wrapper">

        {/* TOP QUOTE – NOW IN CORRECT PLACE */}
        <p className="crew-quote-top">
          “ The strength of the SEC is each individual member, The strength of each member is the SEC. ”
        </p>

        {/* CADET PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">Cadet Team</h2>

          <div className="crew-grid">
            {[...Array(29)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Cadet Member"
                  />
                </div>

                <h3>Cadet Name</h3>
                <p className="crew-meta">Cadet</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “Learning, growing, and discovering confidence at SOA
                  EnglishCafe.”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">Content Team</h2>

          <div className="crew-grid">
            {[...Array(43)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Content Member"
                  />
                </div>

                <h3>Member Name</h3>
                <p className="crew-meta">Batch 2023 • Content Team</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “This place shaped my communication and confidence forever.”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">Tech Team</h2>

          <div className="crew-grid">
            {[...Array(9)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Tech Member"
                  />
                </div>

                <h3>Tech Member</h3>
                <p className="crew-meta">Batch 2022 • Core Tech</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “Building the backbone that powers SOA EnglishCafe.”
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}

export default Crew;
