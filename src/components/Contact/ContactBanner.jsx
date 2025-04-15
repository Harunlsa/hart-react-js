import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

const ContactBanner = () => (
  <BannerSection id="contact-banner">
    <Container>
      <Row className="h-100 align-items-center">
        <BannerContent>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </BannerContent>
      </Row>
    </Container>
  </BannerSection>
);

const BannerSection = styled.section`
  height: 326px;
  background: url("src/assets/images/contact-banner.png");
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
`;
const BannerContent = styled.div`
  color: #444444;
  h1 {
    font-size: 4rem;
    font-family: "Roboto", sans-serif;
    font-weight: 450;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default ContactBanner;
