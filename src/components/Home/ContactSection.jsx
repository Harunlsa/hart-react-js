import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiPhone, BiEnvelope } from "react-icons/bi";
import { BsGeoAlt } from "react-icons/bs";
import styled from "styled-components";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ loading: false, error: "", success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        loading: false,
        error: "Failed to send message",
        success: false,
      });
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="section">
      <Container className="section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <TitleText>
          <span>Need Help?</span>{" "}
          <span className="description-title">Contact Us</span>
        </TitleText>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="g-4">
          <Col lg={5}>
            <InfoWrap>
              <InfoItem data-aos="fade-up" data-aos-delay="200">
                <IconWrapper>
                  <BsGeoAlt />
                </IconWrapper>
                <div>
                  <h3>Address</h3>
                  <p>No 20, Challawa Industrial Area, Kano, Nigeria</p>
                </div>
              </InfoItem>

              <InfoItem data-aos="fade-up" data-aos-delay="300">
                <IconWrapper>
                  <BiPhone />
                </IconWrapper>
                <div>
                  <h3>Call Us</h3>
                  <p>+234 702 559 6606</p>
                </div>
              </InfoItem>

              <InfoItem data-aos="fade-up" data-aos-delay="400">
                <IconWrapper>
                  <BiEnvelope />
                </IconWrapper>
                <div>
                  <h3>Email Us</h3>
                  <p>sales@hart-industries.com</p>
                </div>
              </InfoItem>

              <MapIframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3903.965086999111!2d8.4633247!3d11.9075182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11add52818829945%3A0xb8920fbd97ff87f3!2sHart%20Industries%20Ltd!5e0!3m2!1sen!2sng!4v1741008573608!5m2!1sen!2sng"
                // width="800"
                // height="600"
                // style="border:0;"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </InfoWrap>
          </Col>

          <Col lg={7}>
            <Form
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Row className="g-3">
                <Col md={6}>
                  <Label>Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={6}>
                  <Label>Your Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={12}>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={12}>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={12} className="text-center">
                  {status.loading && <StatusMessage>Loading</StatusMessage>}
                  {status.error && <ErrorMessage>{status.error}</ErrorMessage>}
                  {status.success && (
                    <SuccessMessage>
                      Your message has been sent. Thank you!
                    </SuccessMessage>
                  )}

                  <SubmitButton type="submit" disabled={status.loading}>
                    Send Message
                  </SubmitButton>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  color: ${({ theme }) => theme.defaultColor || "#212529"};
  background-color: ${({ theme }) => theme.backgroundColor || "#fff"};
  padding: 60px 0;
  scroll-margin-top: 78px;
  margin-bottom: 60px;

  @media (max-width: 1199px) {
    scroll-margin-top: 60px;
  }

  .section-title {
    text-align: center;

    padding-bottom: 60px;
    h2 {
      font-size: 13px;
      font-family: Roboto;
      letter-spacing: 1px;
      font-weight: 700;
      padding: 8px 20px;
      margin: 0 0 15px 0;
      background: #e7f1fd;
      color: #106eea;
      display: inline-block;
      text-transform: uppercase;
      border-radius: 50px;
    }
  }
`;

const TitleText = styled.h3`
  color: ${({ theme }) => theme.headingColor || "#222222"};
  font-size: 32px;
  font-weight: 700;
  font-family: Montserrat;

  .description-title {
    color: ${({ theme }) => theme.accentColor || "#106eea"};
  }
`;

const InfoWrap = styled.div`
  background-color: ${({ theme }) => theme.surfaceColor || "#ffffff"};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;

  @media (max-width: 575px) {
    padding: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 5px;
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.accentColor || "#106eea"};
  background: ${({ theme }) =>
    theme.accentColor
      ? `color-mix(in srgb, ${theme.accentColor}, transparent 92%)`
      : "rgba(16, 110, 234, 0.08)"};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
  flex-shrink: 0;

  ${InfoItem}:hover & {
    background: ${({ theme }) => theme.accentColor || "#106eea"};
    color: ${({ theme }) => theme.contrastColor || "#fff"};
  }
`;

const MapIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 270px;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.surfaceColor || "#ffffff"};
  height: 100%;
  padding: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 575px) {
    padding: 20px;
  }
`;

const Label = styled.label`
  display: block;
  padding-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: ${({ theme }) => theme.defaultColor || "#212529"};
  background-color: ${({ theme }) => theme.surfaceColor || "#ffffff"};
  border: 1px solid
    ${({ theme }) =>
      theme.defaultColor
        ? `color-mix(in srgb, ${theme.defaultColor}, transparent 80%)`
        : "rgba(33, 37, 41, 0.2)"};

  &:focus {
    border-color: ${({ theme }) => theme.accentColor || "#106eea"};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.defaultColor
        ? `color-mix(in srgb, ${theme.defaultColor}, transparent 70%)`
        : "rgba(33, 37, 41, 0.7)"};
  }
`;

const TextArea = styled.textarea`
  ${Input.styles}
  resize: vertical;
  min-height: 100px;
  width: 100%;
  border: 0.8px solid #d3d3d4;
`;

const StatusMessage = styled.div`
  padding: 10px 0;
`;

const ErrorMessage = styled(StatusMessage)`
  color: #dc3545;
`;

const SuccessMessage = styled(StatusMessage)`
  color: #28a745;
`;

const SubmitButton = styled.button`
  color: ${({ theme }) => theme.contrastColor || "#fff"};
  background: ${({ theme }) => theme.accentColor || "#106eea"};
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) =>
      theme.accentColor
        ? `color-mix(in srgb, ${theme.accentColor}, transparent 25%)`
        : "rgba(16, 110, 234, 0.75)"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default ContactSection;
