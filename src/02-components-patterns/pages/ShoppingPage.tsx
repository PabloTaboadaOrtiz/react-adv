import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";
import "../styles/custom-styles.css";
import { productos } from "../data/products";
import { Product } from "../interfaces/interfaces";

const product: Product = productos[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Stores</h1>
      <hr />
      <div>
        <ProductCard
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
          key={product.id}
          className="bg-dark"
          product={product}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage className="custom-image"></ProductImage>
              <ProductTitle className="text-white"></ProductTitle>
              <ProductButtons className="custom-buttons"></ProductButtons>

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}

              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
      <div className="shopping-cart"></div>
    </div>
  );
};
