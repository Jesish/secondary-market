import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../Context/CartContext"; // New import

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for product cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

// Mock product data (replace with API call in a real app)
const products = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    price: 45.99,
    category: "Clothing",
    condition: "Like New",
    image: "https://via.placeholder.com/300x200?text=Vintage+Jacket",
  },
  {
    id: 2,
    name: "Retro Sneakers",
    price: 25.0,
    category: "Shoes",
    condition: "Good",
    image: "https://via.placeholder.com/300x200?text=Retro+Sneakers",
  },
  {
    id: 3,
    name: "Antique Necklace",
    price: 15.5,
    category: "Accessories",
    condition: "Excellent",
    image: "https://via.placeholder.com/300x200?text=Antique+Necklace",
  },
  {
    id: 4,
    name: "Mid-Century Lamp",
    price: 60.0,
    category: "Decor",
    condition: "Good",
    image: "https://via.placeholder.com/300x200?text=Mid-Century+Lamp",
  },
  {
    id: 5,
    name: "Denim Overalls",
    price: 30.0,
    category: "Clothing",
    condition: "Like New",
    image: "https://via.placeholder.com/300x200?text=Denim+Overalls",
  },
  {
    id: 6,
    name: "Vintage Sunglasses",
    price: 12.99,
    category: "Accessories",
    condition: "Excellent",
    image: "https://via.placeholder.com/300x200?text=Vintage+Sunglasses",
  },
];

function Products() {
  const { addToCart } = useCart(); // Use the cart context
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter === "All" ? true : product.category === categoryFilter
    )
    .filter((product) =>
      conditionFilter === "All" ? true : product.condition === conditionFilter
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
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
          Explore Pre-Loved Treasures
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
          {/* ... (search and filter inputs unchanged) */}
        </div>
      </motion.section>
      <motion.section
        className="py-12 px-6 md:px-16 lg:px-32 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {paginatedProducts.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No products found. Try adjusting your filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative bg-gray-700/50 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500 transition-all"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-2">
                  Price: ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-400 mb-4">
                  Condition: {product.condition}
                </p>
                <div className="flex gap-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-amber-500 text-gray-900 py-2 rounded-full text-center font-semibold hover:bg-amber-400 transition-all"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="flex-1 bg-gray-600 text-white py-2 rounded-full font-semibold hover:bg-gray-500 transition-all"
                    onClick={() => addToCart(product)} // Updated to use addToCart
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>
      <motion.section
        className="py-8 px-6 md:px-16 lg:px-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="flex justify-center gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-full ${
                currentPage === page
                  ? "bg-amber-500 text-gray-900"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              } transition-all`}
            >
              {page}
            </button>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default Products;
