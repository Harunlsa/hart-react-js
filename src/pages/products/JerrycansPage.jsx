import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const JerrycansPage = () => (
  <ProductPageLayout
    categoryName="Jerrycans"
    bannerImage="banner-jerrycans.png"
    products={products.jerrycans}
  />
);

export default JerrycansPage;
