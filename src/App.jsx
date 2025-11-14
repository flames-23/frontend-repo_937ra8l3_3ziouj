import Spline from '@splinetool/react-spline'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 text-slate-800">
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">
          {/* Left: Tagline & Description */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Keuangan Andal untuk Masa Depan Anda
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 max-w-prose">
              Kami adalah perusahaan jasa keuangan Indonesia yang berfokus pada
              transparansi, keamanan, dan pertumbuhan berkelanjutan. Hadir untuk
              membantu Anda membuat keputusan finansial yang cerdas dengan
              layanan yang profesional dan dapat diandalkan.
            </p>
          </div>

          {/* Right: 3D Finance Spline */}
          <div className="relative w-full md:h-[420px] lg:h-[520px] h-[300px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-inset ring-white/40 bg-white/20 backdrop-blur-md">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Soft gradient glow that doesn't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-indigo-200/40" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
