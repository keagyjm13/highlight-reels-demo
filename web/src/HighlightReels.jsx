import { useEffect, useState } from 'react';

export default function HighlightReels() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const urls = [
      'https://keagyjm13.github.io/highlight-reels-demo/metadata/messi_flames.json'
      // Add more metadata URLs here
    ];

    Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      .then(data => setCards(data));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <div key={card.name} style={{ border: '2px solid gold', padding: '10px', width: '200px' }}>
          <img src={card.image} alt={card.name} style={{ width: '100%' }} />
          <h3>{card.name}</h3>
          <p>{card.description}</p>
          <p><strong>Player:</strong> {card.player}</p>
          <p><strong>Rarity:</strong> {card.rarity}</p>
        </div>
      ))}
    </div>
  );
}
