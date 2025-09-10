import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const LibertyTanks = () => (
  <ProductPageLayout
    categoryName="Tanks"
    bannerImage="tanks-group.webp"
    products={products.LibertyTanks}
  />
);

export default LibertyTanks;
