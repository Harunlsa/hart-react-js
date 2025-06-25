import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";
const AllProducts = () => (
  <ProductPageLayout
    categoryName="AllProducts"
    bannerImage="babysets-group.png"
    products={products.babysets}
  />
);

export default AllProducts;
