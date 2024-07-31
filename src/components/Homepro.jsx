import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import './styles/homepro.css';
import Cardpro from "./Cardpro";

function Homepro() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSelect = (key) => setActiveTab(key);

  return (
    <Container className="homepro-container">
      <Row className="align-items-center">
        <Col>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              className="homepro-tabs"
              activeKey={activeTab}
              onSelect={handleSelect}
            >
              <Tab eventKey="all" title="All" />
              <Tab eventKey="girls" title="Girls" />
              <Tab eventKey="boys" title="Boys" />
            </Tabs>
            <Button variant="dark" onClick={handleShow} className="homepro-filter-button">
              Filter
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="text-center">
          {activeTab === "all" && <h3>All</h3>}
          {activeTab === "girls" && <h3>Girls</h3>}
          {activeTab === "boys" && <h3>Boys</h3>}
        </Col>
      </Row>

      <div className="homepro-cards-sections">
        <Row className="justify-content-center">
          {activeTab === "all" && (
            Array(8).fill(null).map((_, index) => (
              <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center" key={index}>
                <Cardpro />
              </Col>
            ))
          )}
          {activeTab === "girls" && (
            Array(12).fill(null).map((_, index) => (
              <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center" key={index}>
                <Cardpro />
              </Col>
            ))
          )}
          {activeTab === "boys" && (
            Array(4).fill(null).map((_, index) => (
              <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center" key={index}>
                <Cardpro />
              </Col>
            ))
          )}
        </Row>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="homepro-filter-options">
            <h5>Select Size</h5>
            <DropdownButton id="dropdown-size" title="Select Size" className="homepro-dropdown-button mb-3">
              <Dropdown.Item href="#/size-small">Small</Dropdown.Item>
              <Dropdown.Item href="#/size-medium">Medium</Dropdown.Item>
              <Dropdown.Item href="#/size-large">Large</Dropdown.Item>
              <Dropdown.Item href="#/size-xlarge">X-Large</Dropdown.Item>
            </DropdownButton>

            <h5>Select Price</h5>
            <DropdownButton id="dropdown-price" title="Select Price" className="homepro-dropdown-button">
              <Dropdown.Item href="#/price-below20">Below $20</Dropdown.Item>
              <Dropdown.Item href="#/price-20to50">$20 - $50</Dropdown.Item>
              <Dropdown.Item href="#/price-50to100">$50 - $100</Dropdown.Item>
              <Dropdown.Item href="#/price-above100">Above $100</Dropdown.Item>
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer className="homepro-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Homepro;
