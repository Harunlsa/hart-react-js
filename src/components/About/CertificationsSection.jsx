import { Container } from "react-bootstrap";
import styled from "styled-components";

const CertificationsSection = () => {
  return (
    <CertificationsContainer>
      <h2>
        Our Commitment to <span>Quality</span>
      </h2>
      <CertificationsContent>
        <LogoContainer>
          <img
            src="src\assets\images\SON-MANCAP.png"
            alt="SON and MANCAP logos"
          />
        </LogoContainer>
        <div className="text">
          <p>
            Hart Industries products meet{" "}
            <span>Nigerian Industrial Standards (NIS)</span>
            and have received certifications from the{" "}
            <span>Standard Organisation of Nigeria (SON)</span> under{" "}
            <span>MANCAP</span>.{" "}
          </p>
        </div>
      </CertificationsContent>
    </CertificationsContainer>
  );
};

export default CertificationsSection;

const CertificationsContainer = styled.section`
  width: 100%;
  background-color: #f5f9ff;
  padding-bottom: 44px;
  margin: 86px 0;
  h2 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 32;
    padding-top: 44px;
    span {
      color: #106eea;
    }
  }
`;

const CertificationsContent = styled(Container)`
  display: flex;
  // flex-direction: reverse;
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
`;

const LogoContainer = styled.div`
  align-items: center;
  img {
    max-height: 160px;
    margin: 0 50px 0 0;
  }
`;
