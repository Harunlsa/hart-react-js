import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

const BowlsPage = () => (
  <ProductPageLayout
    categoryName="Bowls"
    bannerImage="banner-bowls.png"
    products={products.bowls}
  />
);

export default BowlsPage;
