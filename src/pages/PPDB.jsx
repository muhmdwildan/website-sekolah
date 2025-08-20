import React, { useState, useEffect } from "react"; // <-- Tambahkan useEffect

function PPDB() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas setiap kali page dibuka
  }, []);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    kelas: "",
    akta: null,
    raport: null,
    ijazah: null,
    pasFoto: null,
    dokumenLain: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Formulir PPDB</h1>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center shadow-md">
          Terima kasih, formulir Anda telah dikirim!
        </div>
      ) : (
        <form
          className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Pribadi</h2>
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telepon"
            placeholder="No. Telepon"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <select
            name="kelas"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          >
            <option value="">Pilih Kelas</option>
            <option value="10 IPA 1">IPA</option>
            <option value="10 IPA 2">IPS</option>
            <option value="10 IPS 1">Bahasa Inggris</option>
          </select>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Dokumen</h2>
          <label className="block">
            Akta Lahir:
            <input
              type="file"
              name="akta"
              accept=".pdf,.jpg,.png"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            Raport Terakhir:
            <input
              type="file"
              name="raport"
              accept=".pdf,.jpg,.png"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            Ijazah:
            <input
              type="file"
              name="ijazah"
              accept=".pdf,.jpg,.png"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            Pas Foto:
            <input
              type="file"
              name="pasFoto"
              accept=".jpg,.png"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            Dokumen Pendukung Lainnya:
            <input
              type="file"
              name="dokumenLain"
              accept=".pdf,.jpg,.png"
              className="w-full mt-1 p-2 border rounded-lg"
              onChange={handleChange}
            />
          </label>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition">
            Kirim
          </button>
        </form>
      )}
    </div>
  );
}

export default PPDB;
