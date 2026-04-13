"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

export function Stars() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    for (let i = 0; i < 24; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = 3 + Math.random() * 4;
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${2 + Math.random() * 3}s;
        animation-delay: ${-Math.random() * 4}s;
        width: ${size}px;
        height: ${size}px;
        opacity: ${0.1 + Math.random() * 0.4};
      `;
      container.appendChild(star);
    }
  }, []);

  return <div className="stars" ref={ref} />;
}

export function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form className="email-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="your@email.com"
          required
          disabled={submitted}
        />
        <button type="submit" disabled={submitted} style={submitted ? { background: "#2abfb0" } : undefined}>
          {submitted ? "\u2713 You're on the list!" : "Get early access \u2726"}
        </button>
      </form>
      <p className="cta-note">
        {submitted
          ? "We'll be in touch soon. Thanks for your interest in Mythic!"
          : "Free during early access \u00b7 No credit card required \u00b7 COPPA compliant"}
      </p>
    </>
  );
}

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".feat-card, .step-card, .testi-card, .parent-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => {
      (target as HTMLElement).style.opacity = "0";
      (target as HTMLElement).style.transform = "translateY(20px)";
      (target as HTMLElement).style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}

export function HamburgerButton({ onClick, open }: { onClick: () => void; open: boolean }) {
  return (
    <button
      className="hamburger"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`hamburger-line ${open ? "hamburger-open" : ""}`} />
      <span className={`hamburger-line ${open ? "hamburger-open" : ""}`} />
      <span className={`hamburger-line ${open ? "hamburger-open" : ""}`} />
    </button>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerButton onClick={() => setOpen(!open)} open={open} />
      {open && createPortal(
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          <a href="#for-kids">For Kids</a>
          <a href="#for-parents">For Parents</a>
          <a href="#how">How it works</a>
          <a href="#signup">Get early access</a>
        </div>,
        document.body
      )}
    </>
  );
}
