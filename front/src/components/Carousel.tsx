import { useRef, useState } from 'react';
import type { Media } from '../types';
import '../styles/carousel.css';

interface CarouselProps {
  title: string;
  icon: React.ReactNode;
  items: Media[];
}

const SCROLL_AMOUNT = 900;

export default function Carousel({ title, icon, items }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir: 'prev' | 'next') => {
    trackRef.current?.scrollBy({ left: dir === 'next' ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{icon} {title}</h2>
      <div className="carousel-wrapper">
        {canPrev && (
          <button className="carousel-btn prev" onClick={() => scroll('prev')} aria-label="Précédent">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        )}
        <div className="carousel-track" ref={trackRef} onScroll={updateArrows}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="carousel-item-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        {canNext && (
          <button className="carousel-btn next" onClick={() => scroll('next')} aria-label="Suivant">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
