'use client'
import StyledComponentsRegistry from "../registry";
import * as style from "./style";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  );
}
