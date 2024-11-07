import Header from "@/Components/Ui/Header";
import MobileSidebar from "@/Components/Sidebar/MobileSidebar";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="">
        <div className="hidden lg:block md:w-[250px] relative h-full">
          <Sidebar />
        </div>
        <div className="lg:hidden absolute h-full z-[99]">
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
