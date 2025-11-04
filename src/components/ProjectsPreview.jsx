import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Sistem Informasi Akademik Mini',
    desc: 'Aplikasi web untuk mengelola data mahasiswa, mata kuliah, dan nilai menggunakan stack MERN.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Portfolio 3D Interaktif',
    desc: 'Website portofolio dengan integrasi Spline untuk pengalaman 3D yang interaktif dan modern.',
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['React', 'Spline', 'Tailwind'],
  },
  {
    title: 'API Analitik Sederhana',
    desc: 'REST API untuk pengumpulan event dan analitik dasar, dilengkapi dashboard sederhana.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
  },
];

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Proyek Pilihan</h2>
            <p className="text-slate-600 mt-2">Kumpulan karya yang merepresentasikan minat dan keahlian saya.</p>
          </div>
          <a href="#" className="text-blue-700 hover:underline hidden sm:inline-block">Lihat Semua</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-2 text-blue-700 hover:underline">
                    <LinkIcon size={16} /> Demo
                  </a>
                  <a href={p.github} className="inline-flex items-center gap-2 text-slate-700 hover:underline">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
