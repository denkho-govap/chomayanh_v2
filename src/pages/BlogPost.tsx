import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPost() {
  const { id } = useParams();

  // Mock post content
  return (
    <div className="bg-white text-black font-sans antialiased min-h-screen">
      <Header />

      <main>
        {/* Full-screen Hero Image */}
        <section className="relative h-screen w-full">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_hP8v_E9p0q1r2s3t4u5v6w7x8y9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r" 
            alt="Fernweh" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-16 left-0 w-full px-6 md:px-12 lg:px-16 text-white text-center md:text-left">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-90">Travel • Q-Cameras</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 max-w-4xl leading-tight">
                Fernweh: A Sense of Longing for a Far-Off Place
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm opacity-80">
                <span>By Julia Nimke</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span>May 15, 2024</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-20 text-lg text-gray-800 leading-relaxed space-y-10">
          <p className="text-2xl md:text-3xl font-light text-gray-600 leading-snug">
            "Photography is an austere and blazing poetry of the real." – Ansel Adams. Taking my camera across the rugged coastline taught me to look beyond the immediate frame, and to capture the silence within the motion.
          </p>
          
          <p>
            When we travel, we often seek an escape. Yet, true discovery happens when we confront raw nature with only our eyes and a fixed lens. In this photo essay, I aim to translate the profound sense of "Fernweh"—the German concept of an aching desire to travel to unseen places—into a visual language.
          </p>

          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEa_ceXhc2VUtsL4621tSoLDIpqh1sMYaxEq382vTyg0wsiYnoOCfHvASz2CVKLqvbIeFeHYRQupSwiKmvoAuZEhxtR9WSZkpkl0j2FTarCcaedfOxbKW1akaFDfqsNZSUGkkH66INKCu71LHflpwHB7qIskfZ_MLlmIvhD2Jd9Otb-Qkzm28M_CmyjdQthJtQmhVcaUc5ZAigH6vefJYcrIJhwSYv9NKyQ5vhIn5QN5qBSGylupy9GiQZLGRCNZT3o-TAqWDC8g" 
            alt="Coastline detail" 
            className="w-full h-auto my-12"
          />

          <h2 className="text-3xl font-semibold text-black mt-16 mb-6">The Journey to Solitude</h2>
          <p>
            Armed with my beloved camera, I set out before dawn. The light in these early hours is not just illumination; it's a structural element of the photograph. You can feel the chilly breeze as the waves crash against the timeless rocks. The contrast between the rigid stones and the fluid ocean perfectly encapsulates the duality of our own desires: to remain grounded, yet to flow freely.
          </p>
        </article>

        {/* More Articles Section */}
        <section className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <h3 className="text-3xl font-semibold mb-12 text-center text-black">More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/blog/2" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEa_ceXhc2VUtsL4621tSoLDIpqh1sMYaxEq382vTyg0wsiYnoOCfHvASz2CVKLqvbIeFeHYRQupSwiKmvoAuZEhxtR9WSZkpkl0j2FTarCcaedfOxbKW1akaFDfqsNZSUGkkH66INKCu71LHflpwHB7qIskfZ_MLlmIvhD2Jd9Otb-Qkzm28M_CmyjdQthJtQmhVcaUc5ZAigH6vefJYcrIJhwSYv9NKyQ5vhIn5QN5qBSGylupy9GiQZLGRCNZT3o-TAqWDC8g" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 2"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Urban Geometry: Lines of the City</h4>
                <p className="text-gray-500 text-sm">By Markus Lenz</p>
              </Link>
              <Link to="/blog/3" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_hP8v_E9p0q1r2s3t4u5v6w7x8y9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 3"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Mastering the Light and Shadows</h4>
                <p className="text-gray-500 text-sm">By Elena Rostova</p>
              </Link>
              <Link to="/blog/4" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0uhLdCXbXkySfd0sVS5L2AyNxwFjiL90BhGc2BY9LbVnMvGsbYl9ptiYNizolhlyhOkryXVN6OeayWYqwpK4MQvVZrgP9CwdSlSXt6Q6yRfIxBVVeyRZcxbf4S9MJTUDsfO8ZcAABoN7hGHD5c3Qa8cxhqhwhlivhjEMO-45afqymFLN5VIQF7-vKL6O_1de63DxnxvvCENKz1MQpoU0OgJNnoV4xHwS7AQtXoGTsoHou9dbXPT-ibECEnQaVgJmI21umlXdPM4Z" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 4"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Street Photography Etiquette</h4>
                <p className="text-gray-500 text-sm">By David Chen</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
