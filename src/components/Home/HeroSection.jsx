import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import racksGroup from "../../assets/images/hero-bg/bg-hero-blue.png";
const HeroSection = () => {
  const slides = [
    {
      background: "../src/assets/images/hero-bg/bg-hero-green.png",
      title: "Organise with Versatile ",
      highlight: "Racks",
      description:
        "Durable and flexible plastic racks perfect for efficient storage and organization in any setting.",
      imgSrc: { racksGroup },
      color: "#bcff33",
      link: "products/Racks",
      // minWidth: "100%",
    },
    {
      background: "../src/assets/images/hero-bg/bg-hero-blue.png",
      title: "Efficient and Reliable ",
      highlight: "Coolers",
      description:
        "Keep your items fresh and cool with our high-performance plastic coolers, ideal for all occasions.",
      imgSrc: "../src/assets/images/product-group/coolers6.png",
      color: "#914391",
      link: "products/Coolers",
      minWidth: "80%",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <HeroWrapper>
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            active={index === currentSlide}
            bg={slide.background}
          >
            <Container fluid>
              <Row className="align-items-center">
                <Col md={7}>
                  <SlideContent>
                    <h1>
                      {slide.title}
                      <span style={{ color: slide.color }}>
                        {slide.highlight}
                      </span>
                    </h1>
                    <p>{slide.description}</p>
                    <Button as={Link} to={slide.link}>
                      View More
                    </Button>
                  </SlideContent>
                </Col>
                <Col md={5} className="text-center slideImage">
                  <SlideImage
                    src={slide.imgSrc}
                    alt={slide.highlight}
                    minWidth={slide.minWidth}
                  />
                </Col>
              </Row>
            </Container>
          </Slide>
        ))}
        <ControlButton onClick={prevSlide} left>
          &#x2190;
        </ControlButton>
        <ControlButton onClick={nextSlide}>&#x2192;</ControlButton>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  width: 100vw;
  height: 75vh;
  overflow: hidden;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.22, 1.61, 0.36, 1);
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    background-attachment: fixed;
  }
  @media (max-width: 768px) {
    height: 100vh;
    // margin-top: -10px;
  }
  @media (max-width: 576px) {
    // height: auto;
    // margin-top: -100px;
  }
`;

const Slide = styled(Container)`
  min-width: 100vw;
  height: 75vh;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 3rem;
  transition: transform 0.8s ease-in-out;
  padding: 0 6%;
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const SlideContent = styled.div`
  max-width: calc(100vw * 0.5);
  padding: 0 12px;

  h1 {
    font-size: 56px;
    letter-spacing: 2px;
    font-weight: 700;
    line-height: 56px;
    font-family: "Syne", sans-serif;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }

  a {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #f04f47;
    border: none;
    transition: background-color 0.5s;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 4px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  a:hover {
    background-color: #c03d38;
    font-size: scale(2);
  }
  @media (max-width: 768px) {
    // height: 100vh;
    padding-top: 15px;
  }
  @media (max-width: 576px) {
    padding: 0;
    margin-top: -32px;
    text-align: center;
    max-width: 100%;
    h1 {
      font-size: 40px;
      letter-spacing: 1px;
      line-height: 44px;
      margin-bottom: 20px;
    } 

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
  .slideImage {
    @media (max-width: 768px) {
      max-width: 70%;
      margin: 0 auto;
      height: auto;
  }}
  .slideImage {
    @media (max-width: 576px) {
      max-width: 100%;
      margin: 0;
      height: auto;
  }}
`;

const SlideImage = styled.img`
  max-width: ${(props) => props.minWidth || "100%"};
  height: auto;
  padding-left: 10%;
  @media (max-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    max-width: 80%;
    height: auto;
    padding: 0;
    margin-top: 20px;
  }
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 0.25rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }
`;
