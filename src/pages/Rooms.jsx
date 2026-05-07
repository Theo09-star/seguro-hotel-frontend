import { Link } from 'react-router-dom';
import { Bed, Users, Maximize, Star } from 'lucide-react';
import './Rooms.css';
import { useEffect, useState } from "react";
import { API_URL } from "../config";

export default function Rooms() {

  const [filter, setFilter] = useState('all');
  const [priceRange, setPriceRange] = useState(500);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/getRooms.php`)
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error("Erreur API :", err));
  }, []);

  const filteredRooms = rooms.filter(room => {
    const categoryMatch = filter === 'all' || room.category === filter;
    const priceMatch = Number(room.price) <= Number(priceRange);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="rooms-page">

      <div className="rooms-header">
        <h1>Nos Chambres</h1>
        <p>Découvrez le confort et l'élégance de nos hébergements</p>
      </div>

      <div className="rooms-container">

        <aside className="filters-sidebar">

          <div className="filter-section">
            <h3>Catégorie</h3>
            <div className="filter-options">
              <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Toutes</button>
              <button className={filter === 'standard' ? 'active' : ''} onClick={() => setFilter('standard')}>Standard</button>
              <button className={filter === 'deluxe' ? 'active' : ''} onClick={() => setFilter('deluxe')}>Deluxe</button>
              <button className={filter === 'suite' ? 'active' : ''} onClick={() => setFilter('suite')}>Suite</button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Prix Maximum: ${priceRange}</h3>
            <input
              type="range"
              min="50"
              max="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
            <div className="price-labels">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>

        </aside>

        <div className="rooms-content">

          <div className="results-header">
            <p>{filteredRooms.length} chambres disponibles</p>
          </div>

          <div className="rooms-grid-modern">
            {filteredRooms.map(room => (

              <div key={room.id} className="room-card-modern">

                <div className="room-badge-container">
                  {!room.available && (
                    <span className="unavailable-badge">Complet</span>
                  )}
                </div>

                <div className="room-image-modern">
                  <img src={room.image} alt={room.name} />
                </div>

                <div className="room-content-modern">

                  <div className="room-title-section">
                    <h3>{room.name}</h3>
                    <div className="stars">
                      {[...Array(room.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                      ))}
                    </div>
                  </div>

                  <div className="room-specs">
                    <div className="spec">
                      <Maximize size={18} />
                      <span>{room.size}m²</span>
                    </div>
                    <div className="spec">
                      <Bed size={18} />
                      <span>{room.beds} lit(s)</span>
                    </div>
                    <div className="spec">
                      <Users size={18} />
                      <span>{room.guests} pers.</span>
                    </div>
                  </div>

                  <div className="room-footer-modern">
                    <div className="price-section">
                      <span className="from">À partir de</span>
                      <div className="price-amount">
                        <span className="currency">$</span>
                        <span className="number">{room.price}</span>
                        <span className="period">/nuit</span>
                      </div>
                    </div>

                    <div className="action-buttons">
                      <Link to={`/rooms/${room.id}`} className="btn-details">
                        Détails
                      </Link>

                      {room.available ? (
                        <Link
                          to={`/booking?roomId=${room.id}`}
                          className="btn-reserve"
                        >
                          Réserver
                        </Link>
                      ) : (
                        <button className="btn-reserve disabled-btn" disabled>
                          Indisponible
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              </div>

            ))}
          </div>

        </div>
      </div>
    </div>
  );
}