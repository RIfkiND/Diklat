import Header from "@/Components/Header";
import MobileSidebar from "@/Components/MobileSidebar";
import Sidebar from "@/Components/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="">
        <div className="hidden md:block md:w-[250px] relative h-full">
          <Sidebar />
        </div>
        <div className="md:hidden absolute h-full z-[99]">
          <MobileSidebar />
        </div>
      </div>

      <div className="w-full h-full px-5">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
