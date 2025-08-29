import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const Tanks = () => (
  <ProductPageLayout
    categoryName="Tanks"
    bannerImage="tanks-group.png"
    products={products.tanks}
  />
);

export default Tanks;
