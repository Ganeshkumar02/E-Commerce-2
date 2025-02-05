import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = storedItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(updatedItems);

    const initialTotal = updatedItems.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
    setTotalPrice(initialTotal);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const newTotal = updatedItems.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const newTotal = updatedItems.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  };
  // Payment Method
  const handlePayNow = () => {
    const options = {
      key: "rzp_live_HGCsLV5PjSYo8F",
      amount: totalPrice * 100,
      currency: "INR",
      name: "DigiCoders",
      description: "Order Payment",
      image: "https://yourlogo.com",
      handler: function (response) {
        alert("Payment successful! Payment Id: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "test123@gmail.com",
        contact: "7388610478",
      },
      notes: {
        address: "mirzapur",
      },
      theme: {
        color: "#F37254",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center ">Cart Details</h2>
      {cartItems.length > 0 ? (
        <>
          <table className="table-auto w-full border-collapse border border-gray-200 mb-4 ">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border px-4 py-2 text-left">Product Name</th>
                <th className="border px-4 py-2 text-left">Price</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Quantity</th>
                <th className="border px-4 py-2 text-left">Total</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.productname}</td>
                  <td className="border px-4 py-2">&#8377;{item.productPrice}</td>
                  <td className="border px-4 py-2">{item.productCategory || "N/A"}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 border rounded px-2 py-1"
                      onChange={(e) =>
                        handleQuantityChange(index, Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="border px-4 py-2">
                    &#8377;{item.productPrice * item.quantity}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold">Total: &#8377;{totalPrice}</h3>
            <button
              onClick={handlePayNow}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Pay Now
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-lg">No Items</p>
      )}
    </div>
  );
}

export default Cart;