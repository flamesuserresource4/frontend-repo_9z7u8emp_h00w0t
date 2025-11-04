import React from 'react';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900 tracking-tight">
            Galih MP Gunardi
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#home" className="hover:text-blue-700 transition inline-flex items-center gap-2">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#about" className="hover:text-blue-700 transition inline-flex items-center gap-2">
              <User size={18} />
              <span>Tentang</span>
            </a>
            <a href="#projects" className="hover:text-blue-700 transition inline-flex items-center gap-2">
              <FolderGit2 size={18} />
              <span>Proyek</span>
            </a>
            <a href="#contact" className="hover:text-blue-700 transition inline-flex items-center gap-2">
              <Mail size={18} />
              <span>Kontak</span>
            </a>
          </nav>

          <a
            href="#contact"
            className="md:inline-flex hidden items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
