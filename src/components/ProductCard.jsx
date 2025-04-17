import { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const ProductCard = ({ product, category }) => {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <Col md={4} lg={3} className="mb-4">
      <Card>
        <ProductImage
          src={`/assets/images/products/${category}/${product.colors[selectedColor].imgSrc}`}
          alt={product.name}
        />
        <CardBody>
          <h5>{product.name}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <SizeOptions>
              {product.sizes.map((size, index) => (
                <span key={index}>{size}</span>
              ))}
            </SizeOptions>
            <ColorSwatches>
              {product.colors.map((color, index) => (
                <ColorDot
                  key={index}
                  className={selectedColor.colorClass}
                  active={index === selectedColor}
                  onClick={() => setSelectedColor(index)}
                />
              ))}
            </ColorSwatches>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

// Styled components
const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 29px rgba(68, 88, 144, 0.12);
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 20px;
`;

const CardBody = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
`;

const SizeOptions = styled.div`
  span {
    font-size: 12px;
    color: #666;
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid #ddd;

    &:last-child {
      border-right: none;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`;

const ColorSwatches = styled.div`
  display: flex;
  gap: 8px;
`;

const ColorDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background-color: currentColor;
  outline: ${(props) => (props.active ? "2px solid currentColor" : "none")};
  outline-offset: 2px;
`;

export default ProductCard;
