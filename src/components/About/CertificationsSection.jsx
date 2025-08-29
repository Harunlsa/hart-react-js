import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const CertificationsSection = () => {
  return (
    <CertificationsContainer>
      <h2>
        Our Commitment to <span>Quality</span>
      </h2>
      <CertificationsContent>
        <Row>
          <Col md={3}>
            <LogoContainer>
              <img
                src="src\assets\images\SON-MANCAP.png"
                alt="SON and MANCAP logos"
              />
            </LogoContainer>
          </Col>
          <Col md={9}>
            <div className="text">
              <p>
                Hart Industries products meet{" "}
                <span>Nigerian Industrial Standards (NIS)</span>
                and have received certifications from the{" "}
                <span>Standard Organisation of Nigeria (SON)</span> under{" "}
                <span>MANCAP</span>.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </CertificationsContent>
    </CertificationsContainer>
  );
};

export default CertificationsSection;

const CertificationsContainer = styled.section`
  width: 100%;
  background-color: #f5f9ff;
  padding-bottom: 44px;
  padding-top: 44px;
  margin: 86px 0;
  h2 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 32;
    span {
      color: #106eea;
    }
  }
`;

const CertificationsContent = styled(Container)`
  display: flex;
  align-items: center;
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 1.2px;
    margin-top: 20px;
  }
  span {
    font-weight: 500;
  }
  @media (min-width: 992px) {
    .text {
      margin-left: 40px;
    }
  }
`;

const LogoContainer = styled.div`
  align-items: center;
  img {
    max-height: 160px;
    // margin: 0 50px 0 0;
  }
`;
