import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HERO_SLIDES = [
  { id: 1, img: "/public/images/slide1.jpg", text: "Selamat Datang di Official Website, SMA Negri Fiktif" },
  { id: 2, img: "/public/images/slide2.jpg", text: "Generasi Berprestasi & Berkarakter" },
  { id: 3, img: "/public/images/slide3.jpg", text: "Belajar Nyaman & Modern" },
];

const PROGRAMS = [
  { title: "Tahfidz Qur'an", desc: "Program hafalan Qur'an untuk generasi Qur'ani", icon: "🕌" },
  { title: "IT Club", desc: "Pelatihan coding, robotik, dan desain digital", icon: "💻" },
  { title: "Sains Research", desc: "Eksperimen & penelitian ilmiah", icon: "🔬" },
  { title: "Olahraga", desc: "Futsal, basket, bulutangkis modern", icon: "⚽" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((c) => (c + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((c) => (c + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.img} alt={slide.text} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">{slide.text}</h1>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 text-black p-2 rounded-full">◀</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 text-black p-2 rounded-full">▶</button>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Tentang Sekolah</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          SMA Negri Fiktif berdiri sejak 1990 dengan visi mencetak generasi cerdas dan berkarakter. Kami memiliki fasilitas modern dan program unggulan untuk mendukung prestasi akademik dan non-akademik siswa.
        </p>
      </section>

      <section className="py-16 bg-blue-50 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Program Belajar</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {PROGRAMS.map((p, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6 text-center hover:scale-105 transition">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
\
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Daftar Sekarang & Raih Prestasi!</h2>
        <Link to="/ppdb" className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition">Daftar PPDB</Link>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Kegiatan & Workshop</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Kami rutin mengadakan workshop kreatif, lomba sains, dan kegiatan pengembangan karakter untuk mendukung siswa menjadi generasi unggul.
        </p>
      </section>

    </div>
  );
}
