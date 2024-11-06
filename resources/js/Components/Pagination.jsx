import { Link } from "@inertiajs/react";

const Pagination = ({ paginateItems, className }) => {
  if (paginateItems.last_page === 1) return;

  return (
    <nav className={className}>
      <ul className="flex items-center space-x-2">
        {/* Tombol Sebelumnya */}
        <li>
          {paginateItems.prev_page_url ? (
            <Link
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md shadow hover:bg-gray-400"
              href={paginateItems.prev_page_url}
            >
              Previous
            </Link>
          ) : (
            <button
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md shadow opacity-50 cursor-not-allowed"
              disabled
            >
              Previous
            </button>
          )}
        </li>

        {/* Nomor Halaman */}
        {paginateItems.links.slice(1, -1).map((link) => (
          <li key={link.label}>
            {link.url ? (
              <Link
                href={link.url}
                className={`${
                  link.active
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                } px-3 py-1 rounded-md shadow hover:bg-indigo-600 hover:text-white`}
              >
                {link.label}
              </Link>
            ) : (
              <span
                className="px-3 py-1 text-gray-500 rounded-md shadow bg-gray-100 cursor-not-allowed"
                aria-disabled="true"
              >
                {link.label}
              </span>
            )}
          </li>
        ))}

        {/* Tombol Berikutnya */}
        <li>
          {paginateItems.next_page_url ? (
            <Link
              className="bg-primary text-white px-3 py-1 rounded-md shadow hover:bg-indigo-600"
              href={paginateItems.next_page_url}
            >
              Next
            </Link>
          ) : (
            <button
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md shadow opacity-50 cursor-not-allowed"
              disabled
            >
              Next
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
