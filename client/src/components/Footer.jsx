export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-cyan-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-mono glow-cyan mb-2">&gt; NILAKSHAN</h3>
            <p className="text-gray-400 text-sm">
              Security-Focused Developer | Building Resilient Systems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-cyan-400 text-sm mb-4 glow-cyan">NAVIGATION</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  [ABOUT]
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  [SKILLS]
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  [OPERATIONS]
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  [CONTACT]
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-mono text-cyan-400 text-sm mb-4 glow-cyan">CONNECT</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  [GITHUB]
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  [LINKEDIN]
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  [X / TWITTER]
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-cyan-400 text-sm mb-4 glow-cyan">COMMUNICATION</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:nimeshnilakshan858@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  [EMAIL]
                </a>
              </li>
              <li className="text-gray-500">[COLOMBO, SRI LANKA]</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-900 my-8"></div>

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4 text-sm font-mono">
          <p className="text-gray-500">
            © {currentYear} NILAKSHAN. ALL_RIGHTS_RESERVED
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition">
              [PRIVACY]
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              [TERMS]
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
