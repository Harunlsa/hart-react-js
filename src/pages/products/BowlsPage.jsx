import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const BowlsPage = () => (
  <ProductPageLayout
    categoryName="Bowls"
    bannerImage="banner-mugsAndCups.webp"
    products={products.bowls}
  />
);

export default BowlsPage;
