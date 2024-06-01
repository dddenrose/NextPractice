"use client";
import React, { Suspense } from "react";
import StyledComponentsRegistry from "../lib/registry";
import Loading from "./loading";
import { Flex } from "antd";

export default function Layout({
  children,
  introduction,
  infomodal,
}: {
  children: React.ReactNode;
  introduction: React.ReactNode;
  infomodal: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <Suspense fallback={<Loading />}>
        <Flex gap={32} vertical>
          <Flex gap={16} align="center">
            {introduction}
            {infomodal}
          </Flex>
          {children}
        </Flex>
      </Suspense>
    </StyledComponentsRegistry>
  );
}
