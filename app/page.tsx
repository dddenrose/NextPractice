import Link from "next/link";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

export const metadata: Metadata = {
  title: "Next.js Practice Project 🎮",
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Page: any = async () => {
  const fakeLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, 1500);
    });
  };

  const data: any = await fakeLoading().then((res) => res);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Hello, world! 👋
        <br />
        This is a Next.js Practice Project 🎮
      </h1>
      <h3>🔽 Route Going</h3>
      <Link href={"/todo"}>
        <h4>👉 To Do</h4>
      </Link>
      <Link href={"/todo"}>
        <h4>👉 Blogger</h4>
      </Link>
      <Link href={"/todo"}>
        <h4>👉 Album</h4>
      </Link>
      <Link href={"/globalClock"}>
        <h4>👉 Global Clock</h4>
      </Link>
      <div style={{ color: "grey" }}>Some Data From Api : {data}</div>
    </div>
  );
};

export default Page;
