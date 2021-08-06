import React from "react";

// reactstrap components
import {
  Card,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

const items = [
    {
      src: require("assets/img/understanding sleep.png").default,
      altText: "Understand your sleep and recreate it with help from",
      caption: "Understand your sleep and recreate it with help from Sleep-eon",
    },
    {
      src: require("assets/img/phases.png").default,
      altText: "understand the phases of sleep and how smart alarm works to ease you off from your sleep",
      caption: "PHASES O SLEEP",
    },
    {
      src: require("assets/img/sleepday.png").default,
      altText: "understand the phases of sleep and how smart alarm works to ease you off from your sleep",
      caption: "DID YOU KNOW",
    }, 
    {
      src: require("assets/img/sleephrs.png").default,
      altText: "understand the phases of sleep and how smart alarm works to ease you off from your sleep",
      caption: "DID YOU KNOW",
    },
    
  ];

function Presentation() {
    const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/purple.jpg").default + ")",
        }}
      >
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Presentation;
