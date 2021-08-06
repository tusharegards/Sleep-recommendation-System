
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">API document to add sleep components</h2>
              <p className="description">
                This is the  api where you will find options 
                for linking routes and running sleep engines
                 to your choice andgenerating a sleep score 
                 for your last nights sleep. Continue with the 
                 api key against the desired routes to fully 
                 customize your sleep and make use of the application.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
