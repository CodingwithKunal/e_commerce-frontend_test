import React, { useState } from "react";
import { Link } from "react-router";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX,
} from "react-icons/hi";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <header className="bg-gray-100 shadow fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Left: Logo + Mobile menu btn */}
        <div className="flex items-center gap-3 ">
          <button className="md:hidden " onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
          <h3 className="text-xl font-bold text-indigo-600 ">
            ShopDemo
          </h3>
        </div>

        {/* Middle: search bar (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-800 cursor-pointer" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-3 py-2 border-2 border-sky-300 rounded-xl "
            />
          </div>
        </div>

        {/* Right: Cart + Contact */}
        <div className="flex items-center gap-5">
          {/* mobile search btn */}
          <button className="md:hidden" onClick={() => setOpenSearch(!openSearch)}>
            <HiOutlineSearch className="w-5 h-5" />
          </button>

          <Link to="/cart" className="relative">
            <HiOutlineShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </Link>

          <Link
            to="/contact"
            className="hidden md:inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      {openSearch && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white px-4 pb-3 z-50 shadow">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-3 py-2 border rounded focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}


      {/* Mobile nav */}
      {openMenu && (
        <nav className="md:hidden absolute left-0 right-0 top-full bg-white border-t px-4 py-4 space-y-3 z-50 shadow">
          <Link className="block w-full text-center py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" to="/">Home</Link>
          <Link className="block w-full text-center py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" to="/category">Categories</Link>
          <Link className="block w-full text-center py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" to="/cart">Cart</Link>
          <Link className="block w-full text-center py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition" to="/contact">Contact</Link>
        </nav>
      )}

    </header>
  );
}

export default Navbar;
