import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const ToysPage = () => (
  <ProductPageLayout
    categoryName="Toys"
    bannerImage="toys-group.png"
    products={products.toys}
  />
);

export default ToysPage;
