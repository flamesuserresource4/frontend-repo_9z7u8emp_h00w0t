import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Galih Mahda Praditya Gunardi. All rights reserved.
          </p>
          <div className="text-sm text-slate-600">
            Dibuat dengan React, Tailwind, dan Spline.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
