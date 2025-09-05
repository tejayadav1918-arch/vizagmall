import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Directory.css'; // Assuming you have a CSS file for styling

function Directory() {
  const stores = [
    {
      name: "Vizag Mall, Visakhapatnam",
      image: "https://images.unsplash.com/photo-1661260207160-cde2820e3d72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "Dwaraka Nagar, Vizag – 530016",
      phone: "+91 98765 43210",
      mapLink: "https://www.google.com/maps?q=Dwaraka+Nagar+Vizag",
    },
    {
      name: "Vizag Mall, Hyderabad",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/49/b2/e4/transform-your-shopping.jpg?h=1200&s=1&w=1200",
      address: "Banjara Hills, Hyderabad – 500034",
      phone: "+91 91234 56789",
      mapLink: "https://www.google.com/maps?q=Banjara+Hills+Hyderabad",
    },
    {
      name: "Vizag Mall , Vijayawada",
      image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/11/inorbit-mall-hyderabad_0_1200.jpg",
      address: "MG Road, Vijayawada – 520010",
      phone: "+91 99887 66554",
      mapLink: "https://www.google.com/maps?q=MG+Road+Vijayawada",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🛍 Our Branches</h2>
      <Row>
        {stores.map((store, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="store-card shadow-sm">
              <Card.Img variant="top" src={store.image} />
              <Card.Body>
                <Card.Title>{store.name}</Card.Title>
                <Card.Text>
                  📍 {store.address} <br />
                  📞 {store.phone}
                </Card.Text>
                <Button
                  variant="primary"
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Maps
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Directory