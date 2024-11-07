import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Search from "@/Components/Ui/Input/Search";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import Modal from "@/Components/Ui/Modal/Modal";
import CreateAccount from "@/Components/Form/CreateAccountUser";
import ReadAccount from "@/Components/Form/User/Read";
import EditAccount from "@/Components/Form/User/Edit";
import { router } from "@inertiajs/react";

const TableAccountUser = ({ data }) => {
  const [available] = useState("available");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [timer, setTimer] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [searchQuery]);

  // Filter data based on the debounced search query
  const filteredData = data.data.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query); // Update the search query state
  };
  const handleDelete = (userId) => {
    if (confirm("Yakin Ingin Delete ?")) {
      router.delete(route("admin.delete.peserta", userId), {
        onSuccess: () => {
          console.log("Deleted Peserta with ID:", userId);
        },
        onError: (error) => {
          console.error("Error deleting user:", error);
          alert("There was an error deleting the user.");
        },
      });
    }
  };

  return (
    <>
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative gap-5 z-50 w-full">
        <div className="flex gap-5 justify-between w-full flex-wrap">
          <Search onSearchChange={handleSearchChange} />
          <PrimaryButton
            className="rounded-xl flex items-center md:justify-center justify-start tracking-tight capitalize w-full md:w-auto "
            onClick={() => {
              setIsModalOpen(!isModalOpen);
              setMode("create");
              setSelectedUser(null); // Clear selected user for create mode
            }}
          >
            Create Account
          </PrimaryButton>
        </div>
        <Modal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          maxWidth="xl"
          className="w-full"
        >
          <div className="p-6">
            {mode === "create" && <CreateAccount />}
            {mode === "read" && <ReadAccount user={selectedUser} />}
            {mode === "edit" && <EditAccount user={selectedUser} />}
          </div>
        </Modal>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg text-center">
          <thead>
            <tr className="text-primary text-sm font-semibold">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">No HP</th>
              <th className="py-3 px-4">Selengkapnya</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr
                key={index}
                className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.no_hp}</td>
                <td className="py-3 px-4 relative flex justify-center ">
                  {available === "available" ? (
                    <>
                      <button
                        className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === user.id ? null : user.id,
                          )
                        }
                      >
                        <FaEllipsisV className="text-xl text-gray-600" />
                      </button>
                      {openDropdown === user.id && (
                        <div
                          className="absolute right-0 top-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
                          ref={dropdownRef}
                        >
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => {
                              setMode("read");
                              setIsModalOpen(true);
                              setSelectedUser(user); // Set selected user for read mode
                            }}
                          >
                            <FaEye className="text-teal-600" />
                            <span>View</span>
                          </button>
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => {
                              setMode("edit");
                              setIsModalOpen(true);
                              setSelectedUser(user);
                            }}
                          >
                            <FaEdit className="text-blue-600" />
                            <span>Edit</span>
                          </button>
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => handleDelete(user.id)}
                          >
                            <FaTrash className="text-red-600" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <button className="w-full flex items-center gap-3 rounded-xl bg-slate-200 hover:bg-slate-300 py-3 px-4">
                      <MdCancel className="text-lg text-slate-600" />
                      <span>Cancelled</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableAccountUser;
