"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#ia", label: "IA" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#israel", label: "Fundador" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <nav className="header__inner container" aria-label="Principal">
          <a href="#inicio" className="header__logo" onClick={closeMenu}>
            <Image
              src={siteConfig.logoLight}
              alt={siteConfig.name}
              width={168}
              height={44}
              priority
              className="header__logo-img"
            />
          </a>

          <ul className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="header__link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="header__nav-cta">
              <a href="#contato" className="btn btn--primary btn--sm" onClick={closeMenu}>
                Fale conosco
              </a>
            </li>
          </ul>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? "header__toggle--open" : ""}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        className={`nav-backdrop ${menuOpen ? "nav-backdrop--visible" : ""}`}
        aria-hidden
        onClick={closeMenu}
      />
    </>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

export { ScrollProgress } from "./ScrollProgress";
