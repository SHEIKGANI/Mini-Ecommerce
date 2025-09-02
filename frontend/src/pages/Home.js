import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products?${searchParams.toString()}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [searchParams]);

  console.log("Component rendering...");

  return (
    <>
      <h1 id="products_heading" style={{ textAlign: "center" }}>
        Latest Products
      </h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
