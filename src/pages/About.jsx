import "../styles/About.css";
import aboutIntro from "../assets/about.png";

function About() {
  return (
    <section className="page">
      {/* Intro Section */}
      <div className="page-capsule about-intro">
        <img
          src={aboutIntro}
          alt="About SOA EnglishCafe"
          className="about-intro-img"
        />

        <div className="about-intro-text">
          <h1>About Us</h1>
          <p>
            SOA EnglishCafe is a vibrant creative community where language, literature, and expression come together to inspire confident voices and thoughtful ideas. We serve as a space for students to explore the power of words—through discussions, debates, writing, and performance—while fostering clarity of thought and effective communication.
          </p>
        </div>
      </div>

      {/* Panel 1 */}
      <div className="about-panel">
        <h2><i>What defines us?</i></h2>
        <p className="funky-text">
          SOA English Café (SEC) is a soft skills, public speaking enhancement, and English literary society of Siksha ‘O’ Anusandhan University. It serves as a dynamic platform dedicated to strengthening students’ communication abilities while nurturing confidence, leadership qualities, and deeper appreciation for the English language and literature. SEC combines academic learning with the practical exposure, helping students develop the skills required for the effective expression in both professionals and social settings.
        </p>

        <h2><i>History</i></h2>
        <p className="funky-text">
          SOA English Café was established in 2015 by a group of enthusiastic students and mentors with a shared vision of creating a space where young talent could be identified, encouraged, and refined. The society aims to groom students into confident speakers, thoughtful writers, and responsible leaders through continuous practice and engagement. Since two decades SEC has consistently catered to the growing needs of aspiring speakers and writers by platforming emerging talents and fostering collaborative growth. By adopting peer-learning models and interactive activities, SEC has fostered organic intellectual and personal growth among its members, making it an integral part of the university's co-curricular ecosystem.
        </p>
      </div>

      {/* Panel 2 */}
      <div className="about-panel">
        <h2><i>Our Goals</i></h2>
        <p className="funky-text">
          The SOA English Café always set goal to create a supportive, vibrant, and inclusive platform for students to enhance their English language proficiency and develop strong communication skills, confidence, and personality. It aims to encourage critical thinking while fostering a genuine appreciation for literature and creative expression through meaningful interaction and collaboration.  the SOA English Café seeks to help students express themselves creatively and gain confidence in language and literature, preparing them for academic, professional, and social communication.
        </p>

        <h2><i>Our Objectives</i></h2>
        <p className="funky-text">
          The SOA English Café objective is always to help students express themselves creatively and gain confidence in language and literature, preparing them for academic, professional, and social communication. Additionally, we want to strengthen analytical and critical thinking abilities, encourage creativity through literary and expressive activities, and boost confidence in the use of the language in everyday contexts. The SOA English Café works to guarantee students' holistic development and give them the tools they need to confidently and clearly communicate in English by promoting teamwork and open communication.
        </p>
      </div>

      {/* Panel 3 */}
      <div className="about-panel">
        <h2><i>What we do?</i></h2>
        <p className="funky-text">
          The SOA English Café plays an important role as a hub for language enrichment and personal development. It acts as a bridge between academic English and real-world communication, helping students apply academic knowledge in practical contexts. The SEC nurtures a supportive community of learners and thinkers where students can explore their potential, express ideas freely, and develop confidence, creativity, and critical thinking beyond the limits of formal instruction.
        </p>
        <p className="funky-text">
          The SOA English Café works towards its mission by organizing interactive and collaborative activities such as group discussions, debates, presentations, literary sessions, and creative workshops. It provides equal opportunities for students to identify and showcase hidden talents while improving their speaking, listening, reading, writing, and thinking skills. Through teamwork, open dialogue, and consistent practice, the SOA English Café contributes to the holistic development of students, preparing them for academic success, professional readiness, and effective social communication.
        </p>
      </div>
    </section>
  );
}

export default About;
