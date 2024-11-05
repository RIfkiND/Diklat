import FilterByStartTime from "@/Components/FilteraBySrartTime";
import FilterByEndTime from "@/Components/FilterByEndTime";
import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import TableUser from "@/Components/TableUser";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function UserDashboard() {
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
        
        <TableUser />

        <div className="mt-5 flex items-center justify-center">
          <Pagination />
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
