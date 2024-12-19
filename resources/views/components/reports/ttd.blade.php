<td colspan="3">
    <section class="grid grid-cols-2 gap-y-5">
        @foreach($biodataPeserta as $biodata)
            <div class="flex justify-center">
                <div class="space-y-2">
                    <p class="h-4"></p>
                    <!-- Petugas 1 -->
                    @if($biodata->petugas1)
                        <p>Petugas 1,</p>
                        <img src="{{ $berkas->firstWhere('petugas_id', $biodata->petugas1->id)->signature_companion_1 ?? asset('path/to/default-image.jpg') }}" 
                             alt="Petugas 1" class="w-32 h-32">
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
                        <img src="{{ $berkas->firstWhere('petugas_id', $biodata->petugas2->id)->signature_companion_2 ?? asset('path/to/default-image.jpg') }}" 
                             alt="Petugas 2" class="w-32 h-32">
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
    </section>
</td>
