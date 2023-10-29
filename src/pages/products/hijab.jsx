import NavDetails from "@/components/navDetail";
import { useState, useEffect } from "react";
import ModalBar from "@/components/modal";
import Layout from "@/components/layout";
import axios from "axios";

const indexProduct = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const instance = axios.create({
        baseURL: "2",
      });
      const response = await instance.get(
        "https://651a7d75340309952f0d6272.mockapi.io/api/v1/products?category=WithHijab"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <NavDetails />
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <div className="">
            <ModalBar
              imageUrl={product.image}
              name={product.name}
              rate={product.rate}
              view={product.view}
              alt={product.title}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default indexProduct;
