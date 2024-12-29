import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import toe from "../../Assets/Projects/toe.jpg";
import todo from "../../Assets/Projects/todo.png"
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Node.js, Express.js, and Socket.io. Have features which allows user for realtime messaging."
              ghLink="https://github.com/Riyashinde646/CHAT-APP"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLog Post Web App"
              description="My personal blog page build with Express.js and Node.js which takes the content from makdown files and renders it using Ejs. Supports creating profile, writing comments and easy to write blogs using markdown."
              ghLink="https://github.com/Riyashinde646/Blogging-WebApp"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Job Portal Application"
              description="Job Portal Application: Built a platform for students to find jobs and recruiters to post openings. Designed with React.js, Tailwind CSS, and Clerk authentication. Designed a feature-rich dashboard for recruiters to manage applications effciently."
              ghLink="https://github.com/Riyashinde646/Job-portal-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toe}
              isBlog={false}
              title="Tic Tac Toe "
              description="Designed a visually appealing and interactive two-player Tic Tac Toe game using HTML, CSS, and JavaScript, featuring real-time move tracking and responsive design for seamless gameplay."
              ghLink="https://github.com/Riyashinde646/Tic-Tac-Toe"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-DO List"
              description="Created a user-friendly task management app with functionality to add, edit, and delete tasks, offering a clean interface and responsive design for an intuitive user experience."
              ghLink="https://github.com/Riyashinde646/to-do-list"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
