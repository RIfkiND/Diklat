<?php

namespace App\Http\Controllers\function\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\Petugas\StoreBerkasRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Berkas;
use App\Models\Photo_Berkas;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadBerkasController extends Controller
{
    //

    public function upload(StoreBerkasRequest $request)
    {
        $user = Auth::guard('petugas')->user();

        $berkas = Berkas::create([
            'petugas_id' => $user->id,
            'vidio_berkas' => $this->uploadFile($request->file('vidio_berkas'), "Petugas/Berkas/{$user->id}/Videos"),
            'signature_companion1' => $request->signature_companion1,
            'signature_companion2' => $request->signature_companion2,
        ]);

        if ($request->hasFile('url')) {
            foreach ($request->file('url') as $photoUrl) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $photoUrl->getClientOriginalExtension();
                $filePath = $photoUrl->storeAs("Petugas/Berkas/{$user->id}/Images", $uniqueName, 'public');
                
                Photo_Berkas::create([
                    'url' => Storage::url($filePath), 
                    'berkas_id' => $berkas->id,
                ]);
            }
        }

        return redirect()->route('UploadBerkas')->with('success', 'You have added a new Product');
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
