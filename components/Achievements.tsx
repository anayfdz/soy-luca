import React from 'react'

interface Achievement {
  title: string
  desc: string
}

export default function Achievements(): React.JSX.Element {
  const achievements: Achievement[] = [
    { title: "Conquisté el parque", desc: "Oriné en cada árbol." },
    { title: "Esperé pacientemente a mi humano por 4 días", desc: "Casi me doy por vencido, pero no lo hice." },
    { title: "Destrucción maestra", desc: "Un peluche nuevo duró exactamente 4 minutos." }
  ]

  return (
    <section className="py-12 bg-amber-400/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black mb-8 uppercase text-neutral-900 tracking-tight">
          🏅 Mis Logros (Aventuras)
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-amber-400 shadow-sm hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                🐾
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}