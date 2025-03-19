import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jsbank from "../../Assets/Projects/jsbank.jpg";
import inventory from "../../Assets/Projects/inventory.jpeg";
import store from "../../Assets/Projects/store.png";
import jsstore from "../../Assets/Projects/jsstore.png";
import website from "../../Assets/Projects/website.jpeg";
import social from "../../Assets/Projects/social.jpeg";

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
              imgPath={inventory}
              isBlog={false}
              title="Simple Inventory System"
              description="A Simple Inventory System to manage the inventory of a store.Developed by Jquery,JSON,PHP"
              ghLink="https://github.com/PoojithRangineni/Simple-Inventory-System/"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsbank}
              isBlog={false}
              title="My JSBank"
              description="A Simple Bank Transaction project using HTML, CSS, and JavaScript. It is a simple project that allows you to deposit and withdraw money from your account."
              ghLink="https://github.com/PoojithRangineni/MyBank/"
              demoLink="https://poojithrangineni.github.io/MyBank/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="My Store Template"
              description="It is Store template project using HTML, CSS."
              ghLink="https://github.com/PoojithRangineni/MyStaticStore"
              demoLink="https://poojithrangineni.github.io/MyStaticStore/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsstore}
              isBlog={false}
              title="My JSStore Tempalte"
              description="It is also a simple store template project using HTML, CSS, and JavaScript but it consist some functionalities."
              ghLink="https://github.com/PoojithRangineni/MyJSStore"
              demoLink="https://poojithrangineni.github.io/MyJSStore/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="My Static Website"
              description="It is a static website blog. Developed using Bootstrap,HTML,CSS "
              ghLink="https://github.com/PoojithRangineni/MyStaticWebsite"
              demoLink="https://poojithrangineni.github.io/MyStaticWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media Template"
              description="It is a Sample Project on Social Media. It consists of accounts and data shared by accounts"
              ghLink="https://github.com/PoojithRangineni/socialmedia-sample"
              demoLink="https://poojithrangineni.github.io/socialmedia-sample/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
