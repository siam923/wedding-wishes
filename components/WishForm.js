"use client";
import { useRef } from "react";

const WishForm = ({ action }) => {
  const ref = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(ref.current);
    await action(formData);
    ref.current.reset();
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="max-w-lg w-full mx-auto my-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Share Your Wish
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
        />
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Your wish"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
          rows="4"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-colors duration-150"
        >
          Send Wish
        </button>
      </div>
    </form>
  );
};

export default WishForm;
