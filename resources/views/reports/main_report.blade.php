<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Report PDF</title>
    @vite('resources/css/app.css')

    <style>
        tr td {
            padding: 18px;
            border: solid 1px rgba(35, 43, 54, 0.404);
            text-transform: capitalize;
            word-spacing: 4px;
            line-height: 1.4
        }

        .header-text {
            font-weight: 600;
        }
    </style>
</head>


<body class="p-20">
    <section class="w-full h-full">
        <table class="w-full h-full">
            <thead class="">
                <tr class="">
                    <td class="text-center w-[100px] h-[100px] p-2">
                        <img src="{{ asset('images/ilustrasi/logo_bmti.gif') }}" alt="Logo BMPTI">
                    </td>
                    <td class="p-2 text-center" colspan="2">
                        <p>KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN RISTEK <br />
                            <span class="font-semibold"> BALAI BESAR PENGEMBANGAN PENJAMINAN MUTU PENDIDIKAN VOKASI
                                BIDANG MESIN DAN TEKNIK INDUSTRI </span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="p-2 font-semibold text-center">
                        <p>
                            LAPORAN TUGAS LUAR <br>
                            PENDAMPINGAN PELAKSANAAN RENCANA TINDAK LANJUT <br>
                            DAN EVALUASI DAMPAK PELATIHAN TAHUN 2024
                        </p>
                    </td>
                </tr>
            </thead>

        </table>


        <table class="mt-20">
            <tbody>
                <tr>
                    <td>Nama Lengkap</td>
                    <td></td>
                    <td>
                        <ol class="list-decimal list-inside">
                            @foreach($berkas as $berkass)
                                <!-- Check if petugas1 is assigned -->
                                    <li>{{ $berkass->petugas_1 }}</li>
                                    <li>{{ $berkass->petugas_2 }}</li>
                            @endforeach
                        </ol>
                    </td>
                                  
                <tr>
                    <td>Nama Program</td>
                    <td></td>
                    <td>
                        Pendampingan Pelaksanaan Rencana Tindak Lanjut (RTL) dan Evaluasi Dampak Pelatihan Tahun 2024
                    </td>
                </tr>
                <tr>
                    <td>Dasar Pelaksanaan Tugas</td>
                    <td></td>
                    <td>
                        Surat Tugas Nomor: 4046 /D7.5/KP.10.00/2024
                    </td>
                </tr>
                <tr>
                    <td>Waktu dan Tempat Pelaksanaan</td>
                    <td></td>
                    <td>Hari Senin s.d. Rabu/ 27 s.d. 30 Agustus 2024
                        di SMKN 3 Yogyakarta dan SMKS Taman Siswa Jetis Yogyakarta Provinsi D.I Yogyakarta</td>
                </tr>
                <tr>
                    <td>Jumlah Peserta</td>
                    <td></td>
                    <td>
                        <ol class="list-decimal list-inside">
                            <li>Kepala Sekolah</li>
                            <li>Guru Tamatan Pelatihan</li>
                            <li>Guru Rekan Sejawat</li>
                            <li>5 orang siswa per guru tamatan pelatihan <br>
                                Jumlah: 45 orang</li>
                        </ol>
                </tr>
                <tr>
                    <td>Institusi Penyelenggara</td>
                    <td></td>
                    <td>BBPPMPV BMTI</td>
                </tr>
                <tr>
                    <td>Sumber Dana</td>
                    <td></td>
                    <td>BBPPMPV BMTI</td>
                </tr>

                {{--  --}}

                <tr>
                    <td colspan="3" class="header-text">
                        A. Latar Belakang Kegiatan
                    </td>
                </tr>
                <tr>
                    <x-reports.latar-belakang-kegiatan />
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        B. Tujuan Kegiatan
                    </td>
                </tr>
                <tr>
                    <x-reports.tujuan-kegiatan />
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        C. Hasil yang Diharapkan
                    </td>
                </tr>
                <tr>
                    <x-reports.hasil-yang-diharapkan />
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        D. Sasaran
                    </td>
                </tr>
                <tr>
                    <x-reports.sasaran />
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        E. Hasil Pelaksanaan Kegiatan
                    </td>
                </tr>
                <tr>
                    <x-reports.hasil-pelaksanaan-kegiatan 
                    :EdpOther="$EdpOther" 
                    :biodataPeserta="$biodataPeserta" 
                />
                
                </tr>
                <tr>
                    <td colspan="3">
                        <p class="header-text">
                            F. Temuan pada Saat Pelaksanaan Pendampingan Pelaksanaan RTL dan Evaluasi Dampak Pelatihan
                        </p>
                        <p>Tidak ada temuan yang berarti dalam Pelaksanaan pendampingan RTL dan Evaluasi Dampak Diklat.
                            Seluruh
                            kegiatan terlaksana
                            dengan baik.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        G. Kesimpulan dan Saran
                    </td>
                </tr>
                <tr>
                    <x-reports.kesimpulan-dan-saran  :berkas="$berkas"/>
                </tr>
                <tr>
                    <td colspan="3" class="header-text">
                        H. Lampiran
                    </td>
                </tr>
                <tr>
                    <x-reports.lampiran-text />
                </tr>
                <tr>
                    <x-reports.ttd  :biodataPeserta="$biodataPeserta" :berkas="$berkas"/>
                </tr>

                {{-- Lampiran --}}
                <tr>
                  <td colspan="3" class="header-text">
                    Lampiran 1. Surat Tugas
                    <x-reports.lampiran1-surat-tugas  :berkas="$berkas"/>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="header-text">
                    Lampiran 2. Daftar Hadir
                    <x-reports.lampiran-daftar-hadir  :berkas="$berkas"/>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="header-text">
                    Lampiran 3. Foto Kegiatan
                    <x-reports.lampiran-photo-kegiatan :berkas="$berkas"/>
                  </td>
                </tr>
            </tbody>
        </table>
    </section>
</body>

</html>
