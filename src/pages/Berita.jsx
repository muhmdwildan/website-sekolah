import React from "react";

// Data contoh
const beritaUtama = {
  id: 1,
  judul: "Sekolah Raih Akreditasi A",
  deskripsi: "Badan Akreditasi Nasional memberikan nilai A pada sekolah karena prestasi akademik dan non-akademik yang gemilang.",
  gambar: "/fasilitas/labkom.jpg",
};

const daftarBerita = [
  {
    id: 2,
    kategori: "Kegiatan",
    judul: "Pentas Seni Akhir Tahun",
    tanggal: "25 Juni 2025",
    gambar: "https://source.unsplash.com/400x300/?concert,stage",
  },
  {
    id: 3,
    kategori: "Pengumuman",
    judul: "Jadwal Ujian Nasional 2025",
    tanggal: "10 Mei 2025",
    gambar: "https://source.unsplash.com/400x300/?exam,study",
  },
  {
    id: 4,
    kategori: "Prestasi",
    judul: "Medali Emas Olimpiade Matematika",
    tanggal: "12 Maret 2025",
    gambar: "https://source.unsplash.com/400x300/?math,competition",
  },
  {
    id: 5,
    kategori: "Kegiatan",
    judul: "Kerja Bakti Bersama Warga",
    tanggal: "3 Februari 2025",
    gambar: "https://source.unsplash.com/400x300/?community,clean",
  },
  {
    id: 6,
    kategori: "Prestasi",
    judul: "Juara 1 Lomba Pidato Bahasa Inggris",
    tanggal: "18 April 2025",
    gambar: "https://source.unsplash.com/400x300/?english,speech",
  },
  {
    id: 7,
    kategori: "Pengumuman",
    judul: "Libur Idul Fitri 1446 H",
    tanggal: "28 Maret 2025",
    gambar: "https://source.unsplash.com/400x300/?mosque,ramadan",
  },
];

const populer = [
  "Guru Favorit Raih Penghargaan Nasional",
  "Alumni Sukses di Dunia Startup",
  "Sekolah Adakan Workshop Digital",
];

function Berita() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      {/* Slider Berita Utama */}
      <div className="mb-10">
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
          <img
            src={beritaUtama.gambar}
            alt={beritaUtama.judul}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">{beritaUtama.judul}</h2>
            <p className="mt-2">{beritaUtama.deskripsi}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kolom berita utama */}
        <div className="md:col-span-2 space-y-6">
          {/* List Semua Berita */}
          <div className="grid sm:grid-cols-2 gap-6">
            {daftarBerita.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={b.gambar}
                  alt={b.judul}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <span className="text-xs text-blue-600 font-semibold">
                    {b.kategori}
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">{b.tanggal}</span>
                  <h3 className="text-lg font-bold mt-1">{b.judul}</h3>
                  <button className="mt-3 text-blue-600 font-semibold hover:underline">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pengumuman Singkat */}
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">📢 Pengumuman</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Pendaftaran kelas tambahan dibuka hingga 15 Agustus</li>
              <li>Pembayaran SPP bulan depan mulai tanggal 1</li>
            </ul>
          </div>

          {/* Berita Populer */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🔥 Berita Populer</h3>
            <ul className="space-y-2">
              {populer.map((p, i) => (
                <li key={i} className="border-b pb-2 text-gray-700">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita;
