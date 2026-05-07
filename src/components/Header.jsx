import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <span className="logo-main">SEGURO</span>
          <span className="logo-sub">HOTEL</span>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/rooms">Chambres</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/gallery">Galerie</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/booking" className="btn-reserve">
            Réserver
          </NavLink>

          {/* ✅ AUTH SECTION */}
          <div className="auth-section">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="login-btn">
                  Se connecter
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

        </nav>

        {/* MOBILE MENU */}
        <div className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}