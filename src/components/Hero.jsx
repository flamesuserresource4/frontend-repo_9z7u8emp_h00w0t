import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="min-h-[70vh] flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            Galih Mahda Praditya Gunardi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl"
          >
            Mahasiswa Informatika yang antusias dalam pengembangan perangkat lunak, web modern, dan solusi berbasis data. Siap berkontribusi di dunia teknologi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow"
            >
              Lihat Proyek
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-md border border-slate-300 bg-white text-slate-700 hover:border-slate-400 transition"
            >
              Tentang Saya
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
