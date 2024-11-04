import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { usePage } from "@inertiajs/react";

const Sidebar = () => {
  const {
    url,
    props: { auth },
  } = usePage();
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isAkunOpen, setIsAkunOpen] = useState(false);
  const [role, setRole] = useState("peserta");
  const [activePath, setActivePath] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setRole(auth.user.role);
    setActivePath(window.location.pathname);
  }, [auth, url]);

  const sidebarItems =
    role === "peserta"
      ? [
          {
            name: "Biodata Peserta",
            icon: <FaRegUser />,
            path: "/dashboard/user",
          },
          {
            name: "Form Daptar",
            icon: <FaRegUser />,
            path: "/dashboard/user/register",
          },
        ]
      : role === "petugas"
        ? [
            {
              name: "Monitoring Peserta",
              icon: <FaRegUser />,
              path: "/dashboard/petugas/monitoring-peserta",
            },
            {
              name: "Form EDP",
              icon: <TbAutomaticGearbox />,
              path: "/form-edp",
            },
            {
              name: "Report",
              icon: <FiFileText />,
              hasDropdown: true,
              items: [
                { name: "Hasil Pendampingan RTL", path: "/rtl-report" },
                { name: "Hasil Pengolahan EDP", path: "/edp-report" },
              ],
            },
          ]
        : role === "admin"
          ? [
              {
                name: "Dashboard Admin",
                icon: <FaRegUser />,
                path: "/petugas/dashboard",
              },
              {
                name: "Laporan Tugas",
                icon: <FiFileText />,
                hasDropdown: true,
                items: [
                  { name: "Laporan Harian", path: "/petugas/laporan-harian" },
                  { name: "Laporan Bulanan", path: "/petugas/laporan-bulanan" },
                ],
              },
              {
                name: "Akun",
                icon: <FaRegUser />,
                hasDropdown: true,
                items: [
                  { name: "Peserta", path: "/admin/peserta" },
                  { name: "Petugas", path: "/admin/petugas" },
                ],
              },
            ]
          : [];

  const handleDropdownToggle = (name) => {
    if (name === "Report") setIsReportOpen(!isReportOpen);
    if (name === "Akun") setIsAkunOpen(!isAkunOpen);
  };

  return (
    <>
      {isOpen ? (
        <button
          className="absolute top-5 translate-x-1/2 right-0 z-50 p-2 rounded-lg bg-white shadow-xl"
          onClick={() => setIsOpen((is) => !is)}
        >
          {/* <FaTimes size={24} /> */}
        </button>
      ) : (
        <button
          className="absolute top-5 translate-x-1/2 right-0 z-50 p-2 rounded-lg bg-white shadow-xl"
          onClick={() => setIsOpen((is) => !is)}
        >
          <FaBars size={24} />
        </button>
      )}
      {isOpen && (
        <div className=" flex h-full w-full flex-col items-center gap-5 p-5">
          <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1">
            <span className="text-2xl font-bold text-white">RTL - EDD</span>
          </div>

          <div className="flex w-full flex-col gap-2">
            <p className="text-start font-bold text-slate-600">Menu</p>

            {/* Regular Sidebar Items */}
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
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[14px] font-medium">{item.name}</span>
                </Link>
              ))}

            {/* Dropdown Sidebar Items */}
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
                      <span className="text-xl">{item.icon}</span>
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

                  {/* Dropdown Items */}
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
      )}
    </>
  );
};

export default Sidebar;
