import React, { Suspense } from "react";
import BlogPost from "./components/BlogPost";
import { getPost, getAllPost } from "../api/usePost";
import ServerBlogPost from "./components/ServerBlogPost";

async function getData() {
  const res = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata",
    {
      cache: "default",
    }
  );

  console.log("====fetch time");
  

  return res.json();
}

const Blogger = async () => {
  const postList = await getAllPost();
  // const data = await getData();

  return (
    <>
      <div>I am server component</div>
      {/* <div>{new Date(data.datetime).toLocaleString()}</div> */}
      {/* <BlogPost postList={postList} /> */}
      <ServerBlogPost />
    </>
  );
};

export default Blogger;
