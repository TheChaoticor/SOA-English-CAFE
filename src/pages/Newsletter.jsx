import React, { useState } from "react";
import "../styles/Newsletter.css";

function Newsletter() {
  // Dummy pages (backend will replace later)
  const pages = Array.from({ length: 6 });

  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextPage = () => {
    if (!isOpen) {
      setIsOpen(true); // open book on first click
      return;
    }

    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 0) {
      setIsOpen(false); // close book
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="page">
      <div className="page-capsule">
        <h1>Newsletter</h1>
        <p>A curated chronicle of words, voices, and moments.</p>
        <p>Explore our newsletters page by page—capturing events, ideas, achievements, and stories that define the spirit of SOA English Café.</p>
      </div>

      <div className="book-container">
        <div className={`book ${isOpen ? "open" : "closed"}`}>
          {pages.map((_, index) => (
            <div
              key={index}
              className={`page-sheet ${
                isOpen && index <= currentPage ? "flipped" : ""
              }`}
              style={{ zIndex: pages.length - index }}
            >
              <div
                className={`page-front ${index === 0 ? "cover" : ""}`}
              >
                {index === 0
                  ? "SOA English Café Newsletter"
                  : `Page ${index + 1}`}
              </div>
              <div className="page-back"></div>
            </div>
          ))}
        </div>

        <div className="book-controls">
          <button onClick={prevPage} disabled={!isOpen}>
            Previous
          </button>

          <span>
            {isOpen ? `Page ${currentPage + 1} / ${pages.length}` : "Cover"}
          </span>

          <button onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;