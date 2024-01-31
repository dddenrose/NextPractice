"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Suspense, lazy } from "react";
import Loading from "./loading";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: {
  children: React.ReactNode;
  team: React.ReactNode;
  test: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <Layout>
              <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                  items={[
                    {
                      key: "home",
                      label: <Link href={"/"}>Home</Link>,
                    },
                    {
                      key: "To Do",
                      label: <Link href={"/todo"}>To Do</Link>,
                    },
                    {
                      key: "Blogger",
                      label: <Link href={"/blogger"}>Blogger</Link>,
                    },
                    {
                      key: "globalClock",
                      label: <Link href={"/globalClock"}>Global Clock</Link>,
                    },
                  ]}
                  style={{ flex: 1, minWidth: 0 }}
                />
              </Header>
              <Content style={{ padding: "48px" }}>
                <Suspense fallback={<Loading />}>
                  <div
                    style={{
                      background: colorBgContainer,
                      minHeight: "90vh",
                      padding: 24,
                      borderRadius: borderRadiusLG,
                    }}
                  >
                    {props.children}
                  </div>
                </Suspense>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Next.js Project ©{new Date().getFullYear()} Created by Chiyang
              </Footer>
            </Layout>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
