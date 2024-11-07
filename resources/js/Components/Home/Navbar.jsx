import { React, useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Navigation items to map
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
  ];

  return (
    <header className="flex w-full items-center bg-white">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a
              href="#"
              className="block w-full py-5 text-2xl font-bold text-primary"
            >
              BBPPMPV BMTI
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${navbarOpen ? "navbarTogglerActive" : ""}`}
                id="navbarToggler"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!navbarOpen ? "hidden" : ""}`}
              >
                <ul className="block lg:flex">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex py-2 text-base font-medium text-slate-700 hover:text-primary lg:ml-12 lg:inline-flex duration-300 transition-all ease-in-out"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/80 transition-all duration-300 ease-in-out"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
