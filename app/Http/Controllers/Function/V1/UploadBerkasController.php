<?php

namespace App\Http\Controllers\Function\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\Petugas\StoreBerkasRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Berkas;
use App\Models\BerkasEdpOther;
use App\Models\BerkasEdpSiswa;
use App\Models\Photo_Berkas;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadBerkasController extends Controller
{
    //

    public function upload(StoreBerkasRequest $request)
    {
        $user = Auth::guard('petugas')->user();

        $videoPath = $this->uploadFile($request->file('videoFile'), "Petugas/Berkas/{$user->id}/Videos");

        $signature1Path = $this->uploadSignature($request->file('signatures.companion1'), $user->id, 'companion1');
        $signature2Path = $this->uploadSignature($request->file('signatures.companion2'), $user->id, 'companion2');

        $suratTugasPath = $this->uploadBerkas($request->file('files.Surat_Tugas'), $user->id, 'Surat_Tugas');
        $daftarHadirPath = $this->uploadBerkas($request->file('files.Daftar_Hadir'), $user->id, 'Daftar_Hadir');

        $berkas = Berkas::create([
            'petugas_id' => $user->id,
            'vidio_berkas' => $videoPath,
            'signature_companion1' => $signature1Path,
            'signature_companion2' => $signature2Path,
            'saran' => $request->input('saran'),
            'kesimpulan' => $request->input('kesimpulan'),
            'surat_tugas' => $suratTugasPath,
            'daftar_hadir' => $daftarHadirPath,
            'petugas_1' => $request->input('petugas_1'),
            'petugas_2' => $request->input('petugas_2'),

        ]);

        // $berkasEdpOther = BerkasEdpOther::create([
        //     'berkas_id' => $berkas->id, 
        //     'edp_other_id_1' => $request->input('edp_other_id_1'),
        //     'edp_other_id_2' => $request->input('edp_other_id_2'),
        //     'edp_other_id_3' => $request->input('edp_other_id_3'),
        //     'edp_other_id_4' => $request->input('edp_other_id_4'),
        //     'edp_other_id_5' => $request->input('edp_other_id_5'),
        // ]);
        // $berkasEdpSiswa = BerkasEdpSiswa::create([
        //     'berkas_id' => $berkas->id, 
        //     'edp_siswa_id_1' => $request->input('edp_siswa_id_1'),
        //     'edp_siswa_id_2' => $request->input('edp_siswa_id_2'),
        //     'edp_siswa_id_3' => $request->input('edp_siswa_id_3'),
        //     'edp_siswa_id_4' => $request->input('edp_siswa_id_4'),
        //     'edp_siswa_id_5' => $request->input('edp_siswa_id_5'),
        // ]);
        
        if ($request->hasFile('imageFiles')) {
            foreach ($request->file('imageFiles') as $photoUrl) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $photoUrl->getClientOriginalExtension();
                $filePath = $photoUrl->storeAs("Petugas/Berkas/{$user->id}/Images", $uniqueName, 'public');
                Photo_Berkas::create([
                    'url' => Storage::url($filePath),
                    'berkas_id' => $berkas->id,
                ]);
            }
        }

        // Return response
        return redirect()->route('petugas.report-pengolahan-edp')->with('success', 'You have added a new Product');
    }

    private function uploadBerkas($BerkasFile, $userId, $fieldName)
    {
        if ($BerkasFile) {
            $uniqueName = time() . '-' . Str::random(10) . '.' . $BerkasFile->getClientOriginalExtension();
            $filePath = $BerkasFile->storeAs("Petugas/Berkas/{$userId}/Berkas", $uniqueName, 'public');
            return Storage::url($filePath);
        }
        return null;
    }

    private function uploadSignature($signatureFile, $userId, $fieldName)
    {
        if ($signatureFile) {
            $uniqueName = time() . '-' . Str::random(10) . '.' . $signatureFile->getClientOriginalExtension();
            $filePath = $signatureFile->storeAs("Petugas/Berkas/{$userId}/Signature", $uniqueName, 'public');
            return Storage::url($filePath);
        }
        return null;
    }


    /**
     * Handle file upload.
     */
    private function uploadFile($file, $directory)
    {
        if (!$file) {
            return null;
        }

        $filePath = $file->store($directory, 'public');
        return Storage::url($filePath);
    }
}
