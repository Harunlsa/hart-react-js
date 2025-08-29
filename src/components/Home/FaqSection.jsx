import styled from "styled-components";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import { Container } from "react-bootstrap";

const faqData = [
  {
    id: "faq1",
    question: "What quality control measures do you have in place?",
    answer:
      "We have rigorous quality control measures to ensure that all our products meet industry standards and customer expectations.",
  },
  {
    id: "faq2",
    question: "How can I request a quote for your products or services?",
    answer:
      "You can contact our sales team directly at sales@hart-industries.com or call +234 902 083 8258 to discuss ",
  },
  {
    id: "faq3",
    question: "Do you deliver outside Kano?",
    answer:
      "Yes, we deliver across Nigeria and also work with logistics partners to fulfil regional orders.",
  },
  {
    id: "faq4",
    question: "Do you supply to businesses or just individuals?",
    answer:
      "We serve both. Our clients range from individual customers to major companies and distributors across Nigeria and beyond.",
  },
  {
    id: "faq5",
    question: " Do your products meet regulatory and quality standards?",
    answer:
      "Yes. Our products comply with Nigerian Industrial Standards (NIS) and are certified under SON MANCAP. We are also ISO 9001:2015 and ISO 22000:2018 certified.",
  },
  {
    id: "faq6",
    question: "Can I request custom-designed plastic products?",
    answer:
      "Yes, we offer custom design and moulding services to meet your specific needs and applications.",
  },
];

const Section = styled.section`
  padding: 60px 0;
  background: ${(props) => props.theme.sectionBackground || "#f6f9fe"};
`;

const SectionTitle = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    font-size: 13px;
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

  h3 {
    font-size: 32px;
    font-weight: 700;

    span {
      color: #106eea;
    }
  }

  p {
    margin-top: 15px;
    font-weight: 500;
  }
`;

const FaqList = styled.ul`
  padding: 0;
  list-style: none;
`;

const FaqItem = styled.li`
  border-bottom: 1px solid #d4e5fc;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#0d58ba" : "#000")};
  font-size: 18px;
  padding: 10px 0;
  transition: 0.3s;

  &:hover {
    color: #106eea;
  }
`;

const Answer = styled.div`
  padding: 10px 0 0 25px;
  display: ${(props) => (props.isActive ? "block" : "none")};
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconWrapper = styled.div`
  margin-left: 15px;
  transition: transform 0.3s;
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};
`;

const FaqSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Section id="faq" className="section-bg">
      <Container data-aos="fade-up">
        <SectionTitle className="section-title">
          <h2>F.A.Q</h2>
          <h3>
            Frequently Asked <span>Questions</span>
          </h3>
          <p>
            Check out our FAQs below to find answers to commonly asked
            questions.
          </p>
        </SectionTitle>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <FaqList className="faq-list">
              {faqData.map((faq) => (
                <FaqItem key={faq.id}>
                  <Question
                    isActive={activeId === faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <IconWrapper isActive={activeId === faq.id}>
                      {activeId === faq.id ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </IconWrapper>
                  </Question>
                  <Answer isActive={activeId === faq.id}>
                    <p>{faq.answer}</p>
                  </Answer>
                </FaqItem>
              ))}
            </FaqList>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FaqSection;
