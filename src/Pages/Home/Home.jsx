import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
};

// Animation for hero text
const heroTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-amber-900 text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 px-6 md:px-16 lg:px-32 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 animate-pulse"></div>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 relative z-10"
          variants={heroTextVariants}
        >
          Thrifted Treasures Await
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 relative z-10"
          variants={heroTextVariants}
          transition={{ delay: 0.2 }}
        >
          Dive into a world of unique, pre-loved finds. Sustainable style starts
          here.
        </motion.p>
        <Link
          to="/signup"
          className="inline-block bg-amber-500 text-gray-900 py-4 px-10 rounded-full text-lg font-semibold hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/50"
        >
          Start Exploring
        </Link>
      </motion.section>

      {/* Sustainability Impact */}
      <motion.section
        className="py-16 px-6 md:px-16 lg:px-32 bg-gray-800/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Make an Impact with Thrifting
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reduce Waste",
              desc: "Extend the life of pre-loved items and keep them out of landfills.",
            },
            {
              title: "Save Resources",
              desc: "Thrifting cuts down on the need for new production, saving water and energy.",
            },
            {
              title: "Unique Style",
              desc: "Find one-of-a-kind pieces that tell a story and stand out.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="relative bg-gray-700/50 rounded-xl p-8 text-center border border-amber-500/30 hover:border-amber-500 transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-semibold mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-300 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Products Carousel (Placeholder) */}
      <motion.section
        className="py-16 px-6 md:px-16 lg:px-32 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trending Second-Hand Finds
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-800">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              className="min-w-[250px] bg-gray-700 rounded-xl p-6 text-center border border-amber-500/30 hover:border-amber-500 transition-all"
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-40 bg-gray-600 rounded-md mb-4"></div>
              <h3 className="text-lg font-semibold">Unique Find #{item}</h3>
              <p className="text-gray-400">$XX.XX</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 px-6 md:px-16 lg:px-32 text-center bg-gradient-to-r from-indigo-900 to-amber-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Thrift Revolution
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Sell your pre-loved items or discover treasures that tell a story. Be
          part of a sustainable future.
        </p>
        <Link
          to="/sell"
          className="inline-block bg-white text-gray-900 py-4 px-10 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all shadow-lg"
        >
          Start Selling
        </Link>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
