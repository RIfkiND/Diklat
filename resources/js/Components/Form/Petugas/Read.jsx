import React from "react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";

const ReadAccountPetugas = ({ petugas }) => {
  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary ">
        Read Account Petugas
      </h3>
      <form action="#">
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
              defaultValue={petugas?.NIP || ""}
              className=" block w-full border border-gray-300 rounded-md p-2"
              placeholder="1923456789"
              readOnly
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
              defaultValue={petugas?.name || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Royhan"
              readOnly
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
              id="no_hp"
              name="no_hp"
              type="text"
              defaultValue={petugas?.no_hp || ""}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Royhan"
              readOnly
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ReadAccountPetugas;
