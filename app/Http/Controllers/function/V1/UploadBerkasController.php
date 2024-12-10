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
    
        // Upload video
        $videoPath = $this->uploadFile($request->file('videoFile'), "Petugas/Berkas/{$user->id}/Videos");
    
        // Upload signature images
        $signature1Path = $this->uploadSignature($request->file('signatures.companion1'), $user->id, 'companion1');
        $signature2Path = $this->uploadSignature($request->file('signatures.companion2'), $user->id, 'companion2');
        $berkas = Berkas::create([
            'petugas_id' => $user->id,
            'vidio_berkas' => $videoPath,
            'signature_companion1' => $signature1Path,
            'signature_companion2' => $signature2Path,
        ]);
    
        // Handle image file uploads
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
        return redirect()->route('UploadBerkas')->with('success', 'You have added a new Product');
    }
    
    // Helper method to upload signature images
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
