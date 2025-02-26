import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserSquare2 } from "react-icons/lu";
import { useForm, usePage } from "@inertiajs/react"; // Import useForm for logout action

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { post } = useForm();
  const { auth } = usePage().props;
  const handleLogout = () => {
    post(route("Auth.V1.Logout"));
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex w-full justify-between p-5">
      <div></div>
      <div
        className="flex cursor-pointer items-center gap-8"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          <LuUserSquare2 className="text-4xl text-slate-700" />
          <div>
            <p className="font-semibold text-slate-700">{auth.user.name}</p>
            <p className="mt-[-5px] text-sm text-slate-500">{auth.user.role}</p>
          </div>
        </div>
        <div className="relative">
          <IoIosArrowDown
            className={`cursor-pointer text-slate-700 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-32 z-50 transform rounded-lg bg-white shadow-md transition-transform duration-200 ease-out ${
                isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <ul className="py-2 text-center">
                <li
                  className="cursor-pointer px-4 py-2 text-slate-700 hover:bg-gray-100 "
                  onClick={handleLogout} // Panggil handleLogout untuk logout umum
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
