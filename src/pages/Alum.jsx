import "../styles/Alum.css";
import alum1 from "../assets/pic.png"

const alumniData = [
  {
    name: "Rahul Sharma",
    role: "Batch 2022 • Core Member",
    quote: "SOA EnglishCafe shaped my confidence and communication forever.",
    img: alum1,
  },
  {
    name: "Ananya Das",
    role: "Batch 2021 • Mentor",
    quote: "A place that taught me how to speak, think, and lead.",
    img: "/alumni/alum2.jpg",
  },
  {
    name: "Sourav Patel",
    role: "Batch 2023 • Speaker",
    quote: "The learnings here still guide me in my professional life.",
    img: "/alumni/alum3.jpg",
  },
  {
    name: "Neha Verma",
    role: "Batch 2020 • Alumni Lead",
    quote: "EnglishCafe gave me a voice I never knew I had.",
    img: "/alumni/alum4.jpg",
  },
  {
    name: "Arjun Singh",
    role: "Batch 2022 • Coordinator",
    quote: "From stage fear to stage presence — unforgettable journey.",
    img: "/alumni/alum5.jpg",
  },
  {
    name: "Priya Nanda",
    role: "Batch 2021 • Content Team",
    quote: "More than a club, it was a family.",
    img: "/alumni/alum6.jpg",
  },
  {
    name: "Rohit Mishra",
    role: "Batch 2023 • Volunteer",
    quote: "The confidence I gained here still reflects in my work.",
    img: "/alumni/alum7.jpg",
  },
  {
    name: "Sneha Kulkarni",
    role: "Batch 2020 • Founding Member",
    quote: "A journey that shaped who I am today.",
    img: "/alumni/alum8.jpg",
  },
  {
    name: "Aman Gupta",
    role: "Batch 2022 • PR Team",
    quote: "EnglishCafe made learning expressive and fearless.",
    img: "/alumni/alum9.jpg",
  },
];

export default function AlumniSection() {
  return (
    <section className="alumni-section">
      <h2 className="alumni-title">Our Alumni</h2>
      <p className="alumni-subtitle">
        Voices that continue to represent SOA EnglishCafe
      </p>

      <div className="alumni-grid">
        {alumniData.map((alum, index) => (
          <div className="alumni-card" key={index}>
            <img src={alum.img} alt={alum.name} />
            <h3>{alum.name}</h3>
            <span>{alum.role}</span>
            <p className="quote">“{alum.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
