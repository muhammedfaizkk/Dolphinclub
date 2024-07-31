import React from 'react';
import './styles/cardpro.css';
import { Card } from 'react-bootstrap';

function Cardpro() {
  return (
    <Card className="cardpro-container border-0" style={{ width: '18rem' }}>
      <div className="cardpro-image-container">
        <div className="cardpro-offer-label">Offer 5%</div>
        <Card.Img 
          variant="top" 
          src="./assets/products/productImg.png" 
          className="cardpro-card-image" 
        />
      </div>
      <Card.Body className="cardpro-body">
        <Card.Title className="cardpro-title">T-Shirts</Card.Title>
        <Card.Text>
          <div className="cardpro-original-price">
            Original Price: $100.00
          </div>
          <div className="cardpro-discount-price">
            Discount Price: $75.00
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardpro;
