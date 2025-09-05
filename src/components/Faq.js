import React from 'react';
import { Container, Accordion,  } from "react-bootstrap";
import './Faq.css'; // Assuming you have a CSS file for styling

const Faq = () => {
  return (
    <Container className="mt-5 faq-page">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>

      <Accordion defaultActiveKey="0" className="faq-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>🛍 What stores are available in the mall?</Accordion.Header>
          <Accordion.Body>
            Our mall features a wide range of stores including fashion, electronics, home décor, footwear, and more.  
            You can check the <a href="/stores">Store Directory</a> for details.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>🍴 Are there dining options available?</Accordion.Header>
          <Accordion.Body>
            Yes! We have a large food court with local and international cuisine.  
            From fast food to fine dining, there’s something for everyone.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>🎬 Do you have entertainment facilities?</Accordion.Header>
          <Accordion.Body>
            Absolutely! Our mall includes a multiplex cinema, gaming zone, and kids’ play areas to keep the whole family entertained.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>🅿️ Is parking available?</Accordion.Header>
          <Accordion.Body>
            Yes, we provide spacious underground and outdoor parking with 24/7 security.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>⏰ What are the mall opening hours?</Accordion.Header>
          <Accordion.Body>
            The mall is open from <strong>10:00 AM to 10:00 PM</strong>, 7 days a week.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>📞 How can I contact customer support?</Accordion.Header>
          <Accordion.Body>
            You can reach us at <strong>+91 98765 43210</strong> or use our  
            <a href="/contact"> Contact Page</a> for assistance.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Faq