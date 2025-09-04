import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Jerrycans = () => (
  <ProductPageLayout
    categoryName="Jerrycans"
    bannerImage="jerrycans-group.webp"
    products={products.jerrycans}
  />
);

export default Jerrycans;
