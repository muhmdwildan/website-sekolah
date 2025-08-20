// App.jsx yang sudah benar
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProfilSekolah from "./pages/ProfilSekolah";
import Akademik from "./pages/Akademik";
import Berita from "./pages/Berita";
import PPDB from "./pages/PPDB";
import GuruStaf from "./pages/GuruStaf";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<ProfilSekolah />} />
        <Route path="/akademik" element={<Akademik />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/guru-staf" element={<GuruStaf />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
