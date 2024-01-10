import React, { Suspense, lazy } from "react";
import { getAllProduct } from "./fake-data";
import { PageTitle, ProductGallery } from "./style";

const ProductCard = lazy(() => import("./components/ProductCard"));

const page = () => {
  const products = getAllProduct();

  return (
    <Suspense fallback={<>I am loading....</>}>
      <div>none styling</div>
      <PageTitle>商品列表</PageTitle>
      <ProductGallery>I am ProductGallery</ProductGallery>
      {/* {products.map((product: any) => (
          <Suspense fallback={<>I am Loading.</>} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Suspense>
        ))} */}
    </Suspense>
  );
};

export default page;
