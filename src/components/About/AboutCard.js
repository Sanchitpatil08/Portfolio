import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanchit Patil </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing my degree in B.E in Computer Engineering.
            <br />
            This is my digital space where I showcase my journey, skills, and projects that reflect my love for coding and problem-solving.

            <br />
            <br />
            Here, you'll find:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />💻Projects that I’ve worked on, blending creativity and technology
            </li>
            <li className="about-activity">
              <ImPointRight />📚 Insights into my academic background and technical expertise
            </li>
            <li className="about-activity">
              <ImPointRight />🎯 My experiences and milestones as a developer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Feel free to explore, learn more about my work, and get in touch. Let’s create something amazing together! 😊
          </p>
          <footer className="blockquote-footer">Riya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
