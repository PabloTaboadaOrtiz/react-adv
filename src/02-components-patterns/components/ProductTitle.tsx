import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title, className }: { title?: string; className?: string }) => {
  const { product } = useContext(ProductContext);
  let titleToShow = title ? title : product.title;
  return <span className={`${styles.productDescription} ${className}`}>{titleToShow}</span>;
};
