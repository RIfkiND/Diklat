import Pagination from "@/Components/Ui/Pagination";
import TableUser from "@/Components/Table/TableUser";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function UserDashboard({ pesertas }) {
  return (
    <AuthenticatedLayout>
      <Head title="Biodata User" />

      <DashboardLayout>
        <TableUser data={pesertas} />

        <div className="mt-5 flex items-center justify-center">
          <Pagination paginateItems={pesertas} />
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
