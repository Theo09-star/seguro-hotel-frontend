import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.css";

export default function Booking() {

  const location = useLocation();

  // ✅ Données chambre dynamiques
  const [roomId, setRoomId] = useState(null);
  const [roomData, setRoomData] = useState(null);

  // ✅ Détails séjour
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  // ✅ Infos client
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ✅ Paiement simulé
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentRef, setPaymentRef] = useState("");

  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  /* ================= FETCH ROOM ================= */

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roomIdParam = params.get("roomId");

    if (roomIdParam) {
      setRoomId(Number(roomIdParam));

      fetch(`http://localhost/backend/api/getRoomById.php?id=${roomIdParam}`)
        .then(res => res.json())
        .then(data => setRoomData(data))
        .catch(err => console.error(err));
    }
  }, [location.search]);

  /* ================= CALCUL NUITÉES ================= */

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diffTime = end - start;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const totalPrice = roomData ? nights * roomData.price : 0;

  /* ================= ENVOI ================= */

  const handleBooking = async () => {

    if (!checkIn || !checkOut || !guests || !fullName || !email || !roomId) {
      alert("Veuillez remplir les informations obligatoires.");
      return;
    }

    const bookingData = {
      roomId,
      price: totalPrice,
      checkIn,
      checkOut,
      guests,
      fullName,
      email,
      phone,
      paymentMethod: paymentMethod || "simulated",
      paymentRef: paymentRef || "SIM-" + Math.floor(Math.random() * 100000)
    };

    try {
      const response = await fetch("http://localhost/backend/api/createBooking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Réservation confirmée !");
        window.location.href = "/rooms";
      } else {
        alert("❌ " + result.error);
      }

    } catch (error) {
      console.error(error);
      alert("Erreur serveur.");
    }
  };

  return (
    <section className="booking">

      <div className="booking-header">
        <h1>Réserver votre séjour</h1>
        <p>Vivez l'expérience SEGURO HOTEL</p>
      </div>

      <div className="booking-container">

        {/* ================= FORM ================= */}
        <div className="booking-form">

          {step === 1 && (
            <div className="form-step">
              <h2>Détails du séjour</h2>

              <label>Date d’arrivée</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

              <label>Date de départ</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

              <label>Nombre de personnes</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option value="">Choisir</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <button className="btn-gold" onClick={next}>Continuer</button>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>Informations personnelles</h2>

              <input type="text" placeholder="Nom complet" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />

              <div className="form-buttons">
                <button className="btn-outline" onClick={prev}>Retour</button>
                <button className="btn-gold" onClick={next}>Continuer</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h2>Paiement (Simulé)</h2>

              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Choisir</option>
                <option value="card">Carte Bancaire</option>
                <option value="mtn">MTN Mobile Money</option>
                <option value="moov">Moov Money</option>
              </select>

              <input type="text"
                placeholder="Numéro carte / téléphone"
                value={paymentRef}
                onChange={(e) => setPaymentRef(e.target.value)}
              />

              <div className="form-buttons">
                <button className="btn-outline" onClick={prev}>Retour</button>
                <button type="button" className="btn-gold" onClick={handleBooking}>
                  Confirmer la réservation
                </button>
              </div>
            </div>
          )}

        </div>

        {/* ================= SUMMARY ================= */}
        <div className="booking-summary">
          <h3>Résumé</h3>

          {roomData && (
            <>
              <img
                src={roomData.image}
                alt={roomData.name}
                className="booking-room-image"
              />
              <p><strong>Chambre :</strong> {roomData.name}</p>
            </>
          )}

          {checkIn && <p><strong>Arrivée :</strong> {checkIn}</p>}
          {checkOut && <p><strong>Départ :</strong> {checkOut}</p>}
          {guests && <p><strong>Personnes :</strong> {guests}</p>}
          {nights > 0 && <p><strong>Nuits :</strong> {nights}</p>}
          {totalPrice > 0 && <h2>Total : ${totalPrice}</h2>}

        </div>

      </div>
    </section>
  );
}