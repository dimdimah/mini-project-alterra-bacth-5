import { AiFillLike } from "@react-icons/all-files/ai/AiFillLike";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import NavDetails from "@/components/navdetail";
import { useState, useEffect } from "react";
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
          <div key={product.id} className="my-3 w-60">
            <button
              className="bg-[#565564] rounded-lg"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <img src={product.image} alt={""} width={250} height={300} />
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="w-11/12 max-w-5xl modal-box bg-slate-600">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="py-4">{product.description}</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="flex justify-between w-full text-sm">
              <div>
                <p>{product.category}</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiFillLike />
                <p>{product.rate}</p>
                <AiFillEye />
                <p>{product.view}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default indexProduct;
