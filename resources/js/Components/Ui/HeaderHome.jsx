import MonitorIlustration from "@/Components/MonitorIlustration";

export default function HeaderHome({ title, description }) {
  return (
    <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px]">
      <div className="">
        <p className="text-sm lg:text-2xl font-bold">{title}</p>
        <p className="text-xs lg:text-sm text-slate-200">{description}</p>
      </div>
      {/* Pantau Perkembangan, Wujudkan Keberhasilan! */}

      <div className="relative w-[200px] overflow-hidden ">
        <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute bottom-0 md:bottom-[-40px] right-0 md:right-5">
          <MonitorIlustration />
        </div>
      </div>
    </div>
  );
}
