import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import * as Style from "./style";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "🔖 Check This",
    children: (
      <h1>
        This Is Introduction Block 🔖
        <br />
        And it will loading about 3 seconds...
      </h1>
    ),
  },
];

// 使用平行路由, page父層共同引入多個平行路由時
// 會拆開平行路由的component, 獨立render
// 若此component的api回傳需要等待, 父層其餘component會先render
const Introduction: React.FC = async () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const fakeLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, 4000);
    });
  };

  const data: any = await fakeLoading().then((res) => res);

  return <>This Is Introduction Block 🔖</>;
};

export default Introduction;
