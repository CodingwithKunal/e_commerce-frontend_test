import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import products from "../data/products";

const Sidebar = () => {
  // Track which category is open
  const [openCategory, setOpenCategory] = useState(null);
  // Price slider
  const [price, setPrice] = useState(10000);

  // Unique categories + add "Home" manually 
  const categories = ["Home", ...new Set(products.map((p) => p.category))];
  // Colors
  const uniqueColors = [...new Set(products.flatMap((p) => p.colors || []))].slice(0, 8);
  // Demo brands
  const brands = ["Nike", "Puma", "Ray-Ban", "Glossier"];

  const toggleCategory = (cat) => {
    // don’t toggle Home 
    if (cat === "Home") return;
    setOpenCategory(openCategory === cat ? null : cat);
  };

  return (
    <aside className="w-64 bg-slate-300 shadow-lg mt-8  h-full p-4 overflow-y-auto hidden md:block rounded-md">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              className="rounded px-3 py-2 bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleCategory(cat)}
                className="flex justify-between items-center w-full text-left font-medium text-sky-700 hover:text-indigo-600 transition-colors"
                aria-expanded={openCategory === cat}
              >
                <span>{cat}</span>
                {/* toggle Icon */}
                {cat !== "Home" &&
                  (openCategory === cat ? (
                    <HiChevronUp className="w-4 h-4" />
                  ) : (
                    <HiChevronDown className="w-4 h-4" />
                  ))}
              </button>

              {/*  non-Home */}
              {cat !== "Home" && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openCategory === cat ? "max-h-20 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 italic px-1">
                    View more about <span className="font-semibold">{cat}</span>
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Price Range</h3>
        <input
          type="range"
          min="0"
          max="30000"
          step="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-indigo-600"
        />
        <p className="text-sm text-gray-600 mt-1">Range: ₹{price}</p>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueColors.map((c, i) => (
            <span
              key={i}
              className="w-6 h-6 rounded-full shadow-sm border-2 border-gray-50 cursor-pointer hover:scale-110 transition"
              style={{ backgroundColor: c }}
              title={c}
            ></span>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Brands</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {brands.map((b, idx) => (
            <li key={idx}>
              <label className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
                <input type="checkbox" className="accent-indigo-600" />
                {b}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* More Button */}
      <button className="bg-gray-200 py-2 px-2 my-4 text-blue-700 w-full cursor-pointer rounded hover:shadow-md">
        More
      </button>
    </aside>
  );
};

export default Sidebar;
