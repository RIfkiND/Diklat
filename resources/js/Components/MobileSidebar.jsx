import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { getNavItems } from "./../../../public/assets/SidebarItems";

const iconMap = {
  FaRegUser: <FaRegUser />,
  TbAutomaticGearbox: <TbAutomaticGearbox />,
  FiFileText: <FiFileText />,
};

const MobileSidebar = () => {
  const {
    url,
    props: { auth },
  } = usePage();
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isAkunOpen, setIsAkunOpen] = useState(false);
  const [role, setRole] = useState("peserta");
  const [activePath, setActivePath] = useState("");
  const [openSide, setOpenSide] = useState(false);

  const handleToggleSide = () => {
    setOpenSide((prev) => !prev);
  };

  useEffect(() => {
    // setRole(auth.user.role);
    setRole("petugas");
    setActivePath(window.location.pathname);
  }, [auth, url]);

  const sidebarItems = getNavItems(role);

  const handleDropdownToggle = (name) => {
    if (name === "Report") setIsReportOpen(!isReportOpen);
    if (name === "Akun") setIsAkunOpen(!isAkunOpen);
  };

  return (
    <>
      <button
        onClick={handleToggleSide}
        className={`absolute transition-all duration-300 ease-in-out top-3 ${
          openSide ? "left-[200px]" : "left-5"
        }`}
      >
        {openSide ? (
          <div className="p-4 border rounded-lg bg-white">
            <ImCancelCircle className="text-xl" />
          </div>
        ) : (
          <div className="p-4 border rounded-lg bg-white">
            <GiHamburgerMenu className="text-xl" />
          </div>
        )}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-slate-200 transition-all duration-300 ease-in-out ${
          openSide ? "w-[200px]" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex h-full w-full flex-col items-center gap-5 p-5">
          <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1">
            <span className="text-2xl font-bold text-white">RTL - EDD</span>
          </div>

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
                  className={`group w-full cursor-pointer rounded-xl px-4 py-3 text-[#737791] transition-all duration-300 ${
                    (item.name === "Report" && isReportOpen) ||
                    (item.name === "Akun" && isAkunOpen)
                      ? "bg-indigo-500 text-white"
                      : "hover:bg-indigo-500 hover:text-white"
                  }`}
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="text-xl">{iconMap[item.icon]}</span>
                      <span className="text-[16px] font-medium">
                        {item.name}
                      </span>
                    </div>
                    {(item.name === "Report" && isReportOpen) ||
                    (item.name === "Akun" && isAkunOpen) ? (
                      <MdKeyboardArrowDown className="text-xl" />
                    ) : (
                      <MdKeyboardArrowRight className="text-xl" />
                    )}
                  </div>

                  {(item.name === "Report" && isReportOpen) ||
                  (item.name === "Akun" && isAkunOpen) ? (
                    <div className="mt-2 flex flex-col gap-2 border-l-2 py-2 pl-8 transition-all duration-300">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className={`cursor-pointer text-sm transition-all duration-300 group-hover:text-white ${
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
      </div>
    </>
  );
};

export default MobileSidebar;
