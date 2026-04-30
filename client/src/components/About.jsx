export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-950 border-t border-cyan-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">ABOUT.SYS</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <div className="border-glow p-2 rounded-xl hover-lift">
              <img 
                src="/profile.jpg" 
                alt="Nilakshan"
                className="w-full rounded-lg border border-cyan-500 shadow-lg"
                style={{
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)'
                }}
              />
            </div>
          </div>

          <div className="animate-slide-right">
            <p className="text-lg text-cyan-100 mb-4 font-mono">
              &gt; SYSTEM_PROFILE_INITIALIZED
            </p>

            <p className="text-lg text-gray-300 mb-4">
              Security-focused full-stack developer with expertise in building resilient, 
              cryptographically-secure web applications. Specialized in threat assessment, 
              secure architecture design, and penetration testing.
            </p>

            <p className="text-lg text-gray-300 mb-4">
              Proficient in secure coding practices, API security, infrastructure hardening, 
              and vulnerability management. Passionate about defending against evolving cyber threats 
              and implementing zero-trust architectures.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              When not securing systems, I contribute to open-source security projects and 
              share knowledge about cybersecurity best practices with the developer community.
            </p>

            <a
              href="/Nilakshan_CV.pdf"
              download
              className="button-primary inline-block"
            >
              DOWNLOAD CREDENTIALS
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass border-glow p-6 rounded-xl text-center hover-lift">
            <div className="text-4xl font-bold glow-cyan">
              50+
            </div>
            <p className="text-cyan-300 mt-2 font-mono">OPERATIONS_COMPLETED</p>
          </div>

          <div className="glass border-glow p-6 rounded-xl text-center hover-lift">
            <div className="text-4xl font-bold glow-cyan">
              5+
            </div>
            <p className="text-cyan-300 mt-2 font-mono">YEARS_EXPERIENCE</p>
          </div>

          <div className="glass border-glow p-6 rounded-xl text-center hover-lift">
            <div className="text-4xl font-bold glow-cyan">
              100%
            </div>
            <p className="text-cyan-300 mt-2 font-mono">SUCCESS_RATE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
