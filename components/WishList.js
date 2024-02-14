export default function WishList({ wishes }) {
  return (
    <div className="max-w-2xl w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Wishes for the Happy Couple
      </h3>
      <ul className="divide-y divide-gray-200">
        {wishes.map((wish) => (
          <li
            key={wish._id}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <p className="text-md font-medium text-gray-700">
              <span className="font-semibold text-pink-500">{wish.name}</span>:{" "}
              {wish.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
