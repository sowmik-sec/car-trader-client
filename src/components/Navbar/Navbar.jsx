import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Signed Out");
      })
      .catch((err) => console.log(err?.message));
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white hover:text-gray-400 flex">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/032/752/217/small_2x/super-car-logo-icon-ai-generative-free-png.png"
              alt="Car Trader Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-white text-xl font-bold">Car Trader</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/add-product" className="text-white hover:text-gray-400">
            Add Product
          </Link>
          <Link to="/my-cart" className="text-white hover:text-gray-400">
            My Cart
          </Link>
          <Link to="/reviews" className="text-white hover:text-gray-400">
            Reviews
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-white hover:text-gray-400"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-400"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12H4m0 6h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-2 py-1 text-white hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/add-product"
            className="block px-2 py-1 text-white hover:bg-gray-700"
          >
            Add Product
          </Link>
          <Link
            to="/my-cart"
            className="block px-2 py-1 text-white hover:bg-gray-700"
          >
            My Cart
          </Link>
          <Link
            to="/reviews"
            className="block px-2 py-1 text-white hover:bg-gray-700"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="block px-2 py-1 text-white hover:bg-gray-700"
          >
            Contact
          </Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="block w-full text-left px-2 py-1 text-white hover:bg-gray-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-2 py-1 text-white hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
