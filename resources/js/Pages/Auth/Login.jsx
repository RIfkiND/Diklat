import Checkbox from "@/Components/Ui/Checkbox";
import Ilustrasion from "@/Components/Image/Ilustrasion";
import InputError from "@/Components/Ui/Input/InputError";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import TextInput from "@/Components/Ui/Input/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    no_hp: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("Auth.V1.Login.Peserta"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <section className="w-full relative">
      <div className="h-1/4 w-full bg-primary absolute z-10"></div>
      <div className="z-50 relative flex h-screen w-screen items-center overflow-hidden px-2">
        <div className="relative flex grow md:grow-0 w-[60%] flex-col space-y-5 rounded-lg border bg-white px-10 py-16 shadow-primaryshadow sm:mx-auto">
          <Head title="Login Peserta" />

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600">
              {status}
            </div>
          )}

          <div className="flex justify-between gap-12">
            <div className="xl:basis-1/2 basis-full">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">
                  Peserta Login
                </h3>
              </div>
              <form onSubmit={submit} className="">
                <div className="mb-6">
                  <InputLabel htmlFor="no_hp" value="No Handphone" />

                  <TextInput
                    id="no_hp"
                    type="number"
                    name="no_hp"
                    value={data.no_hp}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData("no_hp", e.target.value)}
                  />

                  <InputError message={errors.no_hp} className="mt-2" />
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

                <div className="mt-4 block mb-6">
                  <label className="flex items-center justify-between">
                    <div>
                      <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                      />
                      <span className="ms-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </div>

                    {canResetPassword && (
                      <Link
                        href={route("password.request")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Forgot your password?
                      </Link>
                    )}
                  </label>
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
            <div className="basis-1/2 hidden xl:block">
              <Ilustrasion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
