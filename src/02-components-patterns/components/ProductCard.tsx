import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArs) => void;
  value?: number;
  initialValues: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
