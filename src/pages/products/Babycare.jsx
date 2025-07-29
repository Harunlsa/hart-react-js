import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Babycare = () => (
  <ProductPageLayout
    categoryName="Babycare"
    bannerImage="babycare-group.png"
    products={products.babycare}
  />
);

export default Babycare;
