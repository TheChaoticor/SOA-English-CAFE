import React, { useEffect, useState } from "react";
import "../styles/Newsletter.css";

const API_BASE = "http://localhost:8000";

function Newsletter() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadNewsletter();
  }, []);

  const loadNewsletter = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/documents/latest/`);

      const data = await res.json();

      console.log("Newsletter data:", data); // DEBUG

      if (!data || !data.pages || data.pages.length === 0) {
        throw new Error("No pages found");
      }

      setPages(data.pages);
      setTitle(data.title || "Newsletter");

    } catch (err) {
      console.error("Newsletter load error:", err);
      setError("No newsletter pages available yet");
    } finally {
      setLoading(false);
    }
  };


  const nextPage = () => {
    if (!isOpen) {
      setIsOpen(true);
      setCurrentPage(0);
      return;
    }

    if (currentPage < pages.length - 1) {
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 0) {
      setIsOpen(false);
      setCurrentPage(-1);
      return;
    }

    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
    }
  };

  if (loading) {
    return <p style={{ color: "white" }}>Loading newsletter...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <section className="page">
      <div className="page-capsule">
        <h1>{title}</h1>
        <p>A curated chronicle of words, voices, and moments.</p>
      </div>

      <div className="book-container">
        <div className={`book ${isOpen ? "open" : "closed"}`}>

          {/* COVER */}
          <div
            className={`page-sheet ${isOpen ? "flipped" : ""}`}
            style={{ zIndex: pages.length + 1 }}
          >
            <div className="page-front cover">
              {title}
            </div>
            <div className="page-back" />
          </div>

          {pages.map((page, index) => (
            <div
              key={page.id}
              className={`page-sheet ${isOpen && index < currentPage ? "flipped" : ""
                }`}
              style={{ zIndex: pages.length - index }}
            >
              <div className="page-front">
                <img
                  src={page.image}
                  alt={`Page ${page.page_number}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              <div className="page-back" />
            </div>
          ))}

        </div>

        <div className="book-controls">
          <button onClick={prevPage} disabled={!isOpen}>
            Previous
          </button>

          <span>
            {isOpen
              ? `Page ${currentPage + 1} / ${pages.length}`
              : "Cover"}
          </span>

          <button onClick={nextPage} disabled={!pages.length}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;