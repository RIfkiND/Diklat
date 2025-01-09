import FormUpload from "@/Components/Form/UploadBerkas/Form";
import HeaderHome from "@/Components/Ui/HeaderHome";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function UploadBerkas({petugas ,edpsiswa ,edpother}) {
    return (
        <AuthenticatedLayout>
            <Head title="Data Peserta" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <HeaderHome
                    title={"Upload Berkas Pendamping"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi praesentium ea."
                    }
                    content={"/images/ilustrasi/Monitor-bro.svg"}
                />
            </div>  
            <DashboardLayout>
                <FormUpload petugas={petugas} edpsiswa={edpsiswa} edpother={edpother}/>
            </DashboardLayout>
        </AuthenticatedLayout>)
}