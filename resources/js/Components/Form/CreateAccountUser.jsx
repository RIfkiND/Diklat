import React, { useState } from "react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryButton from "../PrimaryButton";

const CreateAccountUser = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary ">
        Create Account User
      </h3>
      <form action="#">
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
              className=" block w-full border border-gray-300 rounded-md p-2"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </InputLabel>
            <TextInput
              id="email"
              name="email"
              type="email"
              className=" block w-full border border-gray-300 rounded-md p-2"
              placeholder="Email@example.com"
            />
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
              className=" block w-full border border-gray-300 rounded-md p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="08211"
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

export default CreateAccountUser;
