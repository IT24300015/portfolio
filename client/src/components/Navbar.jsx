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
    <nav role="navigation" aria-label="Main Navigation" className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">
          NIMESH
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="absolute top-16 left-0 right-0 bg-white rounded-b-lg p-4 md:hidden border-b border-gray-200 mobile-menu-open">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
