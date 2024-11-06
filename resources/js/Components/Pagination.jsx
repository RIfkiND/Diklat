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
 import { Link } from '@inertiajs/react'
// import { Link } from "@inertiajs/react";
// const Pagination = ({ paginateItems, className }) => {
//   if (paginateItems.last_page == 1) return;

//   return (
//     <nav className={className}>
//       <ul className="flex flex-row items-center gap-1">
//         {/*  Previous Page Link  */}
//         <li>
//           {paginateItems.prev_page_url ? (
//             <Link
//               className="pagination-page "
//               href={paginateItems.prev_page_url}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="ml-0.5 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Anterior
//             </Link>
//           ) : (
//             <span className="pagination-page ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="ml-0.5 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Anterior
//             </span>
//           )}
//         </li>

//         {/*  Pagination Elements  */}
//         {paginateItems.links.slice(1, -1).map((link) =>
//           link.url && link.active ? (
//             <li key={link.label} aria-disabled="true">
//               <span className="pagination-current-page">{link.label}</span>
//             </li>
//           ) : (
//             <li
//               key={link.label}
//               className="hidden sm:block"
//               aria-disabled="true"
//             >
//               <Link className="pagination-page" href={link.url}>
//                 {link.label}
//               </Link>
//             </li>
//           ),
//         )}

//         {/*  Next Page Link  */}
//         <li>
//           {paginateItems.next_page_url ? (
//             <Link
//               className="pagination-page "
//               href={paginateItems.next_page_url}
//             >
//               Siguiente
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="ml-0.5 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </Link>
//           ) : (
//             <span className="pagination-page ">
//               Siguiente
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="ml-0.5 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Pagination;
