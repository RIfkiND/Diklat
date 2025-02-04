@props(['EdpOther', 'biodataPeserta'])


<td colspan="3">
  <ol class="list-decimal list-inside">
    <li>
      Pendampingan RTL
      <p class="mx-4 mt-2">Pendampingan dilaksanakan di SMKN 3 Yogyakarta pada tanggal 28 Agustus 2024 dan di
        SMKS
        Taman Siswa
        Jetis
        Yogyakarta pada tanggal 29 Agustus 2024. Jumlah peserta pendampingan (guru tamatan pelatihan)
        berjumlah 6 orang,
        yaitu:</p>

      <table class="w-full h-full mt-5">
        <tbody>
          <tr>
            <td class="font-semibold">No</td>
            <td class="font-semibold">Nama</td>
            <td class="font-semibold">Nama SMK</td>
            <td class="font-semibold">Pelatihan yang Diikuti</td>
            <td class="font-semibold">RTL</td>
          </tr>
          @foreach ($biodataPeserta as $index => $BiodataPeserta)
          <tr>
              <td>{{ $index + 1 }}</td>
              <td>{{ $BiodataPeserta->peserta ? $BiodataPeserta->peserta->name : 'No Peserta Assigned' }}</td>
              <td>{{ $BiodataPeserta->sekolah }}</td>
              <td>{{ $BiodataPeserta->pelatihan ? $BiodataPeserta->pelatihan->name : 'No Pelatihan Assigned' }}</td>
              <td>
                  @if($BiodataPeserta->rtls)
                      Ada
                  @else
                      Tidak Ada
                  @endif
              </td>
          </tr>
      @endforeach
        </tbody>
      </table>

      <p class="mx-4 mt-2">
        Hasil pendampingan terlampir. <br>
        Dari hasil wawancara dan pengamatan bukti fisik atau data pendukung pelaksanaan RTL oleh masing-masing
        peserta maka
        pelaksanaan RTL yang dilaksanakan adalah sebagai berikut
      </p>
    </li>

    <li class="mt-4">
      Evaluasi Dampak Pelatihan

      <ol class="list-[lower-alpha] list-inside ml-4">
        <li>
          Jumlah Responden yang mengisi instrumen SMKN 3 Yogyakarta
          <ol class="list-[lower-alpha] list-inside ml-5">
            <li>) Kepala Sekolah</li>
            <li>) Guru Tamatan Pelatihan sebanyak 5 orang</li>
            <li>) Guru Rekan Sejawat sebanyak 15 orang (minimal 3 orang)</li>
            <li>) Siswa sebanyak 15 orang (minimal 5 orang)</li>
          </ol>
        </li>

        <li class="mt-4">
          Pengolahan Data
          <ol class="mx-4 mt-5 list-decimal list-inside">
            <li>Hasil pengolahan data Evaluasi Dampak Pelatihan responden Kepala Sekolah adalah

              <table class="w-full h-full">
                <thead>
                    <tr>
                        <th class="font-semibold">No</th>
                        <th class="font-semibold">NAMA TAMATAN DIKLAT</th>
                        <th class="font-semibold">PENGIMBASAN</th>
                        <th class="font-semibold">PEMBELAJARAN</th>
                        <th class="font-semibold">PENGEMBANGAN</th>
                        <th class="font-semibold">RATA-RATA</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $filteredEdpOthers = $EdpOther->filter(function ($item) {
                            return $item->jabatan_responden === 'Pimpinan/Kepala Sekolah';
                        });
                    @endphp
            
                    @if ($filteredEdpOthers->isNotEmpty())
                        @php $counter = 1; @endphp
                        @foreach ($filteredEdpOthers as $EdpOthers)
                            <tr>
                                <td>{{ $counter }}</td>
                                <td>{{ $EdpOthers->nama_tamatan_pelatihan }}</td>
                                <td>{{ $EdpOthers->pengimbasan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pembelajaran ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pengembangan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->rata_rata ?? 'N/A' }}</td>
                            </tr>
                            @php $counter++; @endphp
                        @endforeach
                    @else
                        <!-- Display three blank rows if no matching data -->
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    @endif
                </tbody>
            </table>
            
            
            
              <p>
                Keterangan :
              </p>
              <ol class="mx-4 list-disc list-inside">
                <li>Kompenen Pengimbasan: Program Pengimbasan, Pelaksanaan Pengimbasan</li>
                <li>Komponen Pembelajaran: Penyusunan Rencana Pembelajaran sebagai Impementasi Hasil Diklat,
                  Pelaksanaan Pembelajaran,
                  Pelaksanaan Evaluasi Pembelajaran</li>
                <li>Komponen Pengembangan: Program Pengembangan, Pelaksanaan Pengembangan</li>
              </ol>

            </li>

            <li class="mt-5">Hasil pengolahan data Evaluasi Dampak Pelatihan responden tamatan adalah:
              <table class="w-full h-full">
                <thead>
                    <tr>
                        <th class="font-semibold">No</th>
                        <th class="font-semibold">NAMA TAMATAN DIKLAT</th>
                        <th class="font-semibold">PENGIMBASAN</th>
                        <th class="font-semibold">PEMBELAJARAN</th>
                        <th class="font-semibold">PENGEMBANGAN</th>
                        <th class="font-semibold">RATA-RATA</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $filteredEdpOthers = $EdpOther->filter(function ($item) {
                            return $item->jabatan_responden === 'Guru Tamatan Pelatihan';
                        });
                    @endphp
            
                    @if ($filteredEdpOthers->isNotEmpty())
                        @php $counter = 1; @endphp
                        @foreach ($filteredEdpOthers as $EdpOthers)
                            <tr>
                                <td>{{ $counter }}</td>
                                <td>{{ $EdpOthers->nama_tamatan_pelatihan }}</td>
                                <td>{{ $EdpOthers->pengimbasan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pembelajaran ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pengembangan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->rata_rata ?? 'N/A' }}</td>
                            </tr>
                            @php $counter++; @endphp
                        @endforeach
                    @else
                        <!-- Display three blank rows if no matching data -->
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    @endif
                </tbody>
            </table>
            
              <p>
                Keterangan :
              </p>
              <ol class="mx-4 list-disc list-inside">
                <li>Kompenen Pengimbasan: Program Pengimbasan, Pelaksanaan Pengimbasan</li>
                <li>Komponen Pembelajaran: Penyusunan Rencana Pembelajaran sebagai Impementasi Hasil Diklat,
                  Pelaksanaan Pembelajaran,
                  Pelaksanaan Evaluasi Pembelajaran</li>
                <li>Komponen Pengembangan: Program Pengembangan, Pelaksanaan Pengembangan</li>
              </ol>

            </li>

            <li class="mt-5">Hasil pengolahan data Evaluasi Dampak Pelatihan responden Kolega adalah:
              <table class="w-full h-full">
                <thead>
                    <tr>
                        <th class="font-semibold">No</th>
                        <th class="font-semibold">NAMA TAMATAN DIKLAT</th>
                        <th class="font-semibold">PENGIMBASAN</th>
                        <th class="font-semibold">PEMBELAJARAN</th>
                        <th class="font-semibold">PENGEMBANGAN</th>
                        <th class="font-semibold">RATA-RATA</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $filteredEdpOthers = $EdpOther->filter(function ($item) {
                            return $item->jabatan_responden === 'Guru Kolega / Teman Sejawa';
                        });
                    @endphp
            
                    @if ($filteredEdpOthers->isNotEmpty())
                        @php $counter = 1; @endphp
                        @foreach ($filteredEdpOthers as $EdpOthers)
                            <tr>
                                <td>{{ $counter }}</td>
                                <td>{{ $EdpOthers->nama_tamatan_pelatihan }}</td>
                                <td>{{ $EdpOthers->pengimbasan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pembelajaran ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->pengembangan ?? 'N/A' }}</td>
                                <td>{{ $EdpOthers->rata_rata ?? 'N/A' }}</td>
                            </tr>
                            @php $counter++; @endphp
                        @endforeach
                    @else
                        <!-- Display three blank rows if no matching data -->
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    @endif
                </tbody>
            </table>
            

              <p>
                Keterangan :
              </p>
              <ol class="mx-4 list-disc list-inside">
                <li>Kompenen Pengimbasan: Program Pengimbasan, Pelaksanaan Pengimbasan</li>
                <li>Komponen Pembelajaran: Penyusunan Rencana Pembelajaran sebagai Impementasi Hasil Diklat,
                  Pelaksanaan Pembelajaran,
                  Pelaksanaan Evaluasi Pembelajaran</li>
                <li>Komponen Pengembangan: Program Pengembangan, Pelaksanaan Pengembangan</li>
                <li>Nilai Komponen diambil dari rata-rata 3 orang Kolega</li>
              </ol>

            </li>

            <li class="mt-5">Hasil pengolahan data Evaluasi Dampak Pelatihan responden Siswa adalah:
              <table class="w-full h-full">
                <tbody>
                  <tr>
                    <td class="font-semibold">No</td>
                    <td class="font-semibold">NAMA TAMATAN DIKLAT</td>
                    <td class="font-semibold">PENGIMBASAN</td>
                    <td class="font-semibold">PEMBELAJARAN</td>
                    <td class="font-semibold">PENGEMBANGAN</td>
                    <td class="font-semibold">RATA-RATA</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <p>
                Keterangan :
              </p>
              <ol class="mx-4 list-disc list-inside">
                <li>Kompenen Pengimbasan: Program Pengimbasan, Pelaksanaan Pengimbasan</li>
                <li>Komponen Pembelajaran: Penyusunan Rencana Pembelajaran sebagai Impementasi Hasil Diklat,
                  Pelaksanaan Pembelajaran,
                  Pelaksanaan Evaluasi Pembelajaran</li>
                <li>Komponen Pengembangan: Program Pengembangan, Pelaksanaan Pengembangan</li>
                <li>Nilai Komponen diambil dari rata-rata 5 orang Siswa</li>
              </ol>

            </li>
          </ol>
        </li>


        <li class="mt-4">
          Analisis Hasil Pengisian Instrumen

          <p class="mx-4">
            Berdasarkan hasil pengolahan data Evaluasi Dampak Pelatihan responden kepala seklah, tamatan,
            kolega, dan Siswa
            diperoleh simpulan Nilai Dampak Pelatihan sebagai berikut
          </p>

          <table class="w-full h-full mt-4">
            <tbody>
              <tr>
                <td class="font-semibold">No</td>
                <td class="font-semibold">NAMA TAMATAN DIKLAT</td>
                <td class="font-semibold">KEPALA SEKOLAH</td>
                <td class="font-semibold">TAMATAN</td>
                <td class="font-semibold">KOLEGA</td>
                <td class="font-semibold">SISWA</td>
                <td class="font-semibold">DAMPAK PELATIHAN</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </li>
      </ol>
    </li>
  </ol>
</td>