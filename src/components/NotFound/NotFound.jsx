import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
          <p className="mt-2 text-gray-500">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
