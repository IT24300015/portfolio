import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'OPERATIONS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full glass-dark border-b border-cyan-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-mono glow-cyan tracking-wider">
          &gt; NILAKSHAN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-cyan-300 hover:text-cyan-100 font-mono text-sm tracking-widest transition hover:glow-cyan"
            >
              [{link.name}]
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-cyan-400 block"></span>
          <span className="w-6 h-0.5 bg-cyan-400 block"></span>
          <span className="w-6 h-0.5 bg-cyan-400 block"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 glass-dark rounded-b-lg p-4 md:hidden border-b border-cyan-900">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-cyan-300 hover:text-cyan-100 font-mono text-sm"
              >
                [{link.name}]
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
