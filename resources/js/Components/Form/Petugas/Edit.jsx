import React, { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryButton from "@/Components/PrimaryButton";

const EditAccountPetugas = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary ">
        Edit Account Petugas
      </h3>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
              defaultValue="1923456789"
              className=" block w-full border border-gray-300 rounded-md p-2"
              placeholder="1923456789"
            />
          </div>
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
              defaultValue="Royhan"
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Royhan"
            />
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
              defaultValue="Royhan Mc Cool"
              className="relative block w-full border border-gray-300 rounded-md p-2"
              placeholder="********"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 -translate-y-1/2 bottom-0 transform "
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? (
                <AiFillEyeInvisible className="h-5 w-5" />
              ) : (
                <AiFillEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 items-center flex justify-center gap-4 flex-col">
          <PrimaryButton className="w-full max-w-xs tracking-normal flex items-center justify-center">
            Save
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default EditAccountPetugas;
