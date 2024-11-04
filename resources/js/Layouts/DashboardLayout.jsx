export default function DashboardLayout({ children }) {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-primaryshadow sm:rounded-lg">
          <div className="p-6 text-gray-900">{children}</div>
        </div>
      </div>
    </div>
  );
}
