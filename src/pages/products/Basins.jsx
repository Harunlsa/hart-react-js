import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const Basins = () => (
  <ProductPageLayout
    categoryName="Basins"
    bannerImage="basins-group.webp"
    products={products.basins}
  />
);

export default Basins;
