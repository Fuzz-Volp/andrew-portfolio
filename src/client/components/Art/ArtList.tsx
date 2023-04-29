import React, { useEffect } from "react";
import { useProductStore } from "../../stores/Artstore";
import { Art } from "./Print";

export default function ArtList() {
  const { products, getAllProducts } = useProductStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Here's Some Art</h1>
      <div>
        {products.map((product, _id) => {
          return <Art key={_id} product={product} />;
        })}
      </div>
    </div>
  );
}
