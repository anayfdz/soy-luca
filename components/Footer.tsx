import React from 'react'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-orange-600 text-white pt-12 pb-6 rounded-t-[40px]">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-wider uppercase">Sígueme @soylucaramon</h3>
          <p className="text-orange-100 text-sm">No te pierdas ninguna de mis travesuras diarias.</p>
        </div>
        
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:scale-125 transition-transform">📸</a>
          <a href="#" className="hover:scale-125 transition-transform">🎥</a>
          <a href="#" className="hover:scale-125 transition-transform">🐦</a>
        </div>
        
        <hr className="border-orange-500/50" />
        
        <p className="text-xs text-orange-200">
          © {new Date().getFullYear()} Luca, Negro Como tú Corazón. Hecho con amor.
        </p>
      </div>
    </footer>
  )
}