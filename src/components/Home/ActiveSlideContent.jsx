import { useSpring, animated } from "@react-spring/web";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useSpring, animated } from "@react-spring/web";
// console.log(animated.div);
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

  const heading = slide.title + slide.highlight;
  const headingLength = heading.length;
  const headingWords = heading.split(" ");
  const topWordsCount = Math.floor(headingLength / 2);

  function getTopWords(topWordsCount, highlight) {
    const topWords = [];
    let topCount = 0;

    for (let i = 0; i < headingWords.length; i++) {
      const word = headingWords[i];

      if (topCount + word.length <= topWordsCount || topCount == 0) {
        topWords.push(word);
        topCount = topCount + word.length;
      } else {
        break;
      }
    }
    highlight = highlight.split(" ");
    console.log("Highlight; ", highlight);
    const bottomWords = headingWords.slice(topWords.length);
    const wordsToRemove = [];
    for (let i = 0; i < bottomWords.length; i++) {
      if (bottomWords.includes(highlight[i])) {
        wordsToRemove.push(highlight[i]);
        // bottomWords.pop(highlight[i]);
        // console.log("Bottomwords pop", bottomWords.pop());
        // console.log("Bottom words: ", bottomWords);
        // console.log("highlight: ", highlight);
        // console.log("Words to remove: ", wordsToRemove);
      }
    }
    for (let i = 0; i < wordsToRemove.length; i++) {
      bottomWords.pop();
    }
    console.log(`Top words: ${topWords}. \nBottom words: ${bottomWords}`);

    bottomWords.push(" ");
    return { topWords, bottomWords };
  }

  // }
  // else if (headingWords[0] >= topWordsCount){
  //   return `${headingWords[0]} ${headingWords[1]}`;
  // }

  return (
    <Container fluid style={heroStyle}>
      <Row className="align-items-center">
        <Col md={7}>
          <animated.div style={textSpring}>
            <SlideText>
              <SlideContent>
                <h1>
                  <span>
                    {getTopWords(topWordsCount, slide.highlight).topWords.join(
                      " "
                    )}
                  </span>
                  <br />
                  {`${getTopWords(
                    topWordsCount,
                    slide.highlight
                  ).bottomWords.join(" ")}`}
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
        <Col md={5} className="text-center slideImage">
          <animated.div style={imageSpring}>
            <SlideImage
              src={slide.imgSrc}
              alt={slide.highlight}
              minWidth={slide.minWidth}
            />
          </animated.div>
          <MobileOnlyButton>
            <Button as={Link} to={slide.link}>
              View More
            </Button>
          </MobileOnlyButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ActiveSlideContent;
const heroStyle = {
  // outline: "2px solid red",
  margin: "0",
  padding: "0",
};
const SlideContent = styled.div`
  color: #fff;
  text-align: center;
  width: 94vw;
  margin: 0 auto;

  @media (min-width: 426px) {
    max-width: calc(100vw * 0.9);
    margin-top: 80px;
  }

  // tablet
  @media (min-width: 768px) {
    margin: 0;
    text-align: left;
    max-width: calc(100vw * 0.58);
    padding: 60px;
  }

  @media (min-width: 1024px) {
    // max-width: calc(100vw * 0.6);
    padding-left: 80px;
  }
  @media (min-width: 1440px) {
    max-width: 52vw;
    // padding-left: 12px;
    margin-left: 40px;
  }
`;
const SlideText = styled.div`
  h1 {
    font-size: 10.5vw;
    font-weight: 700;
    font-family: "Syne", sans-serif;
    margin-bottom: 10px;

    @media (min-width: 426px) {
      font-size: 6.6vw;
      max-width: 80vw;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      font-size: 5.6vw;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 6vw;
      letter-spacing: 2px;
    }

    @media (min-width: 1440px) {
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

    @media (min-width: 768px) {
      max-width: 52vw;
      line-height: 2rem;
      margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2.5rem;
      margin-bottom: 30px;
    }

    @media (min-width: 1440px) {
      font-size: 1.8rem;
    }
  }
`;
const SlideImage = styled.img`
  // margin: 0 auto;
  // width: 80%;

  max-height: 40vh;
  @media (min-width: 1024px) {
    max-height: 50vh;
  }

  @media (min-width: 1440px) {
    max-height: 60vh;
    padding-right: 10px;
  }
`;
// const SlideContent = styled.div`
//   max-width: calc(100vw * 0.5);
//   padding-left: 12%;
//   color: #fff;

//   h1 {
//     font-size: 52px;
//     letter-spacing: 2px;
//     font-weight: 700;
//     font-family: "Syne", sans-serif;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1.5rem;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 768px) {
//     // height: 100vh;
//     // padding-top: 15px;

//     h1 {
//       font-size: 2px;
//       letter-spacing: 1px;
//     }

//   }
//   @media (max-width: 576px) {
//     padding: 0;
//     margin-top: -32px;
//     text-align: center;
//     max-width: 100%;
//     h1 {
//       font-size: 40px;
//       letter-spacing: 1px;
//       line-height: 44px;
//       margin-bottom: 20px;
//     }

//     p {
//       font-size: 1.2rem;
//       margin-bottom: 30px;
//     }
//   .slideImage {
//     @media (max-width: 768px) {
//       max-width: 70%;
//       margin: 0 auto;
//       height: auto;
//   }
//     @media (max-width: 576px) {
//       max-width: 100%;
//       margin: 0;
//       height: auto;
//   }}
//   // .slideImage {
//   //   @media (max-width: 576px) {
//   //     max-width: 100%;
//   //     margin: 0;
//   //     height: auto;
//   // }

//   @media (max-width: 480px) {

//   }
// `;

// const SlideText = styled.div`
//   h1 {
//     font-size: 3.4rem;
//     line-height: 4rem;
//     letter-spacing: 1.5px;
//     margin-bottom: 20px;
//   }
//   p {
//     font-size: 1.5rem;
//     margin-bottom: 30px;
//   }
// `;
const MobileSlideButton = styled.div`
  @media (max-width: 767px) {
    display: none;
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

// const SlideImage = styled.img`
//   width: 30vw;
//   height: auto;

//   @media (max-width: 768px) {
//     width: 70%;
//     margin: 0 auto;
//   }

//   @media (max-width: 576px) {
//     // max-height: ${(props) => props.minWidth};
//     // max-width: 80%;
//     // height: auto;
//     // max-height: 25vh;
//     // width: auto;
//     padding: 0;
//     margin-top: 10px;
//   }
// `;

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

  @media (max-width: 767px) {
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
