import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";
import "../styles/custom-styles.css";
import { productos } from "../data/products";
import { useShoppingCart } from "../hooks/useShoopingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Stores</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {productos.map((product) => (
          <ProductCard
            // onChange={onProductCountChange}
            key={product.id}
            className="bg-dark"
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image"></ProductImage>
            <ProductTitle className="text-white"></ProductTitle>
            <ProductButtons className="custom-buttons"></ProductButtons>
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              onChange={onProductCountChange}
              style={{ width: "100px" }}
              className="bg-dark"
              product={product}
              value={product.count}
            >
              <ProductImage className="custom-image"></ProductImage>
              <ProductButtons className="custom-buttons"></ProductButtons>
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
