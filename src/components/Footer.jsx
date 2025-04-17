import { Container, Row, Col } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <FooterTop>
        <Container>
          <Row>
            <Col lg={9} md={9} className="footer-contact">
              <ContactInfo>
                <h3>Hart Industries</h3>
                <p>
                  No 20, Challawa Industrial Area, <br />
                  Kano, Nigeria <br />
                  <br />
                  <strong>Phone:</strong> +234 702 559 6606
                  <br />
                  <strong>Email:</strong> sales@hart-industries.com
                  <br />
                </p>
              </ContactInfo>
            </Col>

            <Col lg={3} md={3} className="footer-links text-md-end">
              <LinksSection>
                <h4>Useful Links</h4>
                <LinksList>
                  <ListItem>
                    <BiChevronRight />
                    <a href="#">Home</a>
                  </ListItem>
                  <ListItem>
                    <BiChevronRight />
                    <a href="#">About us</a>
                  </ListItem>
                  <ListItem>
                    <BiChevronRight />
                    <a href="#">Products</a>
                  </ListItem>
                  <ListItem>
                    <BiChevronRight />
                    <a href="#">Contact</a>
                  </ListItem>
                </LinksList>
              </LinksSection>
            </Col>
          </Row>
        </Container>
      </FooterTop>

      <BottomFooter className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="copyright">
              &copy; Copyright <strong>Hart Industries</strong>. All Rights
              Reserved
            </Col>
            <Col md={6} className="credits">
              Designed by <CreditLink href="#">HLAbdulwahab</CreditLink>
            </Col>
          </Row>
        </Container>
      </BottomFooter>
    </FooterWrapper>
  );
};

// Styled Components
const FooterWrapper = styled.footer`
  background: #f1f6fe;
  color: #444444;
  font-size: 14px;
  outline: 1px solid #cccccc;

  @media (max-width: 768px) {
    .copyright,
    .credits {
      float: none;
      text-align: center;
      padding: 2px 0;
    }

    .footer-contact,
    .footer-links {
      margin: 0 5%;
    }
  }
`;

const FooterTop = styled.div`
  padding: 30px 0 30px 0;
  background: #fff;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 24px;
    margin: 0 0 15px 0;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: #777777;
    margin-bottom: 0;

    strong {
      font-weight: 600;
    }
  }
`;

const LinksSection = styled.div`
  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    margin-bottom: 15px;
    text-align: left;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  &:first-child {
    padding-top: 0;
  }

  svg {
    color: #106eea;
    font-size: 18px;
    flex-shrink: 0;
  }

  a {
    color: #777777;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      color: #106eea;
    }
  }
`;

const BottomFooter = styled.div`
  background: #f1f6fe;
  .credits {
    text-align: right;
  }
`;

const CreditLink = styled.a`
  color: #106eea;
  transition: 0.3s;

  &:hover {
    color: #3b8af2;
    text-decoration: none;
  }
`;

export default Footer;
