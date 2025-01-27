import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");

  const { signUpUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(fullName, photoURL)
          .then(() => {
            console.log("Profile updated");
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email, createdAt };
            fetch("http://localhost:5000/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  toast.success("Your account has been created");
                }
                navigate("/");
              })
              .catch((err) => setError(err?.message));
          })
          .catch((err) => {
            setError(err.message);
            console.error(err);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Toaster />
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-teal-400">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="photourl"
              className="block text-sm font-medium text-gray-300"
            >
              Photo URL
            </label>
            <input
              id="photourl"
              name="photourl"
              type="url"
              required
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-teal-400 hover:text-teal-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
