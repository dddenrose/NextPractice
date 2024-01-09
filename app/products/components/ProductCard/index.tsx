import Image from "next/image";
import Link from "next/link";

import { Product as ProductType } from "../../fake-data";
import {
  Product,
  ImageWrapper,
  ProductDetail,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "./style";

interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = ({ product, all }: ProductCardProps) => {
  const { id, image, title, description, price } = product;

  if(!Product || !ImageWrapper) {
    return null;
  }

  return (
    <Product key={id}>
      <ImageWrapper>
        <Image
          src={image}
          alt="product"
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="120px, 167px"
        />
      </ImageWrapper>
      <ProductDetail>
        <Link href={`/product/${id}`} passHref>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductDescription $all={all}>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetail>
    </Product>
  );
};

export default ProductCard;
