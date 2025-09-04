import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const Tanks = () => (
  <ProductPageLayout
    categoryName="Tanks"
    bannerImage="tanks-group.webp"
    products={products.tanks}
  />
);

export default Tanks;
