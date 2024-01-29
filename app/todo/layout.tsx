"use client";
import React, { Suspense } from "react";
import StyledComponentsRegistry from "../lib/registry";
import Loading from "./loading";

export default function Layout({
  children,
  introduction,
}: {
  children: React.ReactNode;
  introduction: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <Suspense fallback={<Loading />}>
        {introduction}
        {children}
      </Suspense>
    </StyledComponentsRegistry>
  );
}
