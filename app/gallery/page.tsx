import React from "react";
import Photo from "./components/Photo/Photo";

const Gallery = () => {
  const generateArray = () => {
    const array = Array.from({ length: 500 }, (_, index) => index + 1);
    return array;
  };

  const dataArray = generateArray();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dataArray.map((item: any) => (
        <Photo item={item} key={item} />
      ))}
    </div>
  );
};
export default Gallery;
