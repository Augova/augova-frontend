"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("text-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section > div").forEach((section) => {
      observer.observe(section);
    });

    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.backgroundImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.03) 0%, transparent 40%)`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
