import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const ColandersandplatesPage = () => (
  <ProductPageLayout
    categoryName="Colandersandplates"
    bannerImage="colandersandplates-group.webp"
    products={products.colandersandplates}
  />
);

export default ColandersandplatesPage;
