export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      subtitle: 'Bomiriya Central College | 2026',
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
      alt: 'Library shelves and books',
      description:
        'A full-stack digital library platform built to streamline book circulation, member administration, fine tracking, and reporting for Bomiriya Central College.',
      highlights: [
        'React (Vite) frontend with responsive interfaces for books, members, and transactions',
        'Node.js and Express.js REST API connected to a normalized Microsoft SQL Server database',
        'Book issuing and return workflows with automatic overdue fine calculation',
        'PDF reporting for inventory, member records, and transaction history'
      ],
      tech: ['React (Vite)', 'Node.js', 'Express.js', 'Microsoft SQL Server'],
      github: 'https://github.com/IT24300015'
    },
    {
      id: 2,
      title: 'Web-Based Bidding System',
      subtitle: 'Admin Management Module | 2023',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      alt: 'Professional team reviewing bidding system dashboard',
      description:
        'A secure Spring Boot admin module for a team-built online bidding platform, focused on oversight, reporting, and operational control.',
      highlights: [
        'Role-based administration for user accounts, suspension, and audit trail logging',
        'Report generation and export support for bidding activity monitoring',
        'Secure input validation and SQL parameterisation to reduce injection risk',
        'Built with Java Spring Boot and SQL in a collaborative team environment'
      ],
      tech: ['Java Spring Boot', 'SQL', 'Role-Based Access', 'Reporting'],
      github: 'https://github.com/IT24300015'
    },
    {
      id: 3,
      title: 'Online Grocery System',
      subtitle: 'Order Management Module | 2024',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Online grocery shopping and order management',
      description:
        'A collaborative Java-based grocery ordering module designed to manage customer orders, processing, and delivery tracking within a broader web application.',
      highlights: [
        'CRUD-driven order lifecycle with create, confirm, cancel, and delivery tracking flows',
        'Object-oriented design with modular entity classes and service layers',
        'Integrated cleanly with inventory and user management modules developed by teammates',
        'Maintained through GitHub collaboration and peer-reviewed development practices'
      ],
      tech: ['Java', 'OOP', 'CRUD Operations', 'Order Management'],
      github: 'https://github.com/IT24300015'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">PROJECTS</h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200 font-semibold mb-1">
                    Featured Project
                  </p>
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">
                  {project.subtitle}
                </p>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-gray-600 mb-5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-900 text-white text-center text-xs font-semibold rounded-lg hover:bg-gray-800 transition"
                  >
                    SOURCE
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
