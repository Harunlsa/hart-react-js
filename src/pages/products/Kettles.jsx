import ProductPageLayout from "../../components/ProductPageLayout";

import { products } from "../../data/products";

// function getAllProducts() {
//   const allProducts = [];
//   for (let i = 0; i < products.length; i++) {
//     allProducts.append(products[i]);
//   }
//   return allProducts;
// }

const Kettles = () => (
  <ProductPageLayout
    categoryName="Kettles"
    bannerImage="kettles-group.webp"
    products={products.kettles}
  />
);

export default Kettles;
