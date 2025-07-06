import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../Context/CartContext";

// Mock product data (same as Products.jsx for consistency)
const products = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    price: 45.99,
    category: "Clothing",
    condition: "Like New",
    image: "https://via.placeholder.com/300x200?text=Vintage+Jacket",
    description:
      "A classic vintage leather jacket with a timeless design, perfect for adding a retro vibe to your wardrobe. In excellent condition, ready to wear.",
  },
  {
    id: 2,
    name: "Retro Sneakers",
    price: 25.0,
    category: "Shoes",
    condition: "Good",
    image: "https://via.placeholder.com/300x200?text=Retro+Sneakers",
    description:
      "Stylish retro sneakers with a worn-in charm. Comfortable and in good condition, ideal for casual outfits.",
  },
  {
    id: 3,
    name: "Antique Necklace",
    price: 15.5,
    category: "Accessories",
    condition: "Excellent",
    image: "https://via.placeholder.com/300x200?text=Antique+Necklace",
    description:
      "A beautiful antique necklace with intricate details, perfect for adding elegance to any look. In excellent condition.",
  },
  {
    id: 4,
    name: "Mid-Century Lamp",
    price: 60.0,
    category: "Decor",
    condition: "Good",
    image: "https://via.placeholder.com/300x200?text=Mid-Century+Lamp",
    description:
      "A mid-century modern lamp with a unique design, great for adding character to your home. In good working condition.",
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-amber-900 text-white">
         <motion.section
          className="py-12 px-6 md:px-16 lg:px-32 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="text-gray-400 mt-4">
            Sorry, we couldn't find that product.{" "}
            <Link to="/products" className="text-amber-500 hover:underline">
              Browse all products
            </Link>
          </p>
        </motion.section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-amber-900 text-white">
      <Navbar />
      <motion.section
        className="py-12 px-6 md:px-16 lg:px-32 bg-gray-800/50"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-300">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-400">Category: {product.category}</p>
            <p className="text-gray-400">Condition: {product.condition}</p>
            <p className="text-gray-200">{product.description}</p>
            <div className="flex gap-4">
              <button
                className="flex-1 bg-amber-500 text-gray-900 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link
                to="/checkout"
                className="flex-1 bg-gray-600 text-white py-3 rounded-full text-center font-semibold hover:bg-gray-500 transition-all"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default ProductDetail;
