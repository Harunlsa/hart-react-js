import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiPlus, BiLink } from "react-icons/bi";
import GLightbox from "glightbox";
import AOS from "aos";
import styled from "styled-components";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const portfolioItems = [
    { id: 1, category: "app", image: "portfolio-1.jpg", title: "App 1" },
    { id: 2, category: "web", image: "portfolio-2.jpg", title: "Web 3" },
    { id: 3, category: "app", image: "portfolio-3.jpg", title: "App 2" },
    { id: 4, category: "card", image: "portfolio-4.jpg", title: "Card 2" },
    { id: 5, category: "web", image: "portfolio-5.jpg", title: "Web 2" },
    { id: 6, category: "app", image: "portfolio-6.jpg", title: "App 3" },
    { id: 7, category: "card", image: "portfolio-7.jpg", title: "Card 1" },
    { id: 8, category: "card", image: "portfolio-8.jpg", title: "Card 3" },
    { id: 9, category: "web", image: "portfolio-9.jpg", title: "Web 3" },
  ];

  useEffect(() => {
    AOS.init();
    GLightbox({
      selector: ".portfolio-lightbox",
    });
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    AOS.refresh();
  };

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeFilter.replace(".filter-", "")
        );

  return (
    <Section id="portfolio">
      <Container data-aos="fade-up">
        <SectionTitle>
          <h2>Products</h2>
          <h3>
            Check our <span>Products</span>
          </h3>
          <p>
            Explore our range of high-quality products designed to meet your
            needs.
          </p>
        </SectionTitle>

        <Row data-aos="fade-up" data-aos-delay="100">
          <Col lg={12} className="d-flex justify-content-center">
            <FilterList>
              <FilterItem
                className={activeFilter === "*" ? "filter-active" : ""}
                onClick={() => handleFilter("*")}
              >
                All
              </FilterItem>
              <FilterItem
                className={
                  activeFilter === ".filter-app" ? "filter-active" : ""
                }
                onClick={() => handleFilter(".filter-app")}
              >
                App
              </FilterItem>
              <FilterItem
                className={
                  activeFilter === ".filter-card" ? "filter-active" : ""
                }
                onClick={() => handleFilter(".filter-card")}
              >
                Card
              </FilterItem>
              <FilterItem
                className={
                  activeFilter === ".filter-web" ? "filter-active" : ""
                }
                onClick={() => handleFilter(".filter-web")}
              >
                Web
              </FilterItem>
            </FilterList>
          </Col>
        </Row>

        <PortfolioContainer data-aos="fade-up" data-aos-delay="200">
          <Row>
            {filteredItems.map((item) => (
              <Col lg={4} md={6} className="portfolio-item" key={item.id}>
                <PortfolioImage
                  src={`assets/img/portfolio/${item.image}`}
                  alt={item.title}
                  className="img-fluid"
                />
                <PortfolioInfo>
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <PreviewLink
                    href={`assets/img/portfolio/${item.image}`}
                    className="portfolio-lightbox preview-link"
                  >
                    <BiPlus />
                  </PreviewLink>
                  <DetailsLink
                    href="portfolio-details.html"
                    className="details-link"
                  >
                    <BiLink />
                  </DetailsLink>
                </PortfolioInfo>
              </Col>
            ))}
          </Row>
        </PortfolioContainer>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 60px 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    margin-bottom: 15px;
    font-size: 13px;
    font-family: Roboto;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 8px 20px;
    background: #e7f1fd;
    color: #106eea;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 50px;
  }

  h3 {
    color: ${({ theme }) => theme.headingColor || "#222222"};
    font-size: 32px;
    font-weight: 700;
    font-family: Montserrat;

    span {
      color: #106eea;
    }
  }

  p {
    margin-top: 15px;
  }
`;

const FilterList = styled.ul`
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
`;

const FilterItem = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px 8px 15px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #444444;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &.filter-active {
    color: #106eea;
  }
`;

const PortfolioContainer = styled.div`
  margin-bottom: -30px;
`;

const PortfolioImage = styled.img`
  margin-bottom: 30px;
  position: relative;
`;

const PortfolioInfo = styled.div`
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;

  h4 {
    font-size: 18px;
    color: #222222;
    font-weight: 600;
  }

  p {
    color: #555555;
    font-size: 14px;
    margin-bottom: 0;
  }

  &:hover {
    opacity: 1;
    bottom: 20px;
  }
`;

const PreviewLink = styled.a`
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #3c3c3c;
  transition: 0.3s;

  &:hover {
    color: #106eea;
  }
`;

const DetailsLink = styled.a`
  position: absolute;
  right: 10px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #3c3c3c;
  transition: 0.3s;

  &:hover {
    color: #106eea;
  }
`;

export default PortfolioSection;
