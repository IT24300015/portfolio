export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-300 text-gray-600 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">NILAKSHAN</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer | IT Student | Cyber Security 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blue-600 text-sm mb-4 font-semibold">NAVIGATION</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-blue-600 text-sm mb-4 font-semibold">CONNECT</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://github.com/IT24300015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  GitHub (IT24300015)
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  Email (nimeshnilakshan858@gmail.com)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nimesh-nilakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-blue-600 text-sm mb-4 font-semibold">COMMUNICATION</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  Gmail
                </a>
              </li>
              <li className="text-gray-500">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4 text-sm">
          <p className="text-gray-500">
            © {currentYear} NILAKSHAN. All Rights Reserved
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-blue-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
