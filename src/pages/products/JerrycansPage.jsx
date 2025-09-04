import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const JerrycansPage = () => (
  <ProductPageLayout
    categoryName="Jerrycans"
    bannerImage="banner-jerrycans.webp"
    products={products.jerrycans}
  />
);

export default JerrycansPage;
