import { useEffect } from "react";
import Axios from "axios";

const Products = () => {
  useEffect(() => {
    Axios.get("https://651a7d75340309952f0d6272.mockapi.io/api/v1/products")
      .then((result) => {
        console.log("result", result.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  });

  return (
    <div className="lg:flex lg:my-10">
      <p>test product</p>
    </div>
  );
};

// mengekspor komponen App
export default Products;
