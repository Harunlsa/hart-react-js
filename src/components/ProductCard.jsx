import { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

// Color mapping utility
const getColorCode = (colorClass) => {
  const colorName = colorClass.split(" ")[0];
  // console.log("colorClass: ", colorClass.split(" ")[0]);
  const colorMap = {
    "red-swatch": "#c92943",
    "blue-swatch": "#0077db",
    "light-blue-swatch": "#799cf9",
    "dull-green-swatch": "#00754e",
    "bright-green-swatch": "#83db0d",
    "yellow-swatch": "#ffca05",
    "white-swatch": "#ffffff",
    // add   border: 1px solid rgba(0, 0, 0, 0.25); to white swatch
    "grey-swatch": "#b0b2b1",
    "black-swatch": "#313942",
    "silver-swatch": "#c0c0c0",
    "brown-swatch": "#795548",
    "beige-swatch": "#f5f5dc",
    "pink-swatch": "#c55491",
    "olive-swatch": "#b3cb79",
    "purple-swatch": "#3d298d",
    "gold-swatch": "#d7cf38",
    "orange-swatch": "#ff7d3b",
    "amber-swatch": "#ffc452",
    "turquoise-swatch": "#007ba3",
    "lime-yellow-swatch": "#b7c900",
    "bright-yellow-swatch": "#ffe11d",
    "multi-color-swatch": "linear-gradient(45deg, #ff0000, #00ff00, #0000ff)",
    "primary-color-swatch": "#106eea",
    "dark-blue-swatch": "#0d2a6b",
  };
  return colorMap[colorName] || "#cccccc";
};

const ProductCard = ({ product, category }) => {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <CardWrapper sm={6} md={4} lg={3}>
      <Card>
        <ProductImage
          src={`/assets/images/products/${category}/${product.colors[selectedColor].imgSrc}`}
          alt={product.name}
        />
        <CardBody>
          <Title>{product.name}</Title>
          <OptionsWrapper>
            <SizeOptions>
              {product.sizes.map((size, index) => (
                <Size key={index}>{size}</Size>
              ))}
            </SizeOptions>
            <ColorOptions>
              {product.colors.map((color, index) => (
                <ColorSwatch
                  key={index}
                  color={getColorCode(color.className)}
                  selected={index === selectedColor}
                  onClick={() => setSelectedColor(index)}
                />
              ))}
            </ColorOptions>
          </OptionsWrapper>
        </CardBody>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled(Col)`
  margin-bottom: 30px;
  padding: 0 15px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 29px rgba(68, 88, 144, 0.12);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardBody = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
`;

const Title = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1d1d1d;
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 15px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  // span {
  //   font-size: 12px;
  //   color: #666;
  //   padding-right: 10px;
  //   padding-left: 10px;
  //   border-right: 1px solid #ddd;

  //   &:last-child {
  //     border-right: none;
  //   }
  //   &:first-child {
  //     padding-left: 0;
  //   }
  // }
`;

const Size = styled.span`
  font-size: 12px;
  color: #666;
  padding-right: 10px;
  border-right: 1px solid #ddd;
  line-height: 1;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

// const ColorSwatches = styled.div`
//   display: flex;
//   gap: 8px;
// `;
const ColorSwatch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
  border: 2px solid white;
  outline: 2px solid
    ${(props) => (props.selected ? props.color : "transparent")};
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.color.includes("gradient") &&
    `
    background-image: ${props.color};
    background-size: cover;
  `}
`;

const ColorDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  // background-color: currentColor;
  outline: ${(props) => (props.active ? "2px solid currentColor" : "none")};
  outline-offset: 2px;
`;

export default ProductCard;
