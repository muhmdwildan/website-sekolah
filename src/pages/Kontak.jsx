import React from "react";

function Kontak() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Kontak & Lokasi</h1>

      <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Alamat Sekolah</h2>
        <p>Jl. Pendidikan No. 10, Kota Contoh, Indonesia</p>

        <h2 className="text-2xl font-semibold">Nomor Telepon & Email</h2>
        <p>Telepon: (021) 1234567</p>
        <p>Email: info@sekolahku.sch.id</p>

        <h2 className="text-2xl font-semibold">Media Sosial</h2>
        <p>Instagram: @sekolahku</p>
        <p>Facebook: SekolahKu Official</p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Peta Lokasi</h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789!2d106.827153!3d-6.175110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c123456789%3A0x123456789abcdef!2sSekolahKu!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Kontak;
