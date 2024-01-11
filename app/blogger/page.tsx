import React, { Suspense } from "react";
import BlogPost from "./components/BlogPost";
import { getPost, getAllPost } from "../api/usePost";

const Blogger = async () => {
  const postList = await getAllPost();

  return (
    <>
      <div>I am server component</div>
      <BlogPost postList={postList} />
    </>
  );
};

export default Blogger;
