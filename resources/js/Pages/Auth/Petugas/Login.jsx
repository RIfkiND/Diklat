import Ilustrasion from "@/Components/Ilustrasion";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    NIP: "",
    password: "",
    // remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("Auth.V1.Login.Petugas"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <section className="w-full relative">
      <div className="h-1/4 w-full bg-primary absolute z-10"></div>
      <div className="z-50 relative flex h-screen w-screen items-center overflow-hidden px-2">
        <div className="relative flex w-[60%] flex-col space-y-5 rounded-lg border bg-white px-10 py-16 shadow-primaryshadow sm:mx-auto">
          <Head title="Log in" />

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600">
              {status}
            </div>
          )}

          <div className="flex justify-between gap-12">
            <div className="basis-1/2">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">
                  {" "}
                  Petugas Login
                </h3>
              </div>
              <form onSubmit={submit} className="">
                <div className="mb-6">
                  <InputLabel htmlFor="NIP" value="NIP" />

                  <TextInput
                    id="NIP"
                    type="text"
                    name="NIP"
                    value={data.NIPl}
                    className="mt-1 block w-full"
                    autoComplete="NIP"
                    isFocused={true}
                    onChange={(e) => setData("NIP", e.target.value)}
                  />

                  <InputError message={errors.NIP} className="mt-2" />
                </div>

                <div className="mt-4 mb-6">
                  <InputLabel htmlFor="password" value="Password" />

                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData("password", e.target.value)}
                  />

                  <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex w-full justify-between">
                  <PrimaryButton
                    className="flex items-center justify-center font-semibold text-white w-full text-base"
                    disabled={processing}
                  >
                    Login
                  </PrimaryButton>
                </div>
              </form>
            </div>
            <div className="basis-1/2">
              <Ilustrasion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
