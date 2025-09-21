import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2  md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">ShopDemo</h2>
          <p className="text-sm leading-6">
            A simple demo store. Browse categories, add to cart, and check out cool products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/category" className="hover:text-white">Categories</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>&copy; {new Date().getFullYear()} ShopDemo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
