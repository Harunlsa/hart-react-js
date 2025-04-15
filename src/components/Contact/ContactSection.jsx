import { Container, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";

const ContactSection = ({ formData, setFormData, handleSubmit, status }) => (
  <SectionWrapper className="contact">
    <Container>
      <Row>
        <ContactInfoCol lg={5}>
          <h1>Get in Touch</h1>
          <p>
            Whether you need assistance or just want to learn more about our
            products, we're here to help. Contact us for prompt and friendly
            service.
          </p>
          <ContactInfoList>
            <li>
              <InfoIcon>
                <BiMap />
              </InfoIcon>
              <div>
                <h4>Address</h4>
                <p>No, 20, Challawa Industrial Area, Kano, Nigeria.</p>
              </div>
            </li>
            <li>
              <InfoIcon>
                <BiPhone />
              </InfoIcon>
              <div>
                <h4>Phone Number</h4>
                <p>+234 702 559 6606</p>
              </div>
            </li>
            <li>
              <InfoIcon>
                <BiEnvelope />
              </InfoIcon>
              <div>
                <h4>E-mail</h4>
                <p>sales@hart-industries.com</p>
              </div>
            </li>
          </ContactInfoList>
        </ContactInfoCol>
        <FormCol lg={7}>
          <h2>Send a message</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="row">
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </Form.Group>

            <StatusMessages>
              {status.loading && <div className="loading">Loading</div>}
              {status.error && (
                <div className="error-message">{status.error}</div>
              )}
              {status.success && (
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              )}
            </StatusMessages>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormCol>
      </Row>
    </Container>
  </SectionWrapper>
);

// Styled components
const SectionWrapper = styled.section`
  padding: 60px 0;
  h2 {
    font-family: "Poppins" sans-serif;
    font-weight: medium;
    font-size: 28px;
  }
`;

const ContactInfoCol = styled(Col)`
  h1 {
    font-family: "Syne", sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
  }

  p {
    color: #666;
    margin-bottom: 30px;
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;

    h4 {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }

    p {
      margin: 0;
      color: #444;
    }
  }
`;

const InfoIcon = styled.div`
  font-size: 24px;
  color: white;
  margin-right: 15px;
  flex-shrink: 0;
  background-color: #106eea;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
`;

const FormCol = styled(Col)`
  .form-control {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      border-color: #106eea;
      box-shadow: none;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const StatusMessages = styled.div`
  margin: 20px 0;

  .loading {
    color: #106eea;
  }

  .error-message {
    color: #dc3545;
  }

  .sent-message {
    color: #28a745;
  }
`;

const SubmitButton = styled.button`
  background: #106eea;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #0d58ba;
  }
`;

export default ContactSection;
