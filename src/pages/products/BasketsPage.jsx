import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const BasketsPage = () => (
  <ProductPageLayout
    categoryName="Baskets"
    bannerImage="baskets-group.webp"
    products={products.baskets}
  />
);

export default BasketsPage;
