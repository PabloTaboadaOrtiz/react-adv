import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow = img ? img : product.img;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow ? imgToShow : noImage}
      alt="product image"
    />
  );
};
