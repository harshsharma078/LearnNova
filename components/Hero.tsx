 import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Decorative blurred circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Accent text */}
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Introducing the Future
          </span>
        </div>

        {/* Bold headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
          Learn  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Nova </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          At learn Nova knowledge meets innovation. Empowering learners to grow smarter,faster,and future ready.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="text-base h-12 px-8 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center shadow-lg hover:bg-blue-700 transition group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="text-base h-12 px-8 border border-gray-600 text-gray-200 rounded-xl font-semibold hover:bg-gray-800 transition">
            View Documentation
          </button>
        </div>

        {/* Terminal hint
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 shadow-md">
            <span className="text-gray-300 text-sm font-mono">$ npx create-next-app@latest</span>
          </div>
        </div> */}
      </div>
    </section>
  )
}