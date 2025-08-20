// GuruStaf.jsx
import React, { useState } from "react";

const guruList = [
  {
    id: 1,
    nama: "Budi Santoso",
    jabatan: "Kepala Sekolah",
    foto: "/guru/budi.jpg",
    bio: "Pak Budi telah memimpin sekolah sejak tahun 2015 dengan visi mencetak generasi unggul.",
    pendidikan: "S2 Manajemen Pendidikan - Universitas Pendidikan Indonesia",
    riwayat: "Guru Matematika (2005-2014), Kepala Sekolah (2015-sekarang)"
  },
  {
    id: 2,
    nama: "Siti Aminah",
    jabatan: "Wakil Kepala Sekolah",
    foto: "/guru/siti.jpg",
    bio: "Bu Siti berfokus pada pengembangan kurikulum dan pembinaan siswa.",
    pendidikan: "S2 Pendidikan Bahasa - Universitas Negeri Jakarta",
    riwayat: "Guru Bahasa Indonesia (2007-2016), Wakil Kepala Sekolah (2016-sekarang)"
  },
  {
    id: 3,
    nama: "Andi Wijaya",
    jabatan: "Guru Matematika",
    foto: "/guru/andi.jpg",
    bio: "Mengajar matematika lebih dari 10 tahun dengan metode kreatif.",
    pendidikan: "S1 Pendidikan Matematika - Universitas Gadjah Mada",
    riwayat: "Guru Matematika SMP (2010-2015), Guru Matematika SMA (2016-sekarang)"
  },
  {
    id: 4,
    nama: "Rina Kurnia",
    jabatan: "Guru Bahasa Indonesia",
    foto: "/guru/rina.jpg",
    bio: "Bu Rina ahli dalam sastra Indonesia dan aktif dalam kegiatan literasi sekolah.",
    pendidikan: "S1 Sastra Indonesia - Universitas Indonesia",
    riwayat: "Guru Bahasa Indonesia (2012-sekarang)"
  },
  {
    id: 5,
    nama: "Dewi Lestari",
    jabatan: "Guru IPA",
    foto: "/guru/dewi.jpg",
    bio: "Mengajar IPA dengan pendekatan eksperimen praktis.",
    pendidikan: "S1 Pendidikan IPA - Universitas Negeri Yogyakarta",
    riwayat: "Guru IPA (2013-sekarang)"
  },
  {
    id: 6,
    nama: "Agus Pratama",
    jabatan: "Guru Olahraga",
    foto: "/guru/agus.jpg",
    bio: "Mendorong siswa untuk aktif dan sehat melalui olahraga.",
    pendidikan: "S1 Pendidikan Jasmani - Universitas Negeri Surabaya",
    riwayat: "Pelatih Ekstrakurikuler (2012-2018), Guru Olahraga (2019-sekarang)"
  },
  {
    id: 7,
    nama: "Lina Marlina",
    jabatan: "Guru Seni Budaya",
    foto: "/guru/lina.jpg",
    bio: "Bu Lina aktif dalam melestarikan seni tradisional Indonesia.",
    pendidikan: "S1 Seni Rupa - Institut Seni Indonesia",
    riwayat: "Guru Seni Budaya (2011-sekarang)"
  },
  {
    id: 8,
    nama: "Hendra Gunawan",
    jabatan: "Guru Bahasa Inggris",
    foto: "/guru/hendra.jpg",
    bio: "Mengajar Bahasa Inggris dengan metode interaktif dan menyenangkan.",
    pendidikan: "S1 Sastra Inggris - Universitas Airlangga",
    riwayat: "Guru Bahasa Inggris (2010-sekarang)"
  }
];

const GuruStaf = () => {
  const [selectedGuru, setSelectedGuru] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Guru & Staf</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {guruList.map((guru) => (
            <div
              key={guru.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={guru.foto}
                alt={guru.nama}
                loading="lazy"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
              />
              <h3 className="text-xl font-semibold text-gray-800">{guru.nama}</h3>
              <p className="text-gray-600">{guru.jabatan}</p>
              <button
                onClick={() => setSelectedGuru(guru)}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              >
                Lihat Profil
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Profil Guru */}
      {selectedGuru && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedGuru(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            <img
              src={selectedGuru.foto}
              alt={selectedGuru.nama}
              loading="lazy"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
            />
            <h2 className="text-2xl font-bold text-blue-700">{selectedGuru.nama}</h2>
            <p className="text-gray-600 mb-2">{selectedGuru.jabatan}</p>
            <p className="text-gray-700 mb-4">{selectedGuru.bio}</p>

            <div className="text-left space-y-2">
              <p><span className="font-semibold">Pendidikan:</span> {selectedGuru.pendidikan}</p>
              <p><span className="font-semibold">Riwayat Mengajar:</span> {selectedGuru.riwayat}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuruStaf;
