<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('edp_others', function (Blueprint $table) {
            $table->id();
            $table->string('nama_responden');
              $table->string('nama_institusi_sekolah');
              $table->string('kabupaten_kota');
              $table->string('no_whatsapp')->unique();
              $table->string('nama_tamatan_pelatihan');
              $table->string('nama_jenis_pelatihan');
              $table->string('jabatan_responden');
              $table->dateTime('tanggal_dimulai');
              $table->dateTime('tanggal_selesai');

              $table->string('adanya_dokumen')->default('ya');
              $table->string('kesesuaian_program')->default('ya');
              $table->string('adanya_dukungan')->default('ya');
              $table->string('adanya_jadwal_pelaksanaan')->default('ya');
              $table->string('dukungan_pihak_terkait')->default('ya');
              $table->string('ketersidaan_perangkat_fasilitas')->default('ya');

              $table->string('adanya_silabus')->default('ya');
              $table->string('adanya_bahan_ajar')->default('ya');
              $table->string('adanya_lembar_evaluasi')->default('ya');

              $table->string('kesesuaian_metode_materi')->default('ya');
              $table->string('meningkatkan_interaksi')->default('ya');
              $table->string('melakukan_kegiatan_pra_pembelajaran')->default('ya');
              $table->string('melaksanakan_pemebelajaran')->default('ya');

              $table->string('menggunakan_keterampilan')->default('ya');
              $table->string('melaksanakan_refleksi')->default('ya');
              $table->string('melakukan_tindak_lanjut')->default('ya');

              $table->string('kesesuaian_pelaksanaan_evaluasi')->default('ya');
              $table->string('adanya_analisis_belajar')->default('ya');
              $table->string('adanya_nilai_hasil_belajar')->default('ya');
              $table->string('adanyan_program_tindak_lanjut')->default('ya');

              $table->string('adanya_program_pengembangan_diri')->default('ya');
              $table->string('adanya_proposal_pembuatan_karya_tulis')->default('ya');
              $table->string('adanya_dukungan_pihak_terkait')->default('ya');

              $table->string('adanya_laporan_pelaksanaan_program')->default('ya');
              $table->string('adanya_karya_tulis_ilmiah')->default('ya');
              $table->string('adanya_karya_inovatif')->default('ya');

            $table->text('saran_masukan');
              $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('edp_others');
    }
};
