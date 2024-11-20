import Pagination from "@/Components/Ui/Pagination";
import TableRtlUser from "@/Components/Table/Rtl/TableRtl";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import "react-datepicker/dist/react-datepicker.css";
import HeaderHome from "@/Components/Ui/HeaderHome";

export default function DiklatRegister({ Rtl }) {
  return (
    <AuthenticatedLayout>
      <Head title="Diklat Register" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <HeaderHome
          title={"Diklat Register"}
          description={"Tempat Penginputan RTL"}
          content={"/images/ilustrasi/Monitor-bro.svg"}
        />
      </div>

      <DashboardLayout>
        <div className="p-4">
          <TableRtlUser data={Rtl} />
        </div>
        <div className="flex justify-center">
          <Pagination paginateItems={Rtl} />
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
