import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './styles/bannerSection.css';

const BannerSection = () => {
  return (
    <Container fluid className="banner-container p-0">
      <Row>
        <Col className="p-0 position-relative">
          <Image 
            src="./assets/images/dolphinbanner01.jpg" 
            alt="Banner" 
            fluid 
            className="banner-image d-sm-block d-none" 
          />
          <Image 
            src="./assets/images/mobbanner2.jpg" 
            alt="Banner" 
            fluid 
            className="banner-image d-sm-none" 
          />
          <div className="banner-content text-center">
            <p className="banner-title ">Discover Adorable Kids' Outfits</p>
            <p className="banner-subtitle">Comfort Meets Style</p>
            <Button variant="dark" className="banner-button">Shop Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSection;
