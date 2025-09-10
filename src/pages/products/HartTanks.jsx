import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const HartTanks = () => (
  <ProductPageLayout
    categoryName="Hart Tanks"
    bannerImage="tanks-group.webp"
    products={products.hartTanks}
  />
);

export default HartTanks;
