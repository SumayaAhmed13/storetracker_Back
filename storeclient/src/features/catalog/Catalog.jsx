import ProductList from "./ProductList";
import { useEffect, useState } from "react";
const Catalog = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://localhost:44339/api/v1/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
      },
    ]);
  };
  return (
    <>
      <ProductList products={products} />
   
    </>
  );
};

export default Catalog;
