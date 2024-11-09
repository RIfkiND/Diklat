import Pagination from "@/Components/Ui/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import TableAccountPetugas from "@/Components/Table/Account/TableAccountPetugas";
import HeaderHome from "@/Components/Ui/HeaderHome";

export default function AccountPetugas({ petugas }) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [selectedUser, setSelectedUser] = useState(null);

  //   const openModal = (user) => {
  //     setSelectedUser(user);
  //     setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //     setSelectedUser(null);
  //   };
  return (
    <AuthenticatedLayout>
      <Head title="Create Account Petugas" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <HeaderHome
          title={"Account Petugas"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi praesentium ea."
          }
          content={"/images/ilustrasi/Analytics-amico.svg"}
        />
      </div>
      <DashboardLayout>
        <TableAccountPetugas data={petugas} />

        <div className="mt-5 flex items-center justify-center">
          <Pagination paginateItems={petugas} />
        </div>

        {/* <Modal show={isModalOpen} onClose={closeModal} maxWidth="xl">
          <h2 className="text-lg font-semibold mb-4">User Details</h2>
          {selectedUser ? (
            <div>
              <div></div>
            </div>
          ) : null}
        </Modal> */}
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
