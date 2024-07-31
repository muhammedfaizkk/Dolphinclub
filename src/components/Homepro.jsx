import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import './styles/homepro.css';
import Cardpro from "./Cardpro";

function Homepro() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // State to manage active tab

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleSelect = (key) => setActiveTab(key); // Handle tab change

  return (
    <Container className="homepro-container">
      <Row>
        <Col xs={12}>
          <Row className="align-items-center">
            <Col lg={10} md={9} sm={8} xs={12}>
              <Tabs
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className="homepro-tabs mb-3"
                activeKey={activeTab}
                onSelect={handleSelect}
              >
                <Tab eventKey="all" title="All">
                  <div className='text-center'>All</div>
                </Tab>
                <Tab eventKey="girls" title="Girls">
                  <div className='text-center'>Girls</div>
                </Tab>
                <Tab eventKey="boys" title="Boys">
                  <div className='text-center'>Boys</div>
                </Tab>
              </Tabs>
            </Col>
            <Col lg={2} md={3} sm={4} xs={12} className="homepro-right-side">
              <Button variant="dark" onClick={handleShow} className="w-100">
                Filter
              </Button>
            </Col>
          </Row>

          {/* Cards Sections */}
          <div className="homepro-cards-sections d-flex justify-content-center align-items-center">
            <Row >
              {activeTab === "all" && (
                <>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                </>
              )}
              {activeTab === "girls" && (
                <>
                  {/* Replace with actual content for Girls */}
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                </>
              )}
              {activeTab === "boys" && (
                <>
                  {/* Replace with actual content for Boys */}
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                  <Col md={3} sm={6} xs={12} className="homepro-card d-flex justify-content-center align-items-center">
                    <Cardpro />
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
      </Row>

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
