import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";
import styled from "styled-components";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactMap from "../components/Contact/ContactMap";
import ContactSection from "../components/Contact/ContactSection";

const Contact = () => {
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
      // Add your form submission logic here
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

  return (
    <ContactPageWrapper>
      <ContactBanner />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        status={status}
      />
      <ContactMap />
    </ContactPageWrapper>
  );
};

const ContactPageWrapper = styled.div`
  background-color: #f9f9f9;
`;

export default Contact;
