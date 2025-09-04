import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const MugsandcupsPage = () => (
  <ProductPageLayout
    categoryName="Mugsandcups"
    bannerImage="mugsandcups-group.webp"
    products={products.mugsandcups}
  />
);

export default MugsandcupsPage;
