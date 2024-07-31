import React, { useState } from 'react';
import './styles/cardpro.css';
import { Card } from 'react-bootstrap';

function Cardpro() {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className="cardpro-container border-0"
      style={{ width: '18rem' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="cardpro-image-container">
        <div className="cardpro-offer-label">Offer 5%</div>
        <Card.Img
          variant="top"
          src={hovered ? "./assets/products/happy-child-little-girl-standing.jpg" : "./assets/products/productImg.png"}
          className="cardpro-card-image"
        />
      </div>
      <Card.Body className="cardpro-body">
        <Card.Title className="cardpro-title">T-Shirts</Card.Title>
        <Card.Text>
          <div className="cardpro-discount-price">
            $75.00 <span className="cardpro-original-price">$100.00</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardpro;
