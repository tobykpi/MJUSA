"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll(".mission-aside,.mission-copy,.pillar,.program-intro,.division,.story-photo,.story blockquote,.gallery-heading,.media-card,.closing-logo,.closing h2,.site-footer > *");
    targets.forEach((element, index) => {
      element.classList.add("reveal");
      (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -45px" },
    );
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
