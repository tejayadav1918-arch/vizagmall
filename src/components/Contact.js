import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Nav } from "react-bootstrap";
import './Support.css'

const Contact = () => {
     const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("shopping");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback on ${category}!`);
  };
  return (
    <Container className="mt-5 feedback-page">
      <Row>
        {/* Feedback Form */}
        <Col md={7}>
          <Card className="p-4 shadow-sm feedback-card">
            <h2 className="mb-4">Share Your Experience</h2>

            {/* Category Tabs */}
            <Nav variant="tabs" activeKey={category} onSelect={(k) => setCategory(k)}>
              <Nav.Item>
                <Nav.Link eventKey="shopping">Shopping</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dining">Service</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="entertainment">Parking</Nav.Link>
              </Nav.Item>
            </Nav>

            <Form onSubmit={handleSubmit} className="mt-4">
              {/* Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Rate your experience:</Form.Label>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={star <= rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Feedback Text */}
              <Form.Group className="mb-3">
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={`Write about your ${category} experience`}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Submit Feedback
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Support Options */}
        <Col md={5}>
          <Card className="p-4 shadow-sm support-card">
            <h2 className="mb-4">Need Help?</h2>
            <p>💬 <a href="/chat">Live Chat with Support</a></p>
            <p>📱 <a href="https://wa.me/917799571879" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
            <p>❓ <a href="/faq">Visit our FAQ Page</a></p>
            <hr />
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/offers">Latest Offers</a></li>
              <li><a href="/events">Upcoming Events</a></li>
              <li><a href="/stores">Store Directory</a></li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact