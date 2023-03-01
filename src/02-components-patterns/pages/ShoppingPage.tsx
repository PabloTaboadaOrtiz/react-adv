import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";

const PRODUCT = {
  id: "1",
  title: "Taza de cafe",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={PRODUCT}>
          <ProductImage></ProductImage>
          <ProductTitle title="cafe"></ProductTitle>
          <ProductButtons></ProductButtons>
        </ProductCard>
        <ProductCard product={PRODUCT}>
          <ProductImage></ProductImage>
          <ProductTitle></ProductTitle>
          <ProductButtons></ProductButtons>
        </ProductCard>
      </div>
    </div>
  );
};
