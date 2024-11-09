import { React, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link, usePage, useForm } from "@inertiajs/react";

const Navbar = () => {
  const { post } = useForm();
  const { auth } = usePage().props;
  const handleLogout = () => {
    post(route("Auth.V1.Logout"));
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
  ];

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [dropOpen, setDropOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [dropOpenMobile, setDropOpenMobile] = useState(false);

  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div>
          <p className="py-5 text-2xl font-bold text-primary">BBPPMPV BMTI</p>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => handleScroll(item.href)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        {auth.user ? (
          <div className="flex items-center gap-5">
            <span className="text-primary font-medium">{auth.user.name}</span>
            <button
              onClick={handleLogout}
              className="text-primary hover:text-white border border-primary px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary"
            >
              Logout
            </button>
          </div>
        ) : (
          <div
            onClick={() => setDropOpen(!dropOpen)}
            className="flex items-center gap-5 text-primary py-2 px-8 rounded-xl border border-primary cursor-pointer hover:bg-primary hover:text-white group transition-all duration-300 ease-in-out"
          >
            <span>Login</span>
            <span className="text-xl text-primary group-hover:text-white transition-colors duration-300 ease-in-out">
              <IoIosArrowDown
                className={`transition-transform duration-300 ease-in-out transform ${dropOpen ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          </div>
        )}

        {dropOpen && !auth.user && (
          <div className="absolute bg-white z-[50] top-16 rounded-xl border flex flex-col shadow-primaryshadow rounded-tl-none">
            <Link
              href={route("Views.Auth.Peserta")}
              className="py-2 cursor-pointer hover:bg-slate-200 px-5 rounded-tr-xl text-slate-700 transition-all duration-300 ease-in-out"
            >
              Login as Peserta
            </Link>
            <Link
              href={route("Views.Auth.Petugas")}
              className="py-2 cursor-pointer hover:bg-slate-200 px-5 rounded-bl-xl rounded-br-xl text-slate-700 transition-all duration-300 ease-in-out"
            >
              Login as Pendamping
            </Link>
          </div>
        )}
      </div>

      <div className="relative md:hidden block z-50">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        />

        {openNav && (
          <div className="absolute top-6 right-0 bg-white shadow-lg w-48 py-5">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.href)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </button>
            ))}
            {auth.user ? (
              <div className="px-4 py-2">
                <span className="block text-slate-700 font-medium">
                  {auth.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 text-slate-700 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div
                onClick={() => setDropOpenMobile(!dropOpenMobile)}
                className="group flex justify-between items-center cursor-pointer py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
              >
                <span>Login</span>
                <span className="text-xl text-slate-700 group-hover:text-primary transition-colors duration-300 ease-in-out">
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ease-in-out transform ${dropOpenMobile ? "rotate-180" : "rotate-0"}`}
                  />
                </span>
              </div>
            )}

            {dropOpenMobile && !auth.user && (
              <div className="flex flex-col">
                <Link
                  href={route("Views.Auth.Peserta")}
                  className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
                >
                  Login as Peserta
                </Link>
                <Link
                  href={route("Views.Auth.Petugas")}
                  className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
                >
                  Login as Pendamping
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
