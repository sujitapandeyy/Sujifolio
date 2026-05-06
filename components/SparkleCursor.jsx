"use client";
import { useEffect } from "react";

export default function SparkleCursor() {
  useEffect(() => {
    let last = 0;

    const createSparkle = (x, y) => {
      const el = document.createElement("div");
      el.className = "sparkle";

      // 👉 RANDOM SPREAD (important)
      const offsetX = (Math.random() - 0.5) * 60; // spread width
      const offsetY = (Math.random() - 0.5) * 60;

      el.style.left = x + offsetX + "px";
      el.style.top = y + offsetY + "px";

      // 👉 random size (more natural)
      const size = Math.random() * 8 + 6;
      el.style.width = size + "px";
      el.style.height = size + "px";

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 600);
    };

    const handleMove = (e) => {
      const now = Date.now();

      // 👉 LESS QUANTITY (increase delay = fewer sparkles)
      if (now - last > 100) {
        createSparkle(e.clientX, e.clientY);
        last = now;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}