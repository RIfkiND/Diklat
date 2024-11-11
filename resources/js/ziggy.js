const Ziggy = {
  url: "http://localhost",
  port: null,
  defaults: {},
  routes: {
    "sanctum.csrf-cookie": {
      uri: "sanctum/csrf-cookie",
      methods: ["GET", "HEAD"],
    },
    "livewire.update": { uri: "livewire/update", methods: ["POST"] },
    "livewire.upload-file": { uri: "livewire/upload-file", methods: ["POST"] },
    "livewire.preview-file": {
      uri: "livewire/preview-file/{filename}",
      methods: ["GET", "HEAD"],
      parameters: ["filename"],
    },
    landingpage: { uri: "/", methods: ["GET", "HEAD"] },
    "send.email": { uri: "send/email", methods: ["POST"] },
    "Views.Auth.Admin": { uri: "Auth/Admin/Login", methods: ["GET", "HEAD"] },
    "Views.Auth.Petugas": {
      uri: "Auth/Petugas/Login",
      methods: ["GET", "HEAD"],
    },
    "Views.Auth.Peserta": {
      uri: "Auth/Peserta/Login",
      methods: ["GET", "HEAD"],
    },
    "Auth.V1.Login.Admin": { uri: "Auth/v1/Admin/Login", methods: ["POST"] },
    "Auth.V1.Login.Petugas": {
      uri: "Auth/v1/Petugas/Login",
      methods: ["POST"],
    },
    "Auth.V1.Login.Peserta": {
      uri: "Auth/v1/Peserta/Login",
      methods: ["POST"],
    },
    "Auth.V1.Logout": { uri: "Auth/v1/Logout", methods: ["POST"] },
    "petugas.monitoring-peserta": {
      uri: "dashboard/petugas/monitoring-peserta",
      methods: ["GET", "HEAD"],
    },
    "petugas.daftar-rtl-peserta": {
      uri: "dashboard/petugas/monitoring-peserta/daftar-rtl",
      methods: ["GET", "HEAD"],
    },
    "petugas.data-edp": {
      uri: "dashboard/petugas/data-edp",
      methods: ["GET", "HEAD"],
    },
    "petugas.data-edp-show": {
      uri: "dashboard/petugas/data-edp/show",
      methods: ["GET", "HEAD"],
    },
    "Petugas.report-pendampingan-rtl": {
      uri: "dashboard/petugas/report/hasil-pendampingan-rtl",
      methods: ["GET", "HEAD"],
    },
    "Petugas.report-pendampingan-rtl-slug": {
      uri: "dashboard/petugas/report/hasil-pendampingan-rtl/slug",
      methods: ["GET", "HEAD"],
    },
    "Petugas.report-pengolahan-edp": {
      uri: "dashboard/petugas/report/hasil-pengolahan-edp",
      methods: ["GET", "HEAD"],
    },
    "Petugas.report-pengolahan-edp-slug": {
      uri: "dashboard/petugas/report/hasil-pengolahan-edp/slug",
      methods: ["GET", "HEAD"],
    },
    "petugas.dataedp-edp-siswa": {
      uri: "dashboard/petugas/edp/edp-peserta",
      methods: ["GET", "HEAD"],
    },
    "petugas.dataedp-edp-other": {
      uri: "dashboard/petugas/edp/edp-other",
      methods: ["GET", "HEAD"],
    },
    "petugas.dataedp-edp-siswa.show": {
      uri: "dashboard/petugas/edp/edp-peserta/show",
      methods: ["GET", "HEAD"],
    },
    "petugas.dataedp-edp-other.show": {
      uri: "dashboard/petugas/edp/edp-other/show",
      methods: ["GET", "HEAD"],
    },
    "user.dashboard": { uri: "dashboard/user", methods: ["GET", "HEAD"] },
    "user.register": {
      uri: "dashboard/user/register",
      methods: ["GET", "HEAD"],
    },
    "add.biodata": { uri: "dashboard/add/data", methods: ["POST"] },
    "user.register.delete": {
      uri: "user/register/{id}",
      methods: ["DELETE"],
      parameters: ["id"],
    },
    "user.register.edit": {
      uri: "user/register/{id}",
      methods: ["PUT"],
      parameters: ["id"],
    },
    "form-edp.siswa": { uri: "form-edp-siswa", methods: ["GET", "HEAD"] },
    "form-edp.other": { uri: "form-edp", methods: ["GET", "HEAD"] },
    "form-edp.link": { uri: "form-edp-send-link", methods: ["GET", "HEAD"] },
    "form-edp.finish": { uri: "form-edp-finish", methods: ["GET", "HEAD"] },
    "post.edp.siswa": { uri: "form/edp/siswa/proses", methods: ["POST"] },
    "post.edp.other": { uri: "form/edp/other/proses", methods: ["POST"] },
    "admin.users": {
      uri: "dashboard/admin/users/table/user",
      methods: ["GET", "HEAD"],
    },
    "peserta.view": {
      uri: "dashboard/admin/table/user/view",
      methods: ["GET", "HEAD"],
    },
    "peserta.edit": {
      uri: "dashboard/admin/table/user/edit",
      methods: ["GET", "HEAD"],
    },
    "account.peserta": {
      uri: "dashboard/admin/account/user",
      methods: ["GET", "HEAD"],
    },
    "account.petugas": {
      uri: "dashboard/admin/account/petugas",
      methods: ["GET", "HEAD"],
    },
    "admin.add.peserta": { uri: "admin/add/peserta", methods: ["POST"] },
    "admin.update.peserta": {
      uri: "admin/update/peserta/{id}",
      methods: ["PUT"],
      parameters: ["id"],
    },
    "admin.delete.peserta": {
      uri: "admin/delete/peserta/{id}",
      methods: ["DELETE"],
      parameters: ["id"],
    },
    "peserta.search": { uri: "peserta/search", methods: ["GET", "HEAD"] },
    "admin.add.petugas": { uri: "admin/add/petugas", methods: ["POST"] },
    "admin.update.petugas": {
      uri: "admin/update/petugas/{id}",
      methods: ["PUT"],
      parameters: ["id"],
    },
    "admin.delete.petugas": {
      uri: "admin/delete/petugas/{id}",
      methods: ["DELETE"],
      parameters: ["id"],
    },
    "petugas.search": { uri: "petugas/search", methods: ["GET", "HEAD"] },
    "storage.local": {
      uri: "storage/{path}",
      methods: ["GET", "HEAD"],
      wheres: { path: ".*" },
      parameters: ["path"],
    },
  },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
