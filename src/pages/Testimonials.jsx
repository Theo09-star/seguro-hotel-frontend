import { useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Marie K.",
    role: "Entrepreneure",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Une expérience exceptionnelle ! Le service est impeccable et les chambres sont d’un confort absolu.",
  },
  {
    name: "Jean M.",
    role: "Homme d'affaires",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Le meilleur hôtel que j’ai visité en Afrique. Luxe, calme et professionnalisme.",
  },
  {
    name: "Aïcha D.",
    role: "Voyageuse",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Le spa est incroyable et le restaurant gastronomique est digne d’un 5 étoiles.",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="testimonials-premium">

      <div className="testimonials-header">
        <h2>Avis des Clients</h2>
        <p>Des expériences inoubliables racontées par nos hôtes</p>
      </div>

      <div className="testimonial-wrapper">
        <div className="testimonial-track" ref={trackRef}>
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.image} alt={item.name} />
              <p className="testimonial-text">“{item.text}”</p>
              <div className="stars">★★★★★</div>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}