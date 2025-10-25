"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FashionShow.css";

export default function FashionShow({ items = [] }) {
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing || index < 0) return;
    if (index >= items.length) return;

    const timer = setTimeout(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index, playing, items.length]);

  const startShow = () => {
    setPlaying(true);
    setIndex(0);
  };

  const next = () => setIndex((i) => Math.min(i + 1, items.length));
  const prev = () => setIndex((i) => Math.max(i - 1, -1));

  return (
    <div className="fashion-show">
      <div className="fashion-top">
        {/* Girl model on the left */}
        <div className="side-model">
          <img src="/fashion_maid.png" alt="Aya model" />
        </div>

        {/* Runway display */}
        <div className="runway-wrap">
          <div className="runway">
            <AnimatePresence mode="wait">
              {index >= 0 && index < items.length && (
                <motion.div
                  key={items[index].title}
                  className="model"
                  initial={{ x: "-120vw", opacity: 0, scale: 0.95 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: "120vw", opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                >
                  {/* 👇 This is the new conditional rendering */}
                  {items[index].img.match(/\.(mp4|webm)$/) ? (
                    <video
                    src={items[index].img}
                    controls
                    preload="metadata"
                    poster="/Nicejob.png"
                    className="video-model"
                    />

                  ) : (
                    <img
                      src={items[index].img}
                      alt={items[index].title}
                      loading="lazy"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Reveal card under runway */}
      <div className="reveal">
        <AnimatePresence>
          {index >= 0 && index < items.length && (
            <motion.div
  key={items[index].title + "-card"}
  initial={{ opacity: 0, y: 15, position: "absolute", left: 0, right: 0 }}
  animate={{ opacity: 1, y: 0, position: "absolute", left: 0, right: 0 }}
  exit={{ opacity: 0, y: -15, position: "absolute", left: 0, right: 0 }}
  transition={{ duration: 0.4 }}
  className="project-card"
>
  <h3>{items[index].title}</h3>
  <p>{items[index].desc}</p>
              <div className="project-links">
                {items[index].github && (
                  <a href={items[index].github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i> Github
                  </a>
                )}
                
                {items[index].pdf &&(
                  <a href={items[index].pdf}
                  download
                  target="_blank" rel="noreferrer"
                  >
                    <i className="fa-solid fa-file-pdf"></i> Download digitalResume
                    </a>
                )}
                
                {items[index].link && (
                  <a href={items[index].link} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-globe"></i> Visit site
                    </a>
                )}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="fashion-controls">
        <button onClick={prev} disabled={index <= 0}>
          ◀ Prev
        </button>
        <button onClick={next} disabled={index >= items.length}>
          Next ▶
        </button>
      </div>
    </div>
  );
}

