import Pagination from "@/Components/Ui/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import TableAccountPetugas from "@/Components/Table/Account/TableAccountPetugas";

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
      <Head title="Biodata User" />

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
