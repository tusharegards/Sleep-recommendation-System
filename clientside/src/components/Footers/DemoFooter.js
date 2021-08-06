
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  rel="noreferrer"
                  href="https://tusharchives.web.app/"
                  target="_blank"
                >
                  Tushar
                </a>
              </li>
              <li>
                <a
                rel="noreferrer"
                  href="https://tusharchives.web.app/"
                  target="_blank"
                >
                  My Website
                </a>
              </li>
              <li>
                <a
                rel="noreferrer"
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Tushar Sparsh Anand
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
