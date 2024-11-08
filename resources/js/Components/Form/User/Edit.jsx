import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";

const EditAccount = ({ user }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { data, setData, put, processing, errors } = useForm({
    name: user.name || "",
    no_hp: user.no_hp || "",
    tamatan: user.tamatan || "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("admin.update.peserta", user.id), {
      data,
      onSuccess: () => {},
    });
  };

  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary">
        Edit Account
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </InputLabel>
            <TextInput
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="no_hp"
              className="block text-sm font-medium text-gray-700"
            >
              no_hp
            </InputLabel>
            <TextInput
              id="tamatan"
              name="tamatan"
              type="text"
              value={data.tamatan}
              onChange={(e) => setData("no_hp", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="no_hp@example.com"
            />
            {errors.tamatan && (
              <span className="text-red-500 text-xs">{errors.tamatan}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="no_hp"
              className="block text-sm font-medium text-gray-700"
            >
              No HP
            </InputLabel>
            <TextInput
              id="no_hp"
              name="no_hp"
              type="number"
              value={data.no_hp}
              onChange={(e) => setData("no_hp", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="08211"
            />
            {errors.no_hp && (
              <span className="text-red-500 text-xs">{errors.no_hp}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 relative">
            <InputLabel
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </InputLabel>
            <TextInput
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="relative block w-full border border-gray-300 rounded-md p-2"
              placeholder="********"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 -translate-y-1/2 bottom-0 transform"
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? (
                <AiFillEyeInvisible className="h-5 w-5" />
              ) : (
                <AiFillEye className="h-5 w-5" />
              )}
            </button>
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 items-center flex justify-center gap-4 flex-col">
          <PrimaryButton
            className="w-full max-w-xs tracking-normal flex items-center justify-center"
            disabled={processing}
          >
            {processing ? "Saving..." : "Save"}
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default EditAccount;
