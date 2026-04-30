export default function Skills() {
  const skillCategories = [
    {
      category: 'SECURITY SPECIALIZATION',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Cryptography', 'OWASP Top 10', 'API Security']
    },
    {
      category: 'SECURE DEVELOPMENT',
      skills: ['Secure Coding', 'OAuth 2.0 / JWT', 'CORS / CSRF Protection', 'SQL Injection Prevention', 'XSS Mitigation', 'Data Encryption']
    },
    {
      category: 'INFRASTRUCTURE & DEPLOYMENT',
      skills: ['Docker Security', 'SSL/TLS Configuration', 'Firewall Management', 'Zero Trust Architecture', 'CI/CD Security', 'Cloud Security']
    },
    {
      category: 'FULL STACK DEVELOPMENT',
      skills: ['React.js', 'Node.js/Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">COMPETENCY_MATRIX</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.category}
              className="glass border-glow p-8 rounded-xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono glow-cyan">{cat.category}</h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-900 to-purple-900 text-cyan-300 rounded-full font-mono text-sm border border-cyan-500 hover:border-cyan-400 hover:text-cyan-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Chart */}
        <div className="mt-16 glass border-glow p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono glow-cyan">THREAT_LEVEL_ASSESSMENT</h3>
          
          <div className="space-y-6">
            {[
              { name: 'Secure Architecture Design', level: 95 },
              { name: 'Penetration Testing', level: 88 },
              { name: 'Cryptographic Implementation', level: 92 },
              { name: 'Secure Development Practices', level: 90 },
              { name: 'Incident Response', level: 85 }
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-cyan-300">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">[{skill.level}%]</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 border border-cyan-900">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
