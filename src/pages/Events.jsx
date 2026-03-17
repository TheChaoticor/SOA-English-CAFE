import { useState } from "react";
import "../styles/Events.css";
import { masterEventSheetLink } from "../utils/googleSheetsOptions";

function Events() {
    const [events] = useState([
        {
            _id: 1,
            title: "English Speaking Workshop",
            date: "2026-03-20T10:00:00Z",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
            description: "Join us for an interactive session on improving your English speaking skills.",
            isPaid: false,
        },
        {
            _id: 2,
            title: "Grammar Masterclass",
            date: "2026-03-25T14:00:00Z",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
            description: "A deep dive into advanced English grammar rules and usage.",
            isPaid: false,
        },
        {
            _id: 3,
            title: "Literature Discussion Club",
            date: "2026-04-05T18:00:00Z",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop",
            description: "Discussing contemporary English literature with fellow readers.",
            isPaid: true,
            price: "$10",
        },
        {
            _id: 4,
            title: "Vocabulary Building Session",
            date: "2026-02-15T16:00:00Z",
            image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1974&auto=format&fit=crop",
            description: "Expand your vocabulary with fun and engaging activities.",
            isPaid: true,
            price: "$5",
        },
        {
            _id: 5,
            title: "Pronunciation Workshop",
            date: "2026-04-10T11:00:00Z",
            image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
            description: "Learn how to pronounce English words like a native speaker.",
            isPaid: true,
            price: "$15",
        },
        {
            _id: 6,
            title: "Storytelling Night",
            date: "2026-04-15T19:00:00Z",
            image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
            description: "Share your stories and listen to others in a cozy environment.",
            isPaid: true,
            price: "$8",
        }
    ]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Form State
    const [formData, setFormData] = useState({ name: "", email: "", transactionId: "" });
    const [formStatus, setFormStatus] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        setFormData({ name: "", email: "", transactionId: "" }); // Reset form
        setFormStatus("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedEvent) return;

        if (!masterEventSheetLink || masterEventSheetLink.includes("PASTE_WEB_APP_URL")) {
            setFormStatus("Error: Google Sheet Link Not Configured.");
            return;
        }

        setFormStatus("Submitting...");

        try {
            // Append the event context to the form payload
            const payload = {
                ...formData,
                eventTitle: selectedEvent.title
            };

            await fetch(masterEventSheetLink, {
                method: "POST",
                // Avoid CORS issues with Google Apps Script Web Apps by sending no-cors
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // Since mode is 'no-cors', response.ok will be false. 
            // Assuming success if it doesn't throw a network error.
            setFormStatus("Registration Successful!");
            setFormData({ name: "", email: "", transactionId: "" });
        } catch (error) {
            console.error("Submission Error:", error);
            setFormStatus("Error submitting registration. Please try again.");
        }
    };

    return (
        <section className="events-page">
            {/* LEFT: Events Grid */}
            <div className="events-grid">
                {events.slice(0, 6).map(event => {
                    const isPast = new Date(event.date) < new Date();

                    return (
                        <div
                            key={event._id}
                            className={`event-card ${isPast ? "past" : ""} ${selectedEvent?._id === event._id ? "selected" : ""}`}
                            onClick={() => !isPast && handleEventSelect(event)}
                        >
                            <img src={event.image} alt={event.title} />
                            <div className="event-info">
                                <h3>{event.title}</h3>
                                <p>{new Date(event.date).toLocaleDateString()}</p>
                                <span className="event-badge">{event.isPaid ? event.price : "Free"}</span>
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
                        <p className="event-date">{new Date(selectedEvent.date).toLocaleString()}</p>
                        <p className="event-desc">{selectedEvent.description}</p>

                        {selectedEvent.isPaid && (
                            <div className="payment-info">
                                <h3>Registration Fee: {selectedEvent.price}</h3>
                                <p>Scan to Pay:</p>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                    alt="QR Code"
                                    className="qr-code"
                                />
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            {selectedEvent.isPaid && (
                                <input
                                    type="text"
                                    name="transactionId"
                                    placeholder="Transaction ID (After Payment)"
                                    value={formData.transactionId}
                                    onChange={handleInputChange}
                                    required
                                />
                            )}
                            <button type="submit" disabled={formStatus === "Submitting..."}>
                                {formStatus === "Submitting..." ? "Submitting..." : "Complete Registration"}
                            </button>
                        </form>

                        {formStatus && (
                            <p style={{ marginTop: '10px', color: formStatus.includes('Error') ? '#ff4d4f' : '#52c41a', fontWeight: 'bold', textAlign: 'center' }}>
                                {formStatus}
                            </p>
                        )}
                    </>
                ) : (
                    <div className="empty-registration">
                        <h2>Registration</h2>
                        <p>Select an upcoming event from the left to view details and register.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Events;