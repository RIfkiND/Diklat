import { React, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
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

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="">
          <p className="py-5 text-2xl font-bold text-primary">BBPPMPV BMTI</p>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          {navItems.map((item, index) => (
            <div className="" key={index}>
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
        <a
          href="/Auth/Peserta/Login"
          className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/80 transition-all duration-300 ease-in-out"
        >
          Login
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="relative md:hidden block z-50">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        />

        {/* Mobile menu */}
        {openNav && (
          <div className="absolute top-6 right-0 bg-white shadow-lg w-40 py-5">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.href)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Auth/Peserta/Login"
              className="block py-2 text-base font-medium text-slate-700 hover:text-primary px-4 transition-all duration-300 ease-in-out"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
