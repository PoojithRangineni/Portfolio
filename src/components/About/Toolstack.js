import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPowerbi,
  SiTableau,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
              <SiPowerbi />
            </Col>
      
            <Col xs={4} md={2} className="tech-icons">
              <SiTableau />
            </Col>  
    </Row>
  );
}

export default Toolstack;
