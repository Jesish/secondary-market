import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../Context/CartContext";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for cart items
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-amber-900 text-white">
       <motion.section
        className="py-12 px-6 md:px-16 lg:px-32 bg-gray-800/50"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty.{" "}
            <Link to="/products" className="text-amber-500 hover:underline">
              Start shopping!
            </Link>
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center bg-gray-700/50 rounded-xl p-4 border border-amber-500/30 hover:border-amber-500 transition-all"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-300">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-400">Condition: {item.condition}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-gray-300">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-16 p-1 bg-gray-600 text-white rounded-md border border-amber-500/30 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-500 transition-all"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </motion.div>
            ))}
            <div className="text-right mt-8">
              <p className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <Link
                to="/checkout"
                className="inline-block bg-amber-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-400 transition-all mt-4"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </motion.section>
      <Footer />
    </div>
  );
}

export default Cart;
