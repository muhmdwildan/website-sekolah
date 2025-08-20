import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SMA Negri 1 Fiktif</h2>
          <p className="text-sm">
            Membentuk generasi cerdas, berkarakter, dan berprestasi melalui
            pendidikan yang berkualitas.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Beranda</a></li>
            <li><a href="/berita" className="hover:text-white">Berita</a></li>
            <li><a href="/akademik" className="hover:text-white">Akademik</a></li>
            <li><a href="/kontak" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <p className="text-sm">Jl. Pendidikan No. 123, Kota Fiktif</p>
          <p className="text-sm">Telp: (0266) 123456</p>
          <p className="text-sm">Email: info@sekolahkita.sch.id</p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-sky-500">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sekolah Kita. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
