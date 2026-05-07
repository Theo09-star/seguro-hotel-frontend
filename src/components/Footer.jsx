import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";

export default function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {

    if (!email) {
      alert("Veuillez entrer un email.");
      return;
    }

    try {
      const response = await fetch("http://localhost/backend/api/subscribeNewsletter.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Inscription réussie !");
        setEmail("");
      } else {
        alert("❌ " + result.error);
      }

    } catch (error) {
      console.error(error);
      alert("Erreur serveur.");
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>SEGURO HÔTEL</h2>
          <p>Luxe, confort et élégance au cœur de l'Afrique.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/rooms">Chambres</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>+2290143521784</p>
          <p>contact@segurohotel.com</p>
          <p>Abidjan, Côte d'Ivoire</p>
        </div>

        <div className="footer-admin">
          <h4>Administration</h4>
          <Link to="/admin/login" className="admin-link">
            Espace Administrateur
          </Link>
        </div>

      </div>

      {/* ✅ NEWSLETTER */}
      <div className="footer-newsletter">
        <h3>Restez Informé</h3>
        <p>Recevez nos offres exclusives et actualités directement par email.</p>

        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Entrez votre email" 
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="newsletter-btn"
            onClick={handleSubscribe}
          >
            S'abonner
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SEGURO HOTEL — Tous droits réservés
      </div>

    </footer>
  );
}