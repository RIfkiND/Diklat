<td colspan="3"> 
    <section class="grid grid-cols-2 gap-y-5">
        @foreach($berkas as $item)
            <div class="flex justify-center">
                <div class="space-y-2">
                    <p class="h-4"></p>
                    <!-- Petugas 1 -->
                    @if ($item->petugas_1)
                        @php
                            $petugas1 = App\Models\Petugas::where('name', $item->petugas_1)->first(); // Fetch Petugas 1 by name
                        @endphp
                        <p>Petugas 1,</p>
                        <img src="{{ $item->signature_companion1 ? asset($item->signature_companion1) : asset('path/to/default-image.jpg') }}" 
                             alt="Petugas 1" class="w-32 h-32">
                        <div>
                            <h4>{{ $petugas1->name ?? 'No Name' }}</h4>
                            <p>{{ $petugas1->NIP ?? 'No NIP' }}</p>
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
                    @if ($item->petugas_2)
                        @php
                            $petugas2 = App\Models\Petugas::where('name', $item->petugas_2)->first(); // Fetch Petugas 2 by name
                        @endphp
                        <p>Petugas 2,</p>
                        <img src="{{ $item->signature_companion2 ? asset($item->signature_companion2) : asset('path/to/default-image.jpg') }}" 
                             alt="Petugas 2" class="w-32 h-32">
                        <div>
                            <h4>{{ $petugas2->name ?? 'No Name' }}</h4>
                            <p>{{ $petugas2->NIP ?? 'No NIP' }}</p>
                        </div>
                    @else
                        <p>No Petugas 2 Assigned</p>
                    @endif
                </div>
            </div>
        @endforeach
    </section>
</td>
