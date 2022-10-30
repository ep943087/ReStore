import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

const Catalog = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://localhost:5001/api/Products');
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;