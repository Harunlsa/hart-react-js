import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Colandersandplates = () => (
  <ProductPageLayout
    categoryName="Colandersandplates"
    bannerImage="colandersandplates-group.webp"
    products={products.colandersandplates}
  />
);

export default Colandersandplates;
