import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-luxury">

      {/* HERO */}
      <div className="gallery-hero">
        <h1>Galerie SEGURO HÔTEL</h1>
        <p>Un univers d’élégance et d’exception</p>
      </div>

      {/* SECTION 1 */}
      <div className="gallery-section">
        <div className="gallery-large">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt="Suite Luxe"
          />

          {/* ✅ RATING */}
          <div className="rating-badge">
            <span>4.9</span>
            <div className="stars">★★★★★</div>
          </div>

          <div className="gallery-overlay">
            <h2>Suite Présidentielle</h2>
          </div>
        </div>

        <div className="gallery-side">
          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
              alt="Piscine"
            />

            <div className="rating-badge">
              <span>4.8</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Piscine & Terrasse</h3>
            </div>
          </div>

          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant"
            />

            <div className="rating-badge">
              <span>4.7</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Restaurant Gastronomique</h3>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="gallery-section reverse">
        <div className="gallery-large">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80"
            alt="Spa"
          />

          <div className="rating-badge">
            <span>5.0</span>
            <div className="stars">★★★★★</div>
          </div>

          <div className="gallery-overlay">
            <h2>Spa & Bien‑être</h2>
          </div>
        </div>

        <div className="gallery-side">
          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
              alt="Piscine Nuit"
            />

            <div className="rating-badge">
              <span>4.9</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Ambiance Nocturne</h3>
            </div>
          </div>

          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
              alt="Fitness"
            />

            <div className="rating-badge">
              <span>4.8</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Fitness Premium</h3>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 – RESTAURANT SOUS COCOTIER */}
      <div className="gallery-section tropical">
        <div className="gallery-large">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80"
            alt="Restaurant à l'air libre"
          />

          <div className="rating-badge">
            <span>4.9</span>
            <div className="stars">★★★★★</div>
          </div>

          <div className="gallery-overlay">
            <h2>Restaurant à l’Air Libre</h2>
          </div>
        </div>

        <div className="gallery-side">
          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80"
              alt="Dîner sous les cocotiers"
            />

            <div className="rating-badge">
              <span>4.8</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Dîner sous les Cocotiers</h3>
            </div>
          </div>

          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
              alt="Expérience Tropicale"
            />

            <div className="rating-badge">
              <span>4.7</span>
              <div className="stars">★★★★★</div>
            </div>

            <div className="gallery-overlay">
              <h3>Expérience Tropicale</h3>
            </div>
          </div>
        </div>
      </div>


            {/* ============================= */}
      {/* CE QUE SEGURO HÔTEL VOUS RECOMMANDE */}
      {/* ============================= */}

      <div className="recommend-section">

        <div className="recommend-header">
          <h2>Ce que SEGURO HÔTEL vous recommande</h2>
          <p>Nos suites les plus prestigieuses sélectionnées pour vous</p>
        </div>

        <div className="recommend-grid">

          {/* SUITE 1 */}
          <div className="recommend-card">
            <img 
              src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
              alt="Suite Prestige"
            />
            <div className="recommend-content">
              <h3>Suite Prestige Royale</h3>
              <p>
                Vue panoramique, salon privé, jacuzzi et service personnalisé 24/7.
              </p>

              <div className="recommend-rating">
                ★★★★★ <span>4.9 (328 avis)</span>
              </div>
            </div>
          </div>

          {/* SUITE 2 */}
          <div className="recommend-card">
            <img 
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80"
              alt="Suite Horizon"
            />
            <div className="recommend-content">
              <h3>Suite Horizon Deluxe</h3>
              <p>
                Élégance contemporaine, terrasse privée et accès spa exclusif.
              </p>

              <div className="recommend-rating">
                ★★★★★ <span>4.8 (274 avis)</span>
              </div>
            </div>
          </div>

          {/* SUITE 3 */}
          <div className="recommend-card">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Suite Tropicale"
            />
            <div className="recommend-content">
              <h3>Suite Tropicale Signature</h3>
              <p>
                Ambiance raffinée, piscine privée et dîner sous les étoiles.
              </p>

              <div className="recommend-rating">
                ★★★★★ <span>4.9 (412 avis)</span>
              </div>
            </div>
          </div>

        </div>

        {/* AVIS DÉFILANT */}
        <div className="recommend-reviews">
          <div className="reviews-track">
            <span>“Expérience exceptionnelle.”</span>
            <span>“Service irréprochable.”</span>
            <span>“Un séjour inoubliable.”</span>
            <span>“Luxe et raffinement absolu.”</span>
          </div>
        </div>

      </div>

    </section>
  );
}