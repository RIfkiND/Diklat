import Pagination from "@/Components/Pagination";
import TableRtlUser from "@/Components/Table/Rtl/TableRtl";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import "react-datepicker/dist/react-datepicker.css";

export default function DiklatRegister() {
  return (
    <AuthenticatedLayout>
      <Head title="Diklat Register" />

      <DashboardLayout>
        <div className="p-4">
          <TableRtlUser />
        </div>
        <div className="flex justify-center">{/* <Pagination /> */}</div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
