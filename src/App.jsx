import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsPreview from './components/ProjectsPreview';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold">Tentang Saya</h2>
              <p className="mt-4 text-slate-700">
                Saya Galih Mahda Praditya Gunardi, seorang mahasiswa Informatika yang memiliki ketertarikan pada pengembangan aplikasi web, pemodelan data,
                dan integrasi antarmuka interaktif. Saya menikmati membangun produk digital yang bermanfaat, mudah digunakan, dan berdampak nyata.
              </p>
              <p className="mt-3 text-slate-700">
                Tujuan karier saya adalah menjadi Software Engineer yang mampu merancang, membangun, dan memelihara sistem yang andal serta scalable.
                Saya terbiasa bekerja dalam tim, belajar teknologi baru dengan cepat, dan menjaga kualitas kode.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                  alt="Galih sedang belajar dan ngoding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        <ProjectsPreview />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold">Kontak</h2>
                <p className="mt-3 text-slate-700">
                  Tertarik bekerja sama atau memiliki pertanyaan? Silakan kirim pesan melalui formulir di samping. Saya akan membalas secepatnya.
                </p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  <li>Email: galih@example.com</li>
                  <li>Domisili: Indonesia</li>
                </ul>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Terima kasih! Fitur kirim pesan akan terhubung ke backend.');
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 mb-1">Nama</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-slate-600 mb-1">Pesan</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tulis pesanmu di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full sm:w-auto px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow"
                >
                  Kirim Pesan
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
