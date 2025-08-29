import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Icecreamcontainers = () => (
  <ProductPageLayout
    categoryName="Icecreamcontainers"
    bannerImage="banner-ice-cream-containers.png"
    products={products.icecreamcontainers}
  />
);

export default Icecreamcontainers;
