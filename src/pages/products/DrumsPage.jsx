import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const DrumsPage = () => (
  <ProductPageLayout
    categoryName="Drums"
    bannerImage="drums-group.webp"
    products={products.drums}
  />
);

export default DrumsPage;
