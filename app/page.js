"use client";

import { useState } from "react";
import Curtain from "./components/Curtain";
import Link from "next/link";
import FashionShow from "./components/FashionShow";

const fashionItems = [
  {
    img: "/Aya-h.jpg",
    title: "Hello, it's me Aya",
    desc: "Student at Epitech Strasbourg, currently seeking an internship in web development to expand my skills and contribute to creative projects.",
    link: "https://www.linkedin.com/in/aya-hasegawa-46786a137/",
  },
  {
    img: "/Trip-in-the-dream.jpg",
    title: "My e-shop",
    desc: "Built and managed an online shop to understand how UX and design choices influence customer engagement.",
    link: "https://tripinthedream.company.site/",
  },
  {
    img: "/Aya_working.webp",
    title: "CV Website",
    desc: "Created a responsive online CV to apply accessibility principles and improve multi-device usability.",
    github: "https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-STG_aya-hasegawa",
    pdf: "/CV Français Aya HASEGAWA.pdf",
  },
  {
    img: "/Nicejob.png",
    title: "Jobboard project - Nice Job -",
    desc: "Collaborated on a job board with Vue.js and Tailwind CSS, deepening my teamwork and front-end architecture skills.",
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-STG_1",
  },
  {
    img: "/NiceJobproject.webm",
    title: "Showcasing how the Nice Job website functions —",
    desc: "Led the front-end development of the Nice Job platform, connecting design and backend logic for a smoother user flow.",
    link: "#",
  },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showStyle, setShowStyle] = useState(false);

  return (
    <main role="main" className="min-h-screen bg-neutral-50 text-gray-900">
      {/* Curtain intro */}
      {!showContent && <Curtain onOpen={() => setShowContent(true)} />}

      {showContent && (
        <>
          {/* ===== NAVBAR ===== */}
          <nav className="navbar">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* ===== HERO ===== */}
          <header className="hero text-center pt-24 pb-16 bg-gradient-to-b from-pink-100 to-white">
            <h1 className="text-4xl font-bold">🌸 Aya HASEGAWA 🌸</h1>
            <p className="text-lg mt-2">Web Developer · E-commerce Enthusiast</p>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Ayah0512" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aya-hasegawa-46786a137/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://tripinthedream.company.site/" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </div>
          </header>

          {/* ===== ABOUT ===== */}
          <section id="about" className="card p-8">
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p>
              Student at Epitech Strasbourg, passionate about how design and development combine to create intuitive digital experiences.
            </p>
          </section>

          {/* ===== TECHNICAL SKILLS (popup) ===== */}
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowSkills(!showSkills)} 
              className="skills-btn"
            >
              <section id="skills" style={{ height: "1px" }}></section>
              {showSkills ? "✖" : "Show Technical Skills"}
            </button>
          </div>

          {showSkills && (
            <section id="skills" className="card p-8 text-center fade-in">
              <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
              <ul>
                <li>React & Next.js</li>
                <li>Front-end design (CSS, Tailwind)</li>
                <li>UI/UX and project teamwork</li>
                <li>Version control (Git & GitHub)</li>
              </ul>
            </section>
          )}

          {/* ===== PROJECTS ===== */}
          <section id="projects" className="card p-8 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <FashionShow items={fashionItems} />
          </section>

          {/* ===== CONTACT ===== */}
       {/* ===== CONTACT, DESIGN, AND STYLE SECTION ===== */}
<section id="contact" className="text-center my-12">
<div className="flex justify-center items-center gap-6 flex-wrap w-full text-center">
    <button onClick={() => setShowForm(true)} className="contact-btn">
      Contact Me
    </button>

    <button 
      onClick={() => setShowDesign(!showDesign)} 
      className="design-btn"
    >
      {showDesign ? "✖ Design Choices" : "Design Choices"}
    </button>

    <button 
      onClick={() => setShowStyle(!showStyle)} 
      className="design-btn"
    >
      {showStyle ? "✖ Style Guide" : "Style Guide"}
    </button>
  </div>

  {/* Contact Modal */}
  {showForm && (
    <div className="modal-overlay" onClick={() => setShowForm(false)}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowForm(false)}>✖</button>
        <h2>Contact Me</h2>
        <p>Interested in collaborating? Reach out! I’d be happy to discuss projects or creative opportunities.</p>

        <form
          className="contact-form"
          action="https://docs.google.com/forms/d/e/1FAIpQLScvre99W_Y3uLfvGrh7ekPmiZfxwm-DplBMHnZJKuJqp99fLw/formResponse"
          method="POST"
          target="_hidden_iframe"
          onSubmit={() => alert("Thank you! Your message has been sent")}
        >
          <label>Last Name</label>
          <input type="text" name="entry.1221858622" placeholder="Your last name" required />
          <label>First Name</label>
          <input type="text" name="entry.1191675254" placeholder="Your first name" required />
          <label>Email</label>
          <input type="email" name="entry.147600166" placeholder="your@email.com" required />
          <label>Message</label>
          <textarea name="entry.132592834" placeholder="Write your message here..." required></textarea>
          <button type="submit" className="send-btn">
            <i className="fa-solid fa-paper-plane"></i> Send
          </button>
        </form>
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
      </div>
    </div>
  )}

  {/* Design Choices Modal */}
  {showDesign && (
    <div className="modal-overlay" onClick={() => setShowDesign(false)}>
      <div className="design-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowDesign(false)}>✖</button>
        <h2>Design Choices</h2>
        <p>
          The portfolio follows a clean, minimal layout inspired by modern web trends.
          I used a soft pink and white palette to reflect approachability and creativity,
          while maintaining professional readability. Rounded edges and subtle shadows
          give depth without clutter, ensuring a smooth user flow between sections.
        </p>
      </div>
    </div>
  )}

  {/* Style Guide Modal */}
  {showStyle && (
    <div className="modal-overlay" onClick={() => setShowStyle(false)}>
      <div className="style-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowStyle(false)}>✖</button>
        <h2>Mini Style Guide</h2>
        <p>Base font: Poppins / Inter — modern and readable.</p>
        <p>Primary colors: #2b0f16 (deep red), #f2a9b9 (light pink), #ffffff (neutral).</p>
        <p>Buttons: Rounded, gradient hover, subtle shadow for depth.</p>
        <p>Icons: FontAwesome — consistent across GitHub, LinkedIn, and Shop links.</p>
      </div>
    </div>
  )}
</section>

          {/* ===== FOOTER ===== */}
          <footer className="footer py-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aya Hasegawa —{" "}
            <Link href="/">Portfolio</Link>
          </footer>
        </>
      )}
    </main>
  );
}
