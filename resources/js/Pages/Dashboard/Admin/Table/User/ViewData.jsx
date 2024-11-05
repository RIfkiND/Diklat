import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import { FaArrowLeft } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { userInputs } from "../../../../../Data/DataUser";
import { useState } from "react";

export default function ViewData() {
  const [fieldValue, setFieldValue] = useState("");

  return (
    <AuthenticatedLayout>
      <Head title="User" />

      <DashboardLayout>
        <div className="p-4">
          <button>
            <FaArrowLeft
              className="w-6 h-6"
              onClick={() => window.history.back()}
            />
          </button>
          <h1 className="text-2xl font-semibold text-center mb-6">User</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userInputs.map((column, columnIndex) => (
              <div key={columnIndex} className="col-span-1">
                {column.map((field) => (
                  <div key={field.id} className="mb-4">
                    <InputLabel
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {field.label}
                    </InputLabel>

                    {field.type === "date" ? (
                      <DatePicker
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
                        placeholderText="Choose a date"
                        dateFormat="dd/MM/yyyy"
                        value={field.value || ""}
                      />
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0focus:border-primary focus:ring-primary"
                        value={field.value || ""}
                      ></textarea>
                    ) : field.type === "select" ? (
                      <select
                        id={field.id}
                        name={field.name}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-primary focus:ring-primary"
                        value={field.value || ""}
                      >
                        <option value="" disabled>
                          Pilih {field.label}
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <TextInput
                        id={field.id}
                        type={field.type}
                        name={field.name}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        autoComplete={field.autoComplete}
                        value={field.value || ""}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
