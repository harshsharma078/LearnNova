 import { Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:items-center">
          {/* Left: Project Name & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LearnNova 
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Building the future, one line at a time
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <li>
                <Link
                  href="#home"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Social Media Icons */}
          <div className="flex justify-center md:justify-end gap-5">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-zinc-300" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-zinc-300" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-300" />
            </Link>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-700/50 text-center">
          <p className="text-sm text-zinc-400">
            © {currentYear} LearnNova. All rights reserved.
          </p>
        </div>
      </div>

      {/* Gradient Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent pointer-events-none" />
    </footer>
  )
}