import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";

const CreateAccountPetugas = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    nip: "",
    no_hp: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.add.petugas"), {
      data,
      onSuccess: () => {
        alert("User created successfully!");
      },
      onError: (errors) => {
        console.error("Form submission errors:", errors);
      },
    });
  };

  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary">
        Create Account Petugas
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
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="nip"
              className="block text-sm font-medium text-gray-700"
            >
              NIP
            </InputLabel>
            <TextInput
              id="nip"
              name="nip"
              type="text"
              value={data.nip}
              onChange={(e) => setData("nip", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="NIP"
            />
            {errors.nip && <p className="text-red-500 text-sm">{errors.nip}</p>}
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
              <p className="text-red-500 text-sm">{errors.no_hp}</p>
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
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 items-center flex justify-center gap-4 flex-col">
          <PrimaryButton
            type="submit"
            className="w-full max-w-xs tracking-normal flex items-center justify-center"
          >
            {processing ? "Saving..." : "Save"}
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default CreateAccountPetugas;
