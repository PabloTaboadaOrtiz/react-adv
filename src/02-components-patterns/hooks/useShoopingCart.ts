import { useState } from "react";
import { ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: any) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCard: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      //Tambien se puede hacer de esta forma

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };
  return { shoppingCart, onProductCountChange };
};
