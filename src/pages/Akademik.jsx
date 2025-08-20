import React, { useEffect } from "react";

function Akademik() {
  // Scroll ke atas saat komponen mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8">
      {/* Judul Page */}
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Akademik
      </h1>

      {/* Perpustakaan Digital */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 ml-16">
          Perpustakaan Digital
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-16 gap-6">
          {[
            {
              title: "Matematika SMA",
              cover: "https://covers.openlibrary.org/b/id/10523366-L.jpg",
              file: "/ebook/matematika.pdf",
            },
            {
              title: "Fisika Modern",
              cover: "https://covers.openlibrary.org/b/id/10523343-L.jpg",
              file: "/ebook/fisika.pdf",
            },
            {
              title: "Sejarah Indonesia",
              cover: "https://covers.openlibrary.org/b/id/240727-L.jpg",
              file: "/ebook/sejarah.pdf",
            },
            {
              title: "Pemrograman Dasar",
              cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
              file: "/ebook/pemrograman.pdf",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col transition"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
              <div className="mt-3 flex gap-2">
                <a
                  href={book.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                >
                  📖 Baca
                </a>
                <a
                  href={book.file}
                  download
                  className="flex-1 text-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
                >
                  ⬇️ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tambahan Fitur: Ekstrakurikuler */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 ml-16">
          Kegiatan Ekstrakurikuler
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-16">
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            ⚽ Sepak Bola
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            🎨 Seni & Lukis
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            🥋 Pencak Silat
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            🎶 Paduan Suara
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            💻 Klub IT
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition">
            📚 Karya Ilmiah Remaja
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Akademik;
