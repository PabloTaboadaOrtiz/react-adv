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
          product={product}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage></ProductImage>
              <ProductTitle></ProductTitle>
              <ProductButtons></ProductButtons>
            </>
          )}
        </ProductCard>
      </div>
      <div className="shopping-cart"></div>
    </div>
  );
};
