"use client";

import { useState } from "react";
import Curtain from "./components/Curtain";
import Link from "next/link";
import FashionShow from "./components/FashionShow";

const fashionItems = [
  {
    img: "/Aya-h.jpg",
    title: "Hello, it's me Aya",
<<<<<<< HEAD
    desc: "Student at Informatic school Epitech Strasbourg, Currently seeking an internship in web development to expand my skills and contribute to creative projects.",
=======
    desc: "Student at Informatic school Epitech Strasbourg, looking for an internship in web development.",
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
    link: "https://www.linkedin.com/in/aya-hasegawa-46786a137/",
  },
  {
    img: "/Trip-in-the-dream.jpg",
    title: "My e-shop",
<<<<<<< HEAD
    desc: "Built and managed an online shop, handling product listings, user experience, and visual design.",
=======
    desc: "Built and managed an online shop; product listings, UX & design.",
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
    link: "https://tripinthedream.company.site/",
  },
  {
    img: "/Aya_working.webp",
    title: "CV Website",
<<<<<<< HEAD
    desc: "Created a responsive online CV using HTML and CSS, including a printable version for easy download.",
=======
    desc: "Responsive CV — HTML/CSS design and printable version.",
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
    github: "https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-STG_aya-hasegawa",
    pdf: "/CV Français Aya HASEGAWA.pdf"
  },
  {
    img: "/Nicejob.png",
    title: "Jobboard project - Nice Job- ",
<<<<<<< HEAD
    desc: "Collaborated with teammates on a Job Board platform, developing with Vue.js and Tailwind CSS to deliver a modern, responsive interface.",
=======
    desc: "First time working with teammates on a Job Board project, using new technologies like Vue.js and Tailwind.",
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-STG_1",
  },
  {
    img: "/NiceJobproject.webm",
<<<<<<< HEAD
    title: "Showcasing how the Nice Job website functions —",
    desc: "primarily responsible for the front-end development, while also contributing to back-end integration.",
=======
    title: "How does the Nice Job site work",
    desc: "In charge of the frontend part primarily, and some backend to connect both sides.",
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
    link: "#",
  },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showForm, setShowForm] = useState(false);


  return (
    <main role="main" className="min-h-screen bg-neutral-50 text-gray-900">
      {/* Curtain intro */}
      {!showContent && <Curtain onOpen={() => setShowContent(true)} />}

      {showContent && (
        <>
          {/* ===== HERO ===== */}
          <header className="hero text-center py-16 bg-gradient-to-b from-pink-100 to-white">
            <h1 className="text-4xl font-bold">🌸 Aya HASEGAWA 🌸</h1>
            <p className="text-lg mt-2">Web Developer · E-commerce Enthusiast</p>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/Ayah0512"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aya-hasegawa-46786a137/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://tripinthedream.company.site/"
                target="_blank"
                rel="noreferrer"
                aria-label="My shop"
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </div>
          </header>

          {/* ===== ABOUT ===== */}
          <section id="about" className="card p-8">
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p>
<<<<<<< HEAD
              Student at Epitech Strasbourg, passionate about front-end development and digital creation.
=======
              Student at Epitech Strasbourg, passionate about front-end
              development and digital creation.
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513
            </p>
          </section>

          {/* ===== PROJECTS ===== */}
          <section id="projects" className="card p-8 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <FashionShow items={fashionItems} />
          </section>

          {/* ===== CONTACT BUTTON & MODAL===== */}
          <section id="contact" className="ext-center my-12">
            <button 
            onClick={() => setShowForm(true)}
            className="contact-btn"
            >
              Contact Me 
            </button>

            {showForm && (
              <div className="modal-overlay" onClick={() => setShowForm(false)}>
                <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                  <button
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                  >
                    ✖
                    </button>
                    <h2>Contact Me</h2>
<<<<<<< HEAD
                    <p>Interested in collaborating? Reach out!
                      I’d be happy to discuss projects or creative opportunities.</p>
=======
                    <p>Interrsted in collaborating? Reach out!</p>
>>>>>>> ab67484bcd1e97b623e04b1292b86a6eb0302513

                    <form 
                    className="contact-form"
                    action="https://docs.google.com/forms/d/e/1FAIpQLScvre99W_Y3uLfvGrh7ekPmiZfxwm-DplBMHnZJKuJqp99fLw/formResponse"
                    method="POST"
                    target="_hidden_iframe"
                    onSubmit={() => alert("Thank you! Your message has been sent")}
                    >
                      <input type="hidden" name="fvv" value="1" />
                      <input type="hidden" name="draftResponse" value="[]" />
                      <input type="hidden" name="pageHistory" value="0" />
                      
                      <label>Last Name</label>
                      <input 
                      type="text" 
                      name="entry.1221858622"
                      placeholder="Your last name" 
                      required 
                      />
                      
                      <label>First Name</label> 
                      <input 
                      type="text" 
                      name="entry.1191675254" 
                      placeholder="Your first name" 
                      required 
                      />
                      
                      <label>Email</label>
                      <input 
                       type="email" 
                       name="entry.147600166" 
                       placeholder="your@email.com" 
                       required 
                       />
                       <label>Message</label>
                       <textarea 
                       name="entry.132592834" 
                       placeholder="Write your message here..." 
                       required
                       ></textarea>
                       
                       <button type="submit" className="send-btn">
                        <i className="fa-solid fa-paper-plane"></i> Send
                        </button>
                        </form>

                        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
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
