import React from "react";

function ProfilSekolah() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div className="relative bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Profil Sekolah</h1>
        <p className="mt-2 text-lg">Mencetak Generasi Unggul, Berakhlak Mulia, dan Berprestasi</p>
      </div>

      {/* Tentang Sekolah */}
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Tentang Sekolah</h2>
        <p className="text-gray-700 leading-relaxed">
          Sekolah ini berdiri sejak tahun 1990 dan terus berkembang menjadi salah satu 
          lembaga pendidikan unggulan di daerah. Kami berkomitmen memberikan layanan 
          pendidikan yang berkualitas dengan dukungan tenaga pendidik profesional 
          serta fasilitas yang memadai.
        </p>
      </div>

      {/* Visi Misi */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Visi</h3>
            <p className="text-gray-700">
              Menjadi sekolah unggul yang mencetak generasi berkarakter, 
              berprestasi, dan siap menghadapi tantangan global.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-green-700">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Menyelenggarakan pendidikan berbasis nilai-nilai karakter.</li>
              <li>Meningkatkan kualitas guru melalui pelatihan berkelanjutan.</li>
              <li>Menyediakan fasilitas pembelajaran yang modern dan lengkap.</li>
              <li>Menumbuhkan budaya literasi dan riset.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Struktur Organisasi */}
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Struktur Organisasi</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { nama: "Drs. Ahmad Fikri", jabatan: "Kepala Sekolah", foto: "/guru/ahmad.jpg" },
            { nama: "Siti Aminah, S.Pd", jabatan: "Wakil Kepala", foto: "/guru/siti.jpg" },
            { nama: "Budi Santoso, M.Pd", jabatan: "Kepala Kurikulum", foto: "/guru/budi.jpg" },
          ].map((org, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
              <img
                src={org.foto}
                alt={org.nama}
                className="w-28 h-28 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-3 font-semibold">{org.nama}</h3>
              <p className="text-gray-600 text-sm">{org.jabatan}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fasilitas Sekolah */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Fasilitas Sekolah</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { nama: "Perpustakaan", foto: "/fasilitas/perpustakaan.jpg" },
              { nama: "Laboratorium Komputer", foto: "/fasilitas/labkom.jpg" },
              { nama: "Lapangan Olahraga", foto: "/fasilitas/lapangan.jpg" },
              { nama: "Ruang Multimedia", foto: "/fasilitas/labkom.jpg" },
              { nama: "Musholla", foto: "/fasilitas/masjid.jpg" },
              { nama: "Aula Serbaguna", foto: "/fasilitas/aula.jpg" },
            ].map((fasilitas, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={fasilitas.foto}
                  alt={fasilitas.nama}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-center">{fasilitas.nama}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilSekolah;
