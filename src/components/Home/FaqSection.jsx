import styled from "styled-components";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import { Container } from "react-bootstrap";

const faqData = [
  {
    id: "faq1",
    question: "What quality control measures do you have in place?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    id: "faq2",
    question: "How can I request a quote for your products or services?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
  },
  {
    id: "faq3",
    question: "Do you ship internationally? ",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
  },
  {
    id: "faq4",
    question: "How long does it take to receive an order? ",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
  },
  {
    id: "faq5",
    question: "Do you offer discounts for bulk orders?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
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
