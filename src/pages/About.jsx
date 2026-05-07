import "./About.css";

export default function About() {
  return (
    <section className="about-premium">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>À propos de SEGURO HÔTEL</h1>
          <p>L’élégance africaine au service de l’excellence</p>
        </div>
      </div>

      {/* VISION */}
      <div className="about-section container">
        <div className="about-text">
          <h2>Notre Vision</h2>
          <p>
            SEGURO HÔTEL incarne l’art du luxe moderne allié à l’hospitalité africaine.
            Chaque espace, chaque détail et chaque service sont conçus pour offrir
            une expérience raffinée et inoubliable.
          </p>
        </div>
      </div>

      {/* DIFFERENCE */}
      <div className="about-section about-light">
        <div className="container">
          <h2 className="center-title">Ce qui nous distingue</h2>

          <div className="difference-grid">

            <div className="difference-card">
              <h3>Excellence du Service</h3>
              <p>Une attention personnalisée pour chaque hôte.</p>
            </div>

            <div className="difference-card">
              <h3>Architecture Élégante</h3>
              <p>Des espaces raffinés pensés pour le confort absolu.</p>
            </div>

            <div className="difference-card">
              <h3>Expérience Gastronomique</h3>
              <p>Une cuisine signature aux saveurs uniques.</p>
            </div>

            <div className="difference-card">
              <h3>Bien‑être & Sérénité</h3>
              <p>Spa, détente et atmosphère apaisante.</p>
            </div>

            <div className="difference-card">
              <h3>Luxe & Détente</h3>
              <p>Des espaces raffinés dédiés au repos, à la relaxation et à l’évasion totale.</p>
            </div>

            <div className="difference-card">
              <h3>Expérience Sensorielle</h3>
              <p>Une atmosphère apaisante pensée pour éveiller vos sens et revitaliser votre esprit.</p>
            </div>

          </div>
        </div>
      </div>

      {/* TEAM */}
     {/* TEAM SECTION */}
<div className="about-team container">
  <div className="team-header">
    <h2>Notre Équipe</h2>
    <p>Des experts passionnés au service de votre excellence</p>
  </div>

  <div className="team-grid">

    {/* MEMBER 1 */}
    <div className="team-card">
      <div className="team-image">
        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80" alt="Jean Kouassi"/>
        <div className="team-overlay">
          <div className="team-socials">
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>
      </div>
      <h3>Check Kouassi</h3>
      <p className="team-role">Directeur Général</p>
    </div>

    {/* MEMBER 2 */}
    <div className="team-card">
      <div className="team-image">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Marie Laurent" />
        <div className="team-overlay">
          <div className="team-socials">
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>
      </div>
      <h3>Marie Laurent</h3>
      <p className="team-role">Responsable Accueil</p>
    </div>

    {/* MEMBER 3 */}
    <div className="team-card">
      <div className="team-image">
       <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=600&q=80" alt="David Mensah" />
        <div className="team-overlay">
          <div className="team-socials">
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>
      </div>
      <h3>Anne Mensah</h3>
      <p className="team-role">Chef Exécutif</p>
    </div>

    {/* MEMBER 4 */}
    {/* <div className="team-card">
      <div className="team-image">
        <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="Olivia M." />
        <div className="team-overlay">
          <div className="team-socials">
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>
      </div>
      <h3>Olivia Martinez</h3>
      <p className="team-role">Guest Experience Manager</p>
    </div> */}

  </div>
</div>

    </section>
  );
}