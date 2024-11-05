export const getNavItems = (role) => {
  return role === "peserta"
    ? [
        { name: "Biodata Peserta", icon: "FaRegUser", path: "/dashboard/user" },
        {
          name: "Form Daftar",
          icon: "FaRegUser",
          path: "/dashboard/user/register",
        },
      ]
    : role === "petugas"
      ? [
          {
            name: "Monitoring Peserta",
            icon: "FaRegUser",
            path: "/dashboard/petugas/monitoring-peserta",
          },
          {
            name: "Data EDP",
            icon: "TbAutomaticGearbox",
            path: "/dashboard/petugas/data-edp",
          },
          {
            name: "Report",
            icon: "FiFileText",
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
              name: "Table",
              icon: "FaRegUser",
              hasDropdown: true,
              items: [
                { name: "User", path: "/dashboard/admin/users/table/user" },
                {
                  name: "Petugas",
                  path: "/dashboard/admin/users/table/petugas",
                },
              ],
            },
            {
              name: "Laporan Tugas",
              icon: "FiFileText",
              hasDropdown: true,
              items: [
                { name: "Laporan Harian", path: "/petugas/laporan-harian" },
                { name: "Laporan Bulanan", path: "/petugas/laporan-bulanan" },
              ],
            },
            {
              name: "Akun",
              icon: "FaRegUser",
              hasDropdown: true,
              items: [
                { name: "Peserta", path: "/admin/peserta" },
                { name: "Petugas", path: "/admin/petugas" },
              ],
            },
          ]
        : [];
};
