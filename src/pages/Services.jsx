import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services-page">

      {/* HEADER */}
      <div className="services-hero">
        <h1>Nos Services d’Exception</h1>
        <p>Un univers de luxe, de raffinement et d’élégance</p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-container">

      <div className="service-card">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800"
          alt="Restaurant Gastronomique"
        />
        <div className="service-content">
          <h3>Restaurant Gastronomique</h3>
          <p>
            Savourez une cuisine raffinée mêlant saveurs africaines et internationales
            dans un cadre élégant et sophistiqué.
          </p>

          <Link to="/booking" className="service-book-btn">
            Réserver
          </Link>
        </div>
      </div>

        {/* SPA */}
        <div className="service-card">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
            alt="Spa & Bien-être"
          />
          <div className="service-content">
            <h3>Spa & Bien‑être</h3>
            <p>
              Massages personnalisés, soins relaxants et ambiance apaisante pour
              une expérience de détente absolue.
            </p>
             <Link to="/booking" className="service-book-btn">
            Réserver
          </Link>
          </div>
          
        </div>

        {/* PISCINE */}
        <div className="service-card">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Piscine Luxe"
          />
          <div className="service-content">
            <h3>Piscine Extérieure</h3>
            <p>
              Profitez d’un espace aquatique luxueux avec vue panoramique et
              service exclusif au bord de la piscine.
            </p>
            <Link to="/booking" className="service-book-btn">
            Réserver
          </Link>
          </div>
        </div>

        {/* FITNESS */}
        <div className="service-card">
          <img 
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800"
            alt="Salle de Sport"
          />
          <div className="service-content">
            <h3>Salle de Sport Premium</h3>
            <p>
              Équipements modernes, coaching personnalisé et espace fitness
              haut de gamme pour votre bien-être.
            </p>
            <Link to="/booking" className="service-book-btn">
            Réserver
          </Link>
          </div>
        </div>

          <div className="service-card">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
            alt="Salle de Conférences"
          />
          <div className="service-content">
            <h3>Salle de Conférences</h3>
            <p>
              Espaces modernes entièrement équipés pour séminaires,
              mariages, conférences et événements professionnels.
            </p>

            <Link to="/booking" className="service-book-btn">
              Réserver
            </Link>
          </div>
        </div>


          <div className="service-card">
          <img 
            src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=80"
            alt="Conciergerie & Transfert VIP"
          />
          <div className="service-content">
            <h3>Conciergerie & Transfert VIP</h3>
            <p>
              Service personnalisé 24/7, réservation d’activités,
              transferts aéroport et assistance exclusive.
            </p>

            <Link to="/booking" className="service-book-btn">
              Réserver
            </Link>
          </div>
        </div>

      </div>

            {/* ✅ OFFRES EN PROMOTION */}
      <div className="offers-section">

        <div className="offers-header">
          <h2>Nos Offres en Promotion Actuellement</h2>
          <p>Des expériences luxueuses à prix exclusifs</p>
        </div>

        <div className="offers-grid">

          {/* OFFRE 1 */}
          <div className="offer-card">
            <div className="offer-image">
              <img 
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200"
                alt="Suite Luxe"
              />
              <span className="offer-badge">-30%</span>
            </div>

            <div className="offer-content">
              <h3>Suite Présidentielle Luxe</h3>

              <div className="offer-rating">
                ★★★★★
              </div>

              <div className="offer-pricing">
                <span className="old-price">$450</span>
                <span className="new-price">$320</span>
              </div>

              <Link to="/booking" className="offer-btn">
                Réserver Maintenant
              </Link>
            </div>
          </div>

          {/* OFFRE 2 */}
          <div className="offer-card">
            <div className="offer-image">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200"
                alt="Spa"
              />
              <span className="offer-badge">Top Choice</span>
            </div>

            <div className="offer-content">
              <h3>Séjour Spa & Bien‑être</h3>

              <div className="offer-rating">
                ★★★★★
              </div>

              <div className="offer-pricing">
                <span className="old-price">$300</span>
                <span className="new-price">$220</span>
              </div>

              <Link to="/booking" className="offer-btn">
                Réserver Maintenant
              </Link>
            </div>
          </div>

          {/* OFFRE 3 */}
          <div className="offer-card">
            <div className="offer-image">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
                alt="Week-end"
              />
              <span className="offer-badge">Promo</span>
            </div>

            <div className="offer-content">
              <h3>Week‑end Romantique</h3>

              <div className="offer-rating">
                ★★★★☆
              </div>

              <div className="offer-pricing">
                <span className="old-price">$280</span>
                <span className="new-price">$190</span>
              </div>

              <Link to="/booking" className="offer-btn">
                Réserver Maintenant
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}