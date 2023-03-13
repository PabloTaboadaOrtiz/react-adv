import { CSSProperties, useCallback, useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={`${styles.buttonMinus}`}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable} `}
      >
        +
      </button>
    </div>
  );
};
