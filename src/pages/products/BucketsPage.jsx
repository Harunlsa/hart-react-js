import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const BucketsPage = () => (
  <ProductPageLayout
    categoryName="Buckets"
    bannerImage="buckets-group.webp"
    products={products.buckets}
  />
);

export default BucketsPage;
