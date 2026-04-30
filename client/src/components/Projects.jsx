import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Secure Authentication System',
      description: 'Multi-factor authentication with OAuth 2.0, JWT tokens, and encrypted credentials',
      tech: ['Node.js', 'JWT', 'Bcrypt', 'PostgreSQL', 'OAuth 2.0'],
      category: 'security',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-red-900 to-red-700'
    },
    {
      id: 2,
      title: 'Vulnerability Scanner',
      description: 'Automated security scanning tool detecting OWASP Top 10 vulnerabilities',
      tech: ['React', 'Node.js', 'Security Analysis'],
      category: 'security',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-yellow-900 to-orange-900'
    },
    {
      id: 3,
      title: 'Encrypted API Gateway',
      description: 'Secure RESTful API with CORS, rate limiting, and request validation',
      tech: ['Express.js', 'Encryption', 'JWT', 'Rate Limiting'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-cyan-900 to-blue-900'
    },
    {
      id: 4,
      title: 'SSL/TLS Certificate Manager',
      description: 'Automated certificate management with renewal and deployment',
      tech: ['Node.js', 'SSL/TLS', 'DevOps', 'Automation'],
      category: 'infrastructure',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-purple-900 to-indigo-900'
    },
    {
      id: 5,
      title: 'Penetration Testing Dashboard',
      description: 'Comprehensive vulnerability assessment and reporting platform',
      tech: ['React', 'D3.js', 'Node.js', 'Security Metrics'],
      category: 'security',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-red-800 to-pink-800'
    },
    {
      id: 6,
      title: 'Zero Trust Architecture Validator',
      description: 'Network security validation tool for zero-trust model implementation',
      tech: ['Node.js', 'Network Security', 'Validation Engine'],
      category: 'infrastructure',
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'bg-gradient-to-br from-green-900 to-teal-900'
    }
  ]

  const categories = ['all', 'security', 'backend', 'infrastructure']

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 border-t border-cyan-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">OPERATIONS_LOG</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-mono text-sm transition ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border border-cyan-400 glow-cyan'
                  : 'glass text-cyan-300 hover:text-cyan-200 border border-cyan-700 hover:border-cyan-500'
              }`}
            >
              [{cat.toUpperCase()}]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="glass border-glow rounded-lg overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Project Image */}
              <div className={`h-40 ${project.image}`}></div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono glow-cyan">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-cyan-900 text-cyan-300 rounded border border-cyan-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 button-secondary text-center text-xs"
                  >
                    SOURCE
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 button-primary text-center text-xs"
                  >
                    DEPLOY
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
