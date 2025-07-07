import { Container, Row, Col, Breadcrumb, Form } from "react-bootstrap";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

const categoryOptions = [
  { value: "babySets", label: "Baby Sets" },
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
  { value: "toys", label: "Toys" },
];

const ProductPageLayout = () => {
  // React Router hooks
  const navigate = useNavigate();
  const { category } = useParams();

  /// Find current category data
  const currentCategory = categoryOptions.find((opt) => opt.value === category);

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

  .form-select {
    max-width: 200px;
  }
`;

const Banner = styled.section`
  background: url(${(props) => props.bgImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  // padding-top: 180px;
  height: 60vh;
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 3.5rem;
    font-family: "Syne", sans-serif;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 0;
  }

  @media (min-width: 426px) {
    // height: 326px;
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    height: 326px;
    text-align: left;
  }
`;

const BannerImage = styled.img`
  max-height: 30vh;
  width: auto;
  // padding-left: 10%;
  // display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 426px) {
    max-height: 300px;
    width: auto;
    padding-left: 10%;
    // display: block;
  }
`;

const FilterSection = styled.section`
  padding-top: 40px;
`;

const ProductGrid = styled.section`
  // padding: 40px 0;
`;

export default ProductPageLayout;
