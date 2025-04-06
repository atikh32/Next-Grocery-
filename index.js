import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-100 text-gray-900 p-6">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-green-800">Next Grocery</h1>
        <p className="text-lg text-orange-600">Powered by Grammik – Pure. Fresh. Local.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {[
          { title: "Grammik Besan", desc: "Premium quality gram flour directly from local farms." },
          { title: "Grammik Tea", desc: "Strong & aromatic blend for a refreshing start to your day." },
          { title: "Grammik Soybean Oil", desc: "Healthy cooking oil with zero cholesterol and rich taste." }
        ].map((item, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="col-span-1">
            <div className="rounded-2xl shadow-md bg-white p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>{item.desc}</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-600 mt-10">
        &copy; 2025 Next Grocery. All rights reserved.
      </footer>
    </div>
  );
}
