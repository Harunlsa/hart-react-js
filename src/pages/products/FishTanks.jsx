import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const FishTanks = () => (
  <ProductPageLayout
    categoryName="Fish Tanks"
    bannerImage="tanks-group.webp"
    products={products.fishTanks}
  />
);

export default FishTanks;
