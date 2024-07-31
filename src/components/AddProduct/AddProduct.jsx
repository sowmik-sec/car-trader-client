import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AddProduct() {
  const [formData, setFormData] = useState({
    image: "",
    model: "",
    brandName: "",
    type: "",
    price: "",
    shortDescription: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    fetch("http://localhost:5000/add-car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Car Successfully added");
          setFormData(null);
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-gray-300">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-300"
          >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-300"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="brandName"
            className="block text-sm font-medium text-gray-300"
          >
            Brand Name
          </label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-300"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-300"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-300"
          >
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-300"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3" // Added padding here
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
