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
          Schema::create('edps', function (Blueprint $table) {
              $table->id();
              $table->string('nama_responden');
              $table->string('nama_institusi_sekolah');
              $table->string('kabupaten_kota');
              $table->string('no_whatsapp');
              $table->string('email');
              $table->string('nama_tamatan_pelatihan');
              $table->string('nama_jenis_pelatihan');
              $table->dateTime('tanggal_dimulai');
              $table->dateTime('tanggal_selesai');

              $table->string('tampilan_menarik')->default('ya');
              $table->string('sabar')->default('ya');
              $table->string('pilih_kasih')->default('ya');
              $table->string('sering_membantu_siswa')->default('ya');
              $table->string('praktis_dalam_menjawab')->default('ya');
              $table->string('memberikan_motivasi')->default('ya');
              $table->string('pemberian_tugas')->default('ya');
              $table->string('menciptakan_pembelajaran')->default('ya');
              $table->string('tepat_waktu')->default('ya');
              $table->string('penyampaian_materi')->default('ya');
              $table->string('penggunaan_media')->default('ya');
              $table->string('mengaitkan_materi')->default('ya');
              $table->text('saran_dan_masukan')->nullable();
              $table->timestamps();
          });
      }

      /**
       * Reverse the migrations.
       */
      public function down(): void
      {
          Schema::dropIfExists('edps');
      }
  };
