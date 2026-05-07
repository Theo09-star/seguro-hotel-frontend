// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from "./Testimonials";
import { Calendar, Users, MapPin, Star, Award, Wifi, Coffee } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const featuredRooms = [
    {
      id: 1,
      name: 'Suite Présidentielle',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800',
      price: '250',
      rating: 5
    },
    {
      id: 2,
      name: 'Chambre Deluxe',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
      price: '150',
      rating: 5
    },
    {
      id: 3,
      name: 'Chambre Standard',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
      price: '80',
      rating: 4
    },

    {
      id: 4,
      name: 'Suite Lune de Miel',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      price: '280',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
          SEGURO
            <span className="gold-text">HÔTEL</span>
          </h1>
          <p className="hero-subtitle">
            Vivez une expérience inoubliable dans le luxe et le confort
          </p>
          
          {/* BOOKING FORM */}
          <div className="booking-widget">
            <div className="booking-field">
              <Calendar className="icon" />
              <div>
                <label>Arrivée</label>
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
            </div>
            
            <div className="booking-field">
              <Calendar className="icon" />
              <div>
                <label>Départ</label>
                <input 
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>
            
            <div className="booking-field">
              <Users className="icon" />
              <div>
                <label>Personnes</label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  <option value="1">1 Personne</option>
                  <option value="2">2 Personnes</option>
                  <option value="3">3 Personnes</option>
                  <option value="4">4+ Personnes</option>
                </select>
              </div>
            </div>
            
          <Link
            to={`/booking?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
            className="btn-gold"
          >
            Réserver Maintenant
          </Link>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" alt="Hôtel" />
              <div className="award-badge">
                <Award size={40} />
                <span>5 Étoiles</span>
              </div>
            </div>
            
            <div className="welcome-content">
              <span className="section-label">Découvrez</span>
              <h2>Un Séjour d'Exception</h2>
              <p>
                Niché au cœur de la nature, notre hôtel combine luxe moderne et 
                hospitalité traditionnelle. Chaque détail a été pensé pour créer 
                une expérience mémorable.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <Wifi className="feature-icon" />
                  <span>WiFi Ultra-Rapide</span>
                </div>
                <div className="feature-item">
                  <Coffee className="feature-icon" />
                  <span>Petit-déjeuner inclus</span>
                </div>
                <div className="feature-item">
                  <MapPin className="feature-icon" />
                  <span>Emplacement idéal</span>
                </div>
              </div>
              
              <Link to="/about" className="btn-outline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* ROOMS SECTION */}
<section className="featured-rooms">
  <div className="container">
    <div className="section-header">
      <span className="section-label">Nos Chambres</span>
      <h2>Hébergements de Luxe</h2>
    </div>
    
    <div className="rooms-grid">
      {featuredRooms.map(room => (
        <div key={room.id} className="room-card">
          
          <div className="room-image">
            <img src={room.image} alt={room.name} />
            <div className="room-overlay">
              <Link 
                to={`/rooms/${room.id}`} 
                className="btn-white"
              >
                Voir détails
              </Link>
            </div>
          </div>
          
          <div className="room-info">
            <div className="room-header">
              <h3>{room.name}</h3>
              <div className="rating">
                {[...Array(room.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill="#D4AF37" 
                    color="#D4AF37" 
                    size={16} 
                  />
                ))}
              </div>
            </div>
            
            <div className="room-footer">
              <div className="price">
                <span className="amount">${room.price}</span>
                <span className="period">/nuit</span>
              </div>

              <Link
                to={`/booking?roomId=${room.id}&room=${encodeURIComponent(room.name)}&price=${room.price}&maxGuests=${room.max_guests}`}
                className="btn-book"
              >
                Réserver
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ✅ BOUTON VOIR PLUS */}
    <div className="view-more-container">
      <Link to="/rooms" className="btn-view-more">
        Voir plus de chambres →
      </Link>
    </div>

  </div>
</section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Clients Satisfaits</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Chambres Luxueuses</p>
            </div>
            {/* <div className="stat-item">
              <h3>15+</h3>
              <p>Années d'Expérience</p>
            </div> */}
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Service Client</p>
            </div>
          </div>
        </div>
      </section>

       <Testimonials />
    </div>
  );
}