export default function Pagination() {
  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md shadow hover:bg-gray-400 disabled:opacity-50"
        disabled
      >
        Previous
      </button>

      {/* Page Numbers */}
      <button className="bg-indigo-500 text-white px-3 py-1 rounded-md shadow hover:bg-indigo-600">
        1
      </button>
      <button className="bg-white text-indigo-500 px-3 py-1 rounded-md shadow border border-indigo-500 hover:bg-indigo-100">
        2
      </button>
      <button className="bg-white text-indigo-500 px-3 py-1 rounded-md shadow border border-indigo-500 hover:bg-indigo-100">
        3
      </button>
      <button className="bg-white text-indigo-500 px-3 py-1 rounded-md shadow border border-indigo-500 hover:bg-indigo-100">
        4
      </button>
      <span className="px-2">...</span>
      <button className="bg-white text-indigo-500 px-3 py-1 rounded-md shadow border border-indigo-500 hover:bg-indigo-100">
        10
      </button>

      {/* Next Button */}
      <button className="bg-indigo-500 text-white px-3 py-1 rounded-md shadow hover:bg-indigo-600">
        Next
      </button>
    </div>
  );
}
