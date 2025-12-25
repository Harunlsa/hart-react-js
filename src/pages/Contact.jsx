import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";
import styled from "styled-components";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactMap from "../components/Contact/ContactMap";
import ContactSection from "../components/Contact/ContactSection";
import { toast } from "react-toastify";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d48c76d4-263a-4738-ba8e-c0b2b256d432",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Hart Industries Website",
        }),
      });

      const result = await response.json();

      if (!result.success)
        throw new Error(result.message || "Submission failed");

      setStatus({ loading: false, error: "", success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });

      toast.success("Your message has been sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      setStatus({
        loading: false,
        error: "Failed to send message. Please try again.",
        success: false,
      });
      console.error(error);
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
