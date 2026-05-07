import { useParams, Link } from "react-router-dom";
import "./RoomDetails.css";

export default function RoomDetails() {
  const { id } = useParams();

  return (
    <section className="room-details">
      <div className="room-hero">
        <h1>Suite Élégance #{id}</h1>
        <p>Un espace raffiné alliant luxe et confort absolu</p>
      </div>

      <div className="room-container">

        <div className="room-gallery">
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200" alt="" />
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800" alt="" />
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800" alt="" />
        </div>

        <div className="room-info">
          <h2>Description</h2>
          <p>
            Profitez d’une suite luxueuse avec vue panoramique, literie premium,
            climatisation, WiFi ultra rapide et salle de bain en marbre.
          </p>

          <ul>
            <li>✔ Lit King Size</li>
            <li>✔ Climatisation</li>
            <li>✔ Mini Bar</li>
            <li>✔ TV 65” Smart</li>
          </ul>

          <div className="room-price">
            <span>$250</span> / nuit
          </div>

          <Link to="/booking" className="btn-gold">
            Réserver maintenant
          </Link>
        </div>

      </div>
    </section>
  );
}