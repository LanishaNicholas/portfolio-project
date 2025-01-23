import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import './Home.css'
import img1 from './img1.webp';
import pic from './pic.jpg';


const Home = () => {
  return (
    <section
      id="home"
      className="text-center py-5"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container>
        <Row className="align-items-center" style={{ minHeight: "80vh" }}>
          <Col>
            <Image
              src={pic}
              roundedCircle
              alt="Lanisha Nicholas"
              className="mb-4"
              style={{ width: "150px", height: "150px", border: "3px solid white" }}
            />
            <h1 className="display-3 fw-bold">Hello, I'm Lanisha Nicholas</h1>
            <p className="lead">
              Frontend Developer | React.js Enthusiast | Passionate about Creating Seamless User Experiences
            </p>
            <Row className="justify-content-center">
              <Col md={6}>
                <p>
                  I specialize in crafting responsive, user-friendly web applications with React.js and modern
                  technologies. Let's collaborate and build something amazing!
                </p>
              </Col>
            </Row>
            <div className="mt-4">
              <Button href="/about" variant="light" size="lg" className="me-2">
                View My Work
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Get in Touch
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3 className="mb-3">Technologies I Work With</h3>
            <div className="d-flex justify-content-center flex-wrap">
              <span className="badge bg-primary m-2">React.js</span>
              <span className="badge bg-secondary m-2">JavaScript</span>
              <span className="badge bg-danger m-2">PHP</span>
              <span className="badge bg-warning m-2">Java</span>
              <span className="badge bg-info m-2">Node Js</span>
              <span className="badge bg-success m-2">Next.js</span>
              <span className="badge bg-danger m-2">HTML5</span>
              <span className="badge bg-warning m-2">CSS3</span>
              <span className="badge bg-info m-2">Bootstrap</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
