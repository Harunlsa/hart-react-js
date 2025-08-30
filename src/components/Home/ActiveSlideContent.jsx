import { useSpring, animated } from "@react-spring/web";
import { useMemo } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ActiveSlideContent = ({ slide }) => {
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-550px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { tension: 200, friction: 66, mass: 10 },
  });

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: {
      tension: 100,
      friction: 24,
      mass: 10,
      //   precision: 0.009,
      //   velocity: 0.01,
    },
  });

  function getTopAndBottomWords(title, highlight) {
    const headingWords = (title + highlight).split(" ");
    const midIndex = Math.floor(headingWords.length / 2);

    let topWords = headingWords.slice(0, midIndex);
    let bottomWords = headingWords.slice(midIndex);

    // Avoid repeating highlight words in bottomWords
    const highlightWords = highlight.split(" ");
    bottomWords = bottomWords.filter((word) => !highlightWords.includes(word));

    bottomWords.push(" ");

    return { topWords, bottomWords };
  }

  const { topWords, bottomWords } = useMemo(
    () => getTopAndBottomWords(slide.title, slide.highlight),
    [slide.title, slide.highlight]
  );

  return (
    <HeroContainer as={Container} fluid>
      <Row className="align-items-center heroRow">
        <Col md={7} className="textCol">
          <animated.div style={textSpring}>
            <SlideText>
              <SlideContent>
                <h1>
                  <span>{topWords.join(" ")}</span>
                  <br />
                  <span>{bottomWords.join(" ")}</span>
                  {/* {`${bottomWords.join(" ")}`} */}
                  <span style={{ color: slide.color }}>{slide.highlight}</span>
                </h1>
                <p>{slide.description}</p>
                <MobileSlideButton className="slide-btn-mobile">
                  <Button as={Link} to={slide.link}>
                    View More
                  </Button>
                </MobileSlideButton>
              </SlideContent>
            </SlideText>
          </animated.div>
        </Col>
        <Col md={5} className="text-center imageCol">
          <animated.div style={imageSpring}>
            <SlideImage src={slide.imgSrc} alt={slide.highlight} />
          </animated.div>
          <MobileOnlyButton>
            <Button as={Link} to={slide.link}>
              View More
            </Button>
          </MobileOnlyButton>
        </Col>
      </Row>
    </HeroContainer>
  );
};

export default ActiveSlideContent;

const HeroContainer = styled.div`
  @media (min-width: 600px) and (orientation: portrait) {
    .heroRow {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 0;
      margin: 0;
      // box-sizing: border-box;
      > .textCol,
      .imageCol {
        width: 100%;
      }
    }
  }

  @media (orientation: landscape) {
    .heroRow .slide-btn-mobile {
      text-align: left;
      margin-left: 8%;
    }
  }
`;

const SlideContent = styled.div`
  color: #fff;
  text-align: center;
  width: 94vw;
  margin: 0 auto;
  // outline: 2px solid red;

  @media (width: 426px) {
    max-width: 90vw;
    margin-top: 80px;
  }

  // tablet
  @media (min-width: 768px) and (orietation: landscape) {
    margin: 0;
    text-align: left;
    max-width: calc(100vw * 0.58);
    padding: 60px;
  }

  @media (min-width: 1024px) and (orietation: landscape) {
    // max-width: calc(100vw * 0.6);
    padding-left: 80px;
  }
  @media (min-width: 1440px) and (orietation: landscape) {
    max-width: 52vw;
    // padding-left: 12px;
    margin-left: 40px;
  }
    
  @media (min-width: 600px) and (orientation: portrait) {
  // margin: 0 auto;
  width: 80vw;
  h1 {
    // text-align: center;
    // outline: 2px solid red;
    max-width: 100%;
    margin: 0 auto;
    // font-size: 5vw;
  }
  p {
    // text-align: center;
    // outline: 2px solid red;
    width: 100%;
    // margin-bottom: 0 !important;
    margin: 0 auto;
  }
    // .slide-btn-mobile {
    // margin-left: 10% !important;
    // }
`;
const SlideText = styled.div`
  h1 {
    font-size: 10.5vw;
    font-weight: 700;
    font-family: "Syne", sans-serif;
    margin-bottom: 15px;

    @media (min-width: 426px) {
      font-size: 6.6vw;
      max-width: 80vw;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    @media (min-width: 600px) and (orientation: portrait) {
      width: 100%;
      font-size: 8vw;
      // margin: 0 auto;
    }
    @media (min-width: 768px) and (orientation: landscape) {
      font-size: 5.6vw;
      text-align: left;
      letter-spacing: 1px;
      margin-bottom: 20px;
      margin-left: 8%;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      font-size: 6vw;
      letter-spacing: 2px;
    }

    @media (min-width: 1440px) and (orientation: landscape) {
      font-size: 5vw;
      letter-spacing: 2px;
      line-height: 80px;
    }
  }
  p {
    font-size: 1.25rem;

    @media (min-width: 426px) {
      max-width: calc(100vw * 0.9);
    }
    @media (min-width: 600px) and (orientation: portrait) {
      font-size: 1.8rem;
      line-height: 2rem;
      width: 100%;
      max-width: 100%;
    }
    @media (min-width: 768px) and (orientation: landscape) {
      max-width: 52vw;
      line-height: 2rem;
      margin-bottom: 30px;
      text-align: left;
      margin-left: 8%;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      font-size: 1.5rem;
      line-height: 2.5rem;
      margin-bottom: 30px;
    }

    @media (min-width: 1440px) and (orientation: landscape) {
      font-size: 1.8rem;
    }
  }
`;
const SlideImage = styled.img`
  slide.highlight == "Coolers" ? margin-top: 10px : 500px;
  max-height: 35vh;
  max-width: 85%;
  @media (min-width: 1024px) {
    max-height: 50vh;
  }
  @media (min-width: 600px) and (orientation: portrait) {
    max-height: 40vh;
    margin: 20px 0;
  }

  @media (min-width: 1440px) and (orientation: landscape){
    max-height: 60vh;
    padding-right: 10px;
  }
`;

const MobileSlideButton = styled.div`
  // margin-left: 100px;
  // color: red;
  @media (max-width: 767px), (orientation: portrait) and (min-width: 600px) {
    display: none;
    width: 10px;
  }
  a {
    padding: 10px 20px;
    font-size: 1.4rem;
    background-color: #f04f47;
    border: none;
    transition: background-color 0.5s;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 426px) {
      font-size: 1.2rem;
    }
  }

  a:hover {
    background-color: #c03d38;
    font-size: scale(2);
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    a {
      // font-size: 1.5rem;
    }
  }
`;

const MobileOnlyButton = styled.div`
  display: none;
  a {
    padding: 8px 46px;
    // margin-bottom: 8px;
    font-size: 1.2rem;
    background-color: #f04f47;
    border: none;
    transition: background-color 0.5s;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
    // @media (max-width: 768px) {
    //   margin-bottom: 15px;
    // }
  }

  a:hover {
    background-color: #c03d38;
    font-size: scale(2);
    cursor: pointer;
  }

  @media (max-width: 767px), (orientation: portrait) and (min-width: 600px) {
    display: block;
    margin-bottom: 20px;
  }

  button {
    font-size: 14px;
    padding: 10px 20px;
    background-color: #f04f47;
    color: white;
    border-radius: 4px;
    border: none;
  }

  button:hover {
    background-color: #c03d38;
  }
`;
