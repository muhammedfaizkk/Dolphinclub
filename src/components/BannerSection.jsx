import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './styles/bannerSection.css';

const BannerSection = () => {
  return (
    <Container fluid className="banner-container">
      <Row className="align-items-center justify-content-center text-center text-md-left">
        <Col md={6} xs={12} className="order-2 order-md-1">
          <p className="banner-title">Welcome to Our Kids Wear Collection</p>
          <p className="banner-subtitle">Stylish and Comfortable Outfits</p>
          <Button variant="dark" className="banner-button">Shop Now</Button>
        </Col>
        <Col md={6} xs={12} className="d-flex justify-content-center order-1 order-md-2 mb-md-0 mb-3">
          <Image src="./assets/images/group-beautiful-girls-boys-paste.png" alt="Banner" fluid className="banner-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSection;
