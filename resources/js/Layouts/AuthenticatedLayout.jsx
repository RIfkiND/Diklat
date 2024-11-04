import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="w-[250px] relative">
        <Sidebar />
      </div>

      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
