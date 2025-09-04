import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Bowls = () => (
  <ProductPageLayout
    categoryName="Bowls"
    bannerImage="bowls-group.webp"
    products={products.bowls}
  />
);

export default Bowls;
