import React from "react";
import './card.css';

export default function Card({ text, heading, image }) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
      };
    
  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front" style={cardStyle}>{heading}</div>
        <div className="back">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
