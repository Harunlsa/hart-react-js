import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Baskets = () => (
  <ProductPageLayout
    categoryName="Baskets"
    bannerImage="baskets-group.webp"
    products={products.baskets}
  />
);

export default Baskets;
