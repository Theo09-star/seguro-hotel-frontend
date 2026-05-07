import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contactez SEGURO HOTEL</h1>
        <p>Nous sommes à votre écoute 24h/24</p>
      </div>

      {/* MAIN SECTION */}
      <div className="contact-container">

        {/* FORMULAIRE */}
        <div className="contact-form">
          <h2>Envoyez-nous un message</h2>

          <form>
            <div className="form-group">
              <input type="text" placeholder="Nom complet" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <input type="tel" placeholder="Téléphone" />
            </div>

            <div className="form-group">
              <textarea placeholder="Votre message..." rows="5"></textarea>
            </div>

            <button type="submit" className="btn-gold">
              Envoyer le message
            </button>
          </form>
        </div>

        {/* INFOS */}
        <div className="contact-info">
          <h2>Nos Coordonnées</h2>

          <div className="info-item">
            <h4>Adresse</h4>
            <p>Abidjan, Côte d'Ivoire</p>
          </div>

          <div className="info-item">
            <h4>Téléphone</h4>
            <p>+2290143521784</p>
          </div>

          <div className="info-item">
            <h4>Email</h4>
            <p>contact@segurohotel.com</p>
          </div>

          {/* GOOGLE MAP */}
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Abidjan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/22943521784"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </section>
  );
}