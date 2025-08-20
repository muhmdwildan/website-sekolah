import React from "react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-32 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Sekolah"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-6 space-y-6 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Selamat Datang di <span className="text-yellow-400">SekolahKu</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-100">
          Membangun generasi cerdas, berkarakter, dan berprestasi
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:bg-yellow-300 transition">
            Daftar PPDB
          </button>
          <button className="bg-transparent border border-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-blue-800 transition">
            Lihat Profil
          </button>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-900 rounded-full opacity-30 blur-2xl"></div>
    </section>
  );
}

export default HeroSection;
