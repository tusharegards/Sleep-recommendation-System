import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader(props) {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + props.img + ")",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">{props.heading}</h1>
            </div>
            <h2 className="presentation-subtitle text-center">{props.title}</h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + props.overlay + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
