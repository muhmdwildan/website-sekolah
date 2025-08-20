import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // pastikan ada file logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-20 px-6 relative">
        <Link to="/" className="relative flex items-center">
          <img 
            src={Logo} 
            alt="Logo Sekolah" 
            className="h-14 w-20 transform scale-150" 
          />
          <span className="text-2xl font-bold text-white ml-3">SMA Negri 1 Fiktif</span>
        </Link>

        <ul className="hidden md:flex space-x-6 font-semibold text-white">
          <li><Link to="/" className="hover:text-yellow-300 transition">Beranda</Link></li>
          <li><Link to="/profil" className="hover:text-yellow-300 transition">Profil</Link></li>
          <li><Link to="/akademik" className="hover:text-yellow-300 transition">Akademik</Link></li>
          <li><Link to="/berita" className="hover:text-yellow-300 transition">Berita</Link></li>
          <li><Link to="/ppdb" className="hover:text-yellow-300 transition">PPDB</Link></li>
          <li><Link to="/guru-staf" className="hover:text-yellow-300 transition">Guru & Staf</Link></li>
          <li><Link to="/kontak" className="hover:text-yellow-300 transition">Kontak</Link></li>
        </ul>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-2xl">☰</button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white font-semibold space-y-4 px-6 py-4">
          {["Beranda","Profil","Akademik","Berita","PPDB","Galeri","Guru & Staf","Kontak"].map((item, idx) => (
            <li key={idx}>
              <Link 
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="block hover:text-yellow-300 transition" 
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
