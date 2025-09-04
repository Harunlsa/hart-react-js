import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const BasinsPage = () => (
  <ProductPageLayout
    categoryName="Basins"
    bannerImage="basins-group.webp"
    products={products.basins}
  />
);

export default BasinsPage;
