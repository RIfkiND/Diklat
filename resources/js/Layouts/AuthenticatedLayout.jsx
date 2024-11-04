import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="w-[250px] relative h-full">
        <Sidebar />
      </div>

      <div className="w-full h-full px-5">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
