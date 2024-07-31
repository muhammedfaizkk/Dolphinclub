import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import './styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="p-4 border-bottom">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div className="d-flex">
            <a href="#" className="me-4 text-reset icon-hover">
              <FaFacebookF />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaTwitter />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaGoogle />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </section>

      {/* Section: Links */}
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row>
            {/* Grid column */}
            <Col md={3} lg={4} xl={3} className="mb-4">
              <img className='footerlogo mb-3' src="./assets/logo/Logoblck1.png" alt="" />
              <p>
                Explore our delightful range of kids' wear. Discover the latest collections designed to bring comfort and style to your little ones.
              </p>
            </Col>

            {/* Grid column */}
            <Col md={2} lg={2} xl={3} className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">Dresses</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Tops & T-Shirts</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Pants & Shorts</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Accessories</a>
              </p>
            </Col>

            {/* Grid column */}
            <Col md={3} lg={2} xl={3} className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <a href="#!" className="text-reset">Size Guide</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Returns & Exchanges</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Shipping Information</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact Us</a>
              </p>
            </Col>

            {/* Grid column */}
            <Col md={4} lg={3} xl={3} className="mb-md-0 mb-4">
              {/* Contact */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> 123 Kids Street, Playtown</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                dolphinclub@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +1 234 567 890</p>
              <p><i className="fas fa-print me-3"></i> +1 234 567 891</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://example.com">dolphinclub@example.com</a>
      </div>
    </footer>
  );
};

export default Footer;
