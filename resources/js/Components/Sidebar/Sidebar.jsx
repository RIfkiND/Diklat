import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { usePage } from "@inertiajs/react";
import { getNavItems } from "@/Data/SidebarItems";
import { VscCopy } from "react-icons/vsc";

const iconMap = {
  FaRegUser: <FaRegUser />,
  TbAutomaticGearbox: <TbAutomaticGearbox />,
  FiFileText: <FiFileText />,
  VscCopy: <VscCopy />,
};
const Sidebar = () => {
  const {
    url,
    props: { auth },
  } = usePage();
  //   const [isReportOpen, setIsReportOpen] = useState(false);
  //   const [isAkunOpen, setIsAkunOpen] = useState(false);
  const [role, setRole] = useState("");
  const [activePath, setActivePath] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setRole(auth.user?.role); // setRole("petugas");
    setActivePath(window.location.pathname);
  }, [auth, url]);

  const sidebarItems = getNavItems(role);

  const handleDropdownToggle = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <div className="hidden md:flex h-full w-full flex-col items-center gap-5 p-5">
        <Link
          href="/"
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1"
        >
          <span className="text-2xl font-bold text-white">RTL - EDD</span>
        </Link>

        <div className="flex w-full flex-col gap-2">
          <p className="text-start font-bold text-slate-600">Menu</p>

          {sidebarItems
            .filter((item) => !item.hasDropdown)
            .map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`flex w-full cursor-pointer items-center gap-5 rounded-xl px-4 py-3 text-[#737791] transition-all duration-300 ${
                  activePath === item.path
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-500 hover:text-white"
                }`}
              >
                <span className="text-xl">{iconMap[item.icon]}</span>
                <span className="text-[14px] font-medium">{item.name}</span>
              </Link>
            ))}

          {sidebarItems
            .filter((item) => item.hasDropdown)
            .map((item, index) => (
              <div
                key={index}
                className={`group w-full cursor-pointer rounded-xl px-4 py-3 text-[#737791] transition-all duration-300 hover:text-white ${
                  activeDropdown === item.name
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-500"
                }`}
                onClick={() => handleDropdownToggle(item.name)}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-5">
                    <span className="text-xl">{iconMap[item.icon]}</span>
                    <span className="text-[16px] font-medium">{item.name}</span>
                  </div>
                  {activeDropdown === item.name ? (
                    <MdKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdKeyboardArrowRight className="text-xl" />
                  )}
                </div>

                {activeDropdown === item.name ? (
                  <div className="mt-2 flex flex-col gap-2 border-l-2 py-2 pl-8 transition-all duration-300">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className={`cursor-pointer text-sm transition-all duration-300 text-white group-hover:text-white ${
                          activePath === subItem.path
                            ? "font-semibold text-indigo-500"
                            : "text-white hover:scale-105"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
