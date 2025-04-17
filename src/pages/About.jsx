import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsSection from "../components/About/CertificationsSection";

const About = () => {
  return (
    <AboutPageWrapper>
      <AboutContainer isSmallContent as={Container}>
        <Row>
          <AboutText as={Col} lg={6}>
            <h1>
              About Us<span>.</span>
            </h1>
            <p>
              Hart Industries Ltd, founded in 2004 in Kano State, Nigeria, by
              Mr. Harry Thakurdas Thadani and Mr. Viki H. Mahboobani, has grown
              into a leading plactic manufacturing company under their dynamic
              leadership.
            </p>
          </AboutText>
          <Col lg={6}>
            <AboutImageContainer className="twoImages">
              <img src="/assets/images/abt1.png" alt="abt1" />
            </AboutImageContainer>
            <AboutImageContainer isSecond className="twoImages">
              <img
                className="second"
                src="/assets/images/abt2.jpg"
                alt="abt2"
              />
            </AboutImageContainer>
          </Col>
        </Row>
      </AboutContainer>
      <hr
        style={{
          marginBottom: "80px",
        }}
      />
      <AboutContainer as={Container}>
        <h2>
          Our <span>Vision</span> and <span>Mission</span>
        </h2>
        <Row style={{ marginTop: "10px", marginBottom: "40px" }}>
          <AboutText as={Col} lg={9} isFullText>
            <h3>Vision</h3>
            <p>
              Our vision is to exceed customers’ expectations in achieving their
              goals, with innovative and reliable solutions.{" "}
            </p>
          </AboutText>
          <Col lg={3}>
            <AboutIconContainer>
              <img src="\assets\images\visionIcon.png" alt="abt1" />
            </AboutIconContainer>
          </Col>
        </Row>
        <Row>
          <AboutText as={Col} lg={9} isFullText>
            <h3>Mission</h3>
            <p>
              We are committed to delivering exceptional value while providing
              high-quality, durable products at competitive prices.{" "}
            </p>
          </AboutText>
          <Col lg={3}>
            <AboutIconContainer>
              <img src="\assets\images\missionIcon.png" alt="abt1" />
            </AboutIconContainer>
          </Col>
        </Row>
      </AboutContainer>

      <CertificationsSection />

      <AboutContainer as={Container} isSmallContent>
        <Row>
          <AboutText as={Col} lg={6}>
            <h1>
              Sustainability at Hart<span>.</span>
            </h1>
            <p>
              We are committed to minimizing our environmental impact through
              innovative recycling initiatives and the use of multi-use
              plastics.
            </p>
          </AboutText>
          <Col lg={6}>
            <AboutImageContainer>
              <img src="\assets\images\recycling.png" alt="abt1" />
            </AboutImageContainer>
          </Col>
        </Row>
      </AboutContainer>
    </AboutPageWrapper>
  );
};
const AboutPageWrapper = styled.section`
  margin-top: 40px;
  margin-bottom: 100px;
  h2 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 32px;
    // padding-top: 44px;
    span {
      color: #106eea;
    }
`;
const AboutContainer = styled.div`
  height: ${({ isSmallContent }) => (isSmallContent ? "65vh" : "75vh")};

  // box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;
const AboutText = styled.div`
  margin-top: ${({ isFullText }) => (isFullText ? "0" : "60px")};
  h1 {
    font-family: "Syne", sans-serif;
    font-weight: bold;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: -2px;
    margin-bottom: 1.4rem;
    span {
      color: #106eea;
    }
  }
  h3 {
    font-family: "Syne", sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    line-height: 34px;
    letter-spacing: 1.4px;
    // font-weight: 450;
    // margin-left: 50px;
  }
`;
const AboutImageContainer = styled.div`
  width: 100%;
  height: 70vh;
  // background-color: #eeb390;
  margin-left: ${({ imageIsLeft }) => (imageIsLeft ? "0" : "2%")};
  padding-right: ${({ imageIsLeft }) => (imageIsLeft ? "2%" : "0")};
  // padding-right: 2%;
  display: inline-block;
  vertical-align: top;
  margin-top: ${({ isSecond }) => (isSecond ? "60px" : "0")};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &.twoImages {
    width: 45%;
    height: 50vh;
  }
`;

const AboutIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 60%;
  }
`;
export default About;
