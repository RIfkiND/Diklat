import React from "react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";

const ReadAccount = ({ user }) => {
  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary ">
        Read Account
      </h3>
      <form action="#">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextInput
              id="name"
              name="name"
              type="text"
              defaultValue={user?.name || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Name"
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="tamatan">tamatan</InputLabel>
            <TextInput
              id="tamatan"
              name="tamatan"
              type="text"
              defaultValue={user?.tamatan || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Rekayasa"
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="no_hp">No HP</InputLabel>
            <TextInput
              id="no_hp"
              name="no_hp"
              type="number"
              defaultValue={user?.no_hp || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="No HP"
              readOnly
            />
          </div>
          {/* <div className="flex flex-col gap-2 relative">
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextInput
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              defaultValue={user?.password || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Password"
              readOnly
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
          </div> */}
        </div>
      </form>
    </>
  );
};

export default ReadAccount;
