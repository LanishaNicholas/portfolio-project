import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './About.css';
import profilePic from './pic.jpg';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        {/* About Section */}
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image
              src={profilePic}
              alt="Lanisha Nicholas"
              className="profile-pic"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4 headingtxt">About Me</h2>
            <p className="lead">
              I'm <strong>Lanisha Nicholas</strong>, a results-driven software developer with over four years of
              experience designing and maintaining scalable, user-friendly web applications. I specialize in
              <strong> React.js, JavaScript,</strong> and <strong>Next.js</strong>, with additional expertise in backend
              frameworks like <strong>Node.js</strong> and <strong>Spring Boot</strong>.
            </p>
            <p>
              My journey has taken me through crafting responsive user interfaces, optimizing UI/UX performance, and
              enhancing backend scalability. I thrive in Agile environments, constantly aiming to deliver efficient,
              collaborative solutions.
            </p>
            <p>
              Beyond coding, I enjoy mentoring aspiring developers and exploring new programming languages and
              frameworks to stay at the forefront of technology.
            </p>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="experience-section mt-5">
          <Col>
            <h2 className="headingtxt text-center mb-4">Experience</h2>
            <ul className="timeline">
              <li>
                <h4>Frontend Developer – Peach Group AS, Norway</h4>
                <p className="text-muted">July 2023 – April 2024</p>
                <p>
                  Developed responsive and interactive web interfaces using React.js and Next.js. Integrated REST APIs
                  and optimized UI/UX performance, achieving a 30% improvement in user engagement.
                </p>
              </li>
              <li>
                <h4>Full Stack Developer – Feathersoft Info Solutions, India</h4>
                <p className="text-muted">October 2015 – September 2018</p>
                <p>
                  Built robust service architectures using Java and PHP. Mentored junior developers and improved system
                  stability by 25%.
                </p>
              </li>
              <li>
                <h4>Internship Trainee (Remote) – Scope India, India</h4>
                <p className="text-muted">April 2024 – October 2024</p>
                <p>
                  Contributed to full-stack projects using React.js for frontend and Java for backend. Resolved
                  application bugs to boost usability.
                </p>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="skills-section mt-5">
          <Col>
            <h2 className="headingtxt text-center mb-4">Skills</h2>
            <div className="d-flex justify-content-center flex-wrap">
              <span className="badge bg-primary m-2">React.js</span>
              <span className="badge bg-secondary m-2">JavaScript</span>
              <span className="badge bg-warning m-2">Next.js</span>
              <span className="badge bg-success m-2">Node.js</span>
              <span className="badge bg-danger m-2">Spring Boot</span>
              <span className="badge bg-info m-2">PHP</span>
              <span className="badge bg-dark m-2">Bootstrap</span>
              <span className="badge bg-light text-dark m-2">Tailwind</span>
              <span className="badge bg-primary m-2">REST API</span>
              <span className="badge bg-warning m-2">MySQL</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
