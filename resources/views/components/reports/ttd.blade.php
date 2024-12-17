<td colspan="3">
    <section class="grid grid-cols-2 gap-y-5">
        @foreach($biodataPeserta as $biodata)
            <div class="flex justify-center">
                <div class="space-y-2">
                    <p class="h-4"></p>
                    <!-- Petugas 1 -->
                    @if($biodata->petugas1)
                        <p>Petugas 1,</p>
                        <img src="{{ $biodata->petugas1->profile_picture ?? asset('path/to/default-image.jpg') }}" alt="Petugas 1" class="w-32 h-32">
                        <div>
                            <h4>{{ $biodata->petugas1->name }}</h4>
                            <p>{{ $biodata->petugas1->NIP }}</p>
                        </div>
                    @else
                        <p>No Petugas 1 Assigned</p>
                    @endif
                </div>
            </div>

            <div class="flex justify-center">
                <div class="space-y-2">
                    <p class="h-4">{{ \Carbon\Carbon::now()->format('d F Y') }}</p>
                    <!-- Petugas 2 -->
                    @if($biodata->petugas2)
                        <p>Petugas 2,</p>
                        <img src="{{ $biodata->petugas2->profile_picture ?? asset('path/to/default-image.jpg') }}" alt="Petugas 2" class="w-32 h-32">
                        <div>
                            <h4>{{ $biodata->petugas2->name }}</h4>
                            <p>{{ $biodata->petugas2->NIP }}</p>
                        </div>
                    @else
                        <p>No Petugas 2 Assigned</p>
                    @endif
                </div>
            </div>
        @endforeach

        <!-- Signatures section -->
        <div class="col-span-2 text-center">
            <p>Mengetahui</p>
        </div>

        <div class="flex justify-center">
            <div class="gap-2 flex flex-col">
                <p>Kepala SMKN 3 Yogyakarta</p>
                <img src="" alt="Kepala SMKN Signature" class="w-32 h-32 mt-6">
                <div class="">
                    <h4>Dwi Agustina, M.Pd</h4>
                    <p>NIP 196508161989102001</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="space-y-2">
                <p class="max-w-[200px]">Kepala SMKS Taman Siswa Jetis Yogyakarta</p>
                <img src="{{ asset('path/to/kepala-taman-siswa-signature.jpg') }}" alt="Kepala Taman Siswa Signature" class="w-32 h-32">
                <div class="">
                    <h4>Dwi Agustina, M.Pd</h4>
                    <p>NIP 196508161989102001</p>
                </div>
            </div>
        </div>
    </section>
</td>
