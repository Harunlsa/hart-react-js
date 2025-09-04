import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const IcecreamcontainersPage = () => (
  <ProductPageLayout
    categoryName="Icecreamcontainers"
    bannerImage="icecreamcontainers-group.webp"
    products={products.icecreamcontainers}
  />
);

export default IcecreamcontainersPage;
