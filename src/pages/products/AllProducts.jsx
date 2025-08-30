import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const AllProducts = () => (
  <ProductPageLayout
    categoryName="AllProducts"
    bannerImage="babycare-group.png"
    products={products.babycare}
  />
);

export default AllProducts;
