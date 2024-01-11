import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
