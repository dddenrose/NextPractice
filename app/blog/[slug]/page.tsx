"use client";
import React, { Suspense } from "react";

const Title = React.lazy(() => import("../components/Title"));

const Page = (props: any) => {
  const [articleData, setArticleData] = React.useState({});

  return (
    <>
      <Suspense fallback={<>I am loading....</>}>
        <Title articleData={articleData} />
      </Suspense>
      <div>Slug: {props?.params?.slug}</div>
    </>
  );
};

export default Page;
