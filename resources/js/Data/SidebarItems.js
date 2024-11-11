export const getNavItems = (role) => {
  return role === "peserta"
    ? [
        { name: "Biodata Peserta", icon: "FaRegUser", path: "/dashboard/user" },
        {
          name: "Form Daftar",
          icon: "FaRegUser",
          path: "/dashboard/user/register",
        },
        // {
        //   name: "Monitoring",
        //   icon: "FaRegUser",
        //   path: "/dashboard/user/monitoring",
        // },
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
            hasDropdown: true,
            items: [
              {
                name: "EDP Peserta",
                path: "/dashboard/petugas/edp/edp-peserta",
              },
              {
                name: "EDP Kolega, Pimpinan, Guru",
                path: "/dashboard/petugas/edp/edp-other",
              },
            ],
          },
          {
            name: "Report",
            icon: "FiFileText",
            hasDropdown: true,
            items: [
              {
                name: "Hasil Pendampingan RTL",
                path: "/dashboard/petugas/report/hasil-pendampingan-rtl",
              },
              {
                name: "Hasil Pengolahan EDP",
                path: "/dashboard/petugas/report/hasil-pengolahan-edp",
              },
            ],
          },
        ]
      : role === "admin"
        ? [
            {
              name: "Table Peserta",
              icon: "FaRegUser",
              path: "/dashboard/admin/users/table/user",
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
                { name: "Peserta", path: "/dashboard/admin/account/user" },
                {
                  name: "Petugas",
                  path: "/dashboard/admin/account/petugas",
                },
              ],
            },
          ]
        : [];
};
