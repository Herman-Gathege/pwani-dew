import React from 'react';
import { Container, Row, Col, Button, Card, Form, Accordion } from 'react-bootstrap';
import refillImage from '../assets/refill.jpeg';
import deliverimage from '../assets/delivery.jpeg';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Welcome to Pwani Dew</h1>
            <p className="lead">
              Discover the purity of nature with our premium water sourced from the heart of Pwani.
              Stay hydrated, stay healthy, and enjoy the refreshing taste of nature's finest.
            </p>
            <Button variant="primary" size="lg" href="/register">Get Started</Button>
          </Col>
          <Col md={6}>
            <img src={refillImage} alt="Pwani Dew" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* About Business Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={7} className="d-flex justify-content-center mb-3 mb-md-0">
            <img src={deliverimage} alt="Pwani Dew" className="img-fluid" />
          </Col>
          <Col md={5}>
            <h2 className="text-center">About Pwani Dew</h2>
            <p className="lead text-center">
              At Pwani Dew, we are committed to delivering the purest and most refreshing water to you.
              Our water is sourced from the pristine heart of Pwani, ensuring every drop is naturally pure, 
              clean, and full of life. We believe in sustainability, health, and the power of nature.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  "Pwani Dew has changed my life. The water is incredibly fresh and pure, and I feel healthier than ever."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  "I love the taste of Pwani Dew. It's refreshing and I can feel the difference in my energy levels every day."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Mark Johnson</Card.Title>
                <Card.Text>
                  "I've been drinking Pwani Dew for months now, and I wouldn't go back to any other water brand."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Us Section */}
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">Contact Us</h2>
            <p className="lead text-center">We would love to hear from you. Please reach out to us using the form below.</p>
            <Form className="mx-auto" style={{ maxWidth: '600px' }}>
              <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message here" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-100">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Subscription Section */}
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center">
            <h2>Get Pwani Dew Delivered</h2>
            <p className="lead">
              Subscribe to our delivery service and never run out of fresh, pure water again!
            </p>
            <Button variant="primary" size="lg" href="/subscribe">Subscribe Now</Button>
          </Col>
        </Row>
      </Container>

      {/* FAQ Section */}
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">Frequently Asked Questions</h2>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Where do you source your water?</Accordion.Header>
                <Accordion.Body>
                  Our water is sourced from the pristine heart of Pwani, ensuring the highest quality and purity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you deliver outside of Pwani?</Accordion.Header>
                <Accordion.Body>
                  Currently, we only offer delivery within Pwani, but we are expanding to new areas soon.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I subscribe to a delivery plan?</Accordion.Header>
                <Accordion.Body>
                  You can easily subscribe to a delivery plan by visiting our Subscription page and selecting a plan that suits you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* Sustainability Section */}
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">Our Commitment to Sustainability</h2>
            <p className="lead text-center">
              At Pwani Dew, we believe in sustainability. We use eco-friendly bottles, support local communities, and take steps to reduce our carbon footprint.
            </p>
            <Button variant="primary" href="/sustainability" className="d-block mx-auto">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
