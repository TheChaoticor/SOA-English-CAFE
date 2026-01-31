import { useEffect, useState } from "react";
import "../styles/Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Replace with your real backend API
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <section className="events-page">
      {/* LEFT: Events Grid */}
      <div className="events-grid">
        {events.slice(0, 6).map(event => {
          const isPast = new Date(event.date) < new Date();

          return (
            <div
              key={event._id}
              className={`event-card ${isPast ? "past" : ""}`}
              onClick={() => !isPast && setSelectedEvent(event)}
            >
              <img src={event.image} alt={event.title} />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT: Registration Panel */}
      <div className="registration-panel">
        {selectedEvent ? (
          <>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.date}</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <button type="submit">Register</button>
            </form>
          </>
        ) : (
          <>
            <h2>Register for Events</h2>
            <p>Select an upcoming event to register.</p>
          </>
        )}
      </div>
    </section>
  );
}

export default Events;