import { Container, Row, Col, Breadcrumb, Form } from "react-bootstrap";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

const categoryOptions = [
  { value: "babyCare", label: "Baby Care" },
  { value: "basins", label: "Basins" },
  { value: "baskets", label: "Baskets" },
  { value: "bowls", label: "Bowls" },
  { value: "buckets", label: "Buckets" },
  { value: "colandersAndPlates", label: "Colanders & Plates" },
  { value: "coolers", label: "Coolers" },
  { value: "drums", label: "Drums" },
  { value: "iceCreamContainers", label: "Ice Cream Containers" },
  { value: "jerryCans", label: "Jerry Cans" },
  { value: "mugsAndCups", label: "Mugs & Cups" },
  { value: "racks", label: "Racks" },
  { value: "takeAwayContainers", label: "Take Away Containers" },
  { value: "tanks", label: "Tanks" },
  { value: "toys", label: "Toys" },
];

const ProductPageLayout = () => {
  // React Router hooks
  const navigate = useNavigate();
  const { category } = useParams();

  /// Find current category data
  const currentCategory = categoryOptions.find((opt) => opt.value === category);
  // console.log("currentCategory", currentCategory);

  // Find products for current category
  const categoryProducts = currentCategory
    ? products[currentCategory.value]
    : null;

  // Redirect if invalid category
  if (!currentCategory || !categoryProducts) {
    return <Navigate to="/products" replace />;
  }

  return (
    <PageWrapper>
      <Banner
        bgImage={`/assets/images/product-banners/banner-${currentCategory.value}.png`}
      >
        <Container>
          <Row className="h-100 align-items-center">
            <Col md={7}>
              <h1>{currentCategory.label}</h1>
              <p>{categoryProducts.description}</p>
            </Col>
            <Col md={5} className="text-right">
              <BannerImage
                src={`/assets/images/product-groups/${currentCategory.value}Group.png`}
                alt={currentCategory.label}
              />
            </Col>
          </Row>
        </Container>
      </Banner>

      <FilterSection>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Breadcrumb>
              <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
              <Breadcrumb.Item active>{currentCategory.label}</Breadcrumb.Item>
            </Breadcrumb>
            <Form.Select
              value={currentCategory.value}
              onChange={(e) => navigate(`/products/${e.target.value}`)}
            >
              <option value="all">All Categories</option>
              {categoryOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Form.Select>
          </div>
        </Container>
      </FilterSection>

      <ProductGrid>
        <Container>
          <Row>
            {categoryProducts.items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={currentCategory.value}
              />
            ))}
          </Row>
        </Container>
      </ProductGrid>
    </PageWrapper>
  );
};

// Styled components
const PageWrapper = styled.div`
  background-color: #f9f9f9;

  nav ol{
    align-items: center;
    // justify-content: center;
    margin: auto 0;
  
  }

  .form-select {
    max-width: 150px;
    @media (min-width: 600px) {
      max-width: 200px;
      
      
    }
`;

const Banner = styled.section`
  background: url(${(props) => props.bgImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  overflow: hidden;
  // padding-top: 180px;
  height: 60vh;
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 13vw;
    font-weight: 600;
    font-family: "Syne", sans-serif;
    // margin-top: 10vh;
  }

  p {
    font-size: 5vw;
    // line-height: 8vw;
    // font-size: 1.2rem;
    margin-bottom: 0;
  }

  @media (min-width: 426px) {
    // height: 326px;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (min-width: 600px) and (orientation: landscape) {
  }

  @media (min-width: 768px) {
    height: 326px;
    text-align: left;
    // h1 {
    //   font-size:
    // }
    p {
      font-size: 1.25rem;
      line-height: 1.8rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 992px) {
    h1 {
      font-size: 3.4rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media (min-width: 1200px) {
    h1 {
      font-size: 3.6rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
`;

const BannerImage = styled.img`
  max-height: 25vh;
  max-width: 90vw;
  margin: 25px auto;
  align-items: center;

  @media (min-width: 426px) {
    max-height: 300px;
    width: auto;
    display: block;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (min-width: 600px) {
    max-width: 40vw;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 992px) {
    padding-left: 10%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
`;

const FilterSection = styled.section`
  padding-top: 40px;
`;

const ProductGrid = styled.section`
  // padding: 40px 0;
`;

export default ProductPageLayout;
