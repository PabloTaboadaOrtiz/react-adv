import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";
import "../styles/custom-styles.css";
const PRODUCT = {
  id: "1",
  title: "Taza de cafe",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Stores</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard style={{ backgroundColor: "#70D1F8" }} product={PRODUCT}>
          <ProductImage></ProductImage>
          <ProductTitle></ProductTitle>
          <ProductButtons style={{ display: "flex", justifyContent: "end" }}></ProductButtons>
        </ProductCard>
        <ProductCard className="bg-dark" product={PRODUCT}>
          <ProductImage className="custom-image"></ProductImage>
          <ProductTitle className="text-white" title="cafe"></ProductTitle>
          <ProductButtons className="custom-buttons"></ProductButtons>
        </ProductCard>
      </div>
    </div>
  );
};
