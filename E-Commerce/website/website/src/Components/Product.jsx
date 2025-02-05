import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/cart");
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product/get");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={`http://localhost:3000/uploads/${product.productImage}`}
              alt={product.productname}
              className="w-full h-72" />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.productname}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.productDescription}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">&#8377;{product.productPrice}</h4>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                  Add to Cart
                </button>
                {/* <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-400-500 text-black px-4 mt-5 py-3 rounded hover:bg-green-600 w-full"
                >
                 By Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;