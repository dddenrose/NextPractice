import React from "react";
import PhotoWithClientComp from "./components/PhotoWithClientComp/Photo";

const Gallery = () => {
  const generateArray = () => {
    const array = Array.from({ length: 500 }, (_, index) => index + 1);
    return array;
  };

  const dataArray = generateArray();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dataArray.map((item: any) => (
        <PhotoWithClientComp item={item} key={item} />
      ))}
    </div>
  );
};
export default Gallery;
