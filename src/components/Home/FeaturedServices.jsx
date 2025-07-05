import styled from "styled-components";
import { BiLogoDribbble, BiFile, BiTachometer, BiWorld } from "react-icons/bi";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    icon: <BiLogoDribbble />,
    title: "Competitive Pricing",
    description:
      "You can trust us to deliver cost-effective solutions without sacrificing excellence.",
    delay: 100,
  },
  {
    icon: <BiFile />,
    title: "Customer Satisfaction",
    description:
      "We strive to exceed expectations and ensure every customer is satisfied with our products and services.",
    delay: 200,
  },
  {
    icon: <BiTachometer />,
    title: "Industry Experience",
    description:
      "With years of experience in the industry, we have the knowledge and expertise to deliver exceptional results",
    delay: 300,
  },
  {
    icon: <BiWorld />,
    title: "Quality Assurance",
    description:
      "Each product undergoes rigorous quality checks to meet the highest standards.",
    delay: 400,
  },
];

const Section = styled.section`
  padding: 60px 0;
  overflow: hidden;
  @media (max-width: 426px) {
    padding-bottom: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Column = styled.div`
  padding: 0 15px;
  flex: 0 0 100%;
  margin-bottom: 3rem;
  display: flex;
  align-items: stretch;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    margin-bottom: 0;
  }
`;

const IconBox = styled.div`
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    background: #cbe0fb;
    right: 0;
    left: 0;
    bottom: 0;
    top: 100%;
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::before {
    background: #106eea;
    top: 0;
    border-radius: 0;
  }
`;

const Icon = styled.div`
  margin-bottom: 15px;

  svg {
    width: 48px;
    height: 48px;
    color: #106eea;
    transition: all 0.3s ease-in-out;
  }

  ${IconBox}:hover & {
    svg {
      color: #fff;
    }
  }
`;

const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;

  a {
    color: #111;
    text-decoration: none;
  }

  ${IconBox}:hover & a {
    color: #fff;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;

  ${IconBox}:hover & {
    color: #fff;
  }
`;

const FeaturedServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Section id="featured-services">
      <Container data-aos="fade-up">
        <Row>
          {services.map((service, index) => (
            <Column key={index}>
              <IconBox data-aos="fade-up" data-aos-delay={service.delay}>
                <Icon>{service.icon}</Icon>
                <Title>
                  <a href="#">{service.title}</a>
                </Title>
                <Description>{service.description}</Description>
              </IconBox>
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default FeaturedServices;
