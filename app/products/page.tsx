// "use client";
import React, { Suspense, lazy } from "react";

import StyledComponentsRegistry from "../lib/registry";
import { getAllProduct } from "./fake-data";
import { PageTitle, ProductGallery } from "./style";
import ServerPost from "./components/ServerPost";

const ProductCard = lazy(() => import("./components/ProductCard"));

const page = () => {
  const products = getAllProduct();

  console.log("====I am server component");

  return (
    <Suspense fallback={<>I am loading....</>}>
      <div>none styling</div>
      <div>I am server component</div>
      <ServerPost />
      <ServerPost />
      <ServerPost />
      <ServerPost />
      <ServerPost />
      {/* <PageTitle>商品列表</PageTitle>
      <ProductGallery>
        {products.map((product: any) => (
          <Suspense fallback={<>I am Loading.</>} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Suspense>
        ))}
      </ProductGallery> */}
    </Suspense>
  );
};

export default page;
