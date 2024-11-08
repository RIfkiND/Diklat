import Pagination from "@/Components/Ui/Pagination";
import TableUser from "@/Components/Table/TableUser";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import HeaderHome from "@/Components/Ui/HeaderHome";

export default function UserDashboard({ pesertas }) {
  return (
    <AuthenticatedLayout>
      <Head title="Data Peserta" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <HeaderHome
          title={"Data Peserta"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi praesentium ea."
          }
          content={"/images/ilustrasi/Monitor-bro.svg"}
        />
      </div>
      <DashboardLayout>
        <TableUser data={pesertas} />

        <div className="mt-5 flex items-center justify-center">
          <Pagination paginateItems={pesertas} />
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
