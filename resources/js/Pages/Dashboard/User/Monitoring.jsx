import TableMonitoringUser from "@/Components/Table/TableMonitoringUser";
import HeaderHome from "@/Components/Ui/HeaderHome";
import Pagination from "@/Components/Ui/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import "react-datepicker/dist/react-datepicker.css";

export default function MonitoringUser({ BiodataPeserta }) {
  return (
    <AuthenticatedLayout>
      <Head title="Diklat Register" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <HeaderHome
          title={"Monitoring User"}
          description={"Pantau Perkembangan, Wujudkan Keberayan!"}
          content={"/images/ilustrasi/Monitor-bro.svg"}
        />
      </div>

      <DashboardLayout>
        <div className="p-4">
          <TableMonitoringUser data={BiodataPeserta} />
        </div>
        <div className="flex justify-center">
          {" "}
          <Pagination paginateItems={BiodataPeserta} />
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
