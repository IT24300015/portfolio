const skillCategories = [
  {
    category: 'PROGRAMMING LANGUAGES',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Java Spring Boot'],
  },
  {
    category: 'DATABASES',
    skills: ['Microsoft SQL Server', 'MySQL'],
  },
  {
    category: 'CONCEPTS & PRACTICES',
    skills: [
      'CRUD Operations',
      'Object-Oriented Programming (OOP)',
      'RESTful API Design',
      'Database Design',
      'Agile Methodology',
      'Version Control (Git/GitHub)',
      'Software Development Life Cycle (SDLC)',
      'Cybersecurity Fundamentals',
    ],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Microsoft SQL Server Management Studio'],
  },
  {
    category: 'SOFT SKILLS',
    skills: ['Team Leadership', 'Communication & Presentation', 'Time Management', 'Self-Learning & Adaptability', 'Customer Service Orientation'],
  },
]

const projects = [
  {
    title: 'Library Management System',
    subtitle: 'Bomiriya Central College | 2026',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
    alt: 'Library shelves and books',
    description: 'A full-stack digital library platform built to streamline book circulation, member administration, fine tracking, and reporting for Bomiriya Central College.',
    highlights: [
      'Responsive frontend interfaces for books, members, and transactions using HTML, CSS, and JavaScript',
      'Node.js and Express.js REST API connected to a normalized Microsoft SQL Server database',
      'Book issuing and return workflows with automatic overdue fine calculation',
      'PDF reporting for inventory, member records, and transaction history',
    ],
    tech: ['HTML/CSS/JS', 'Node.js', 'Express.js', 'Microsoft SQL Server'],
    github: 'https://github.com/IT24300015',
  },
  {
    title: 'Web-Based Bidding System',
    subtitle: 'Admin Management Module | 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional team reviewing bidding system dashboard',
    description: 'A secure Spring Boot admin module for a team-built online bidding platform, focused on oversight, reporting, and operational control.',
    highlights: [
      'Role-based administration for user accounts, suspension, and audit trail logging',
      'Report generation and export support for bidding activity monitoring',
      'Secure input validation and SQL parameterisation to reduce injection risk',
      'Built with Java Spring Boot and SQL in a collaborative team environment',
    ],
    tech: ['Java Spring Boot', 'SQL', 'Role-Based Access', 'Reporting'],
    github: 'https://github.com/IT24300015',
  },
  {
    title: 'Online Grocery System',
    subtitle: 'Order Management Module | 2024',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Online grocery shopping and order management',
    description: 'A collaborative Java-based grocery ordering module designed to manage customer orders, processing, and delivery tracking within a broader web application.',
    highlights: [
      'CRUD-driven order lifecycle with create, confirm, cancel, and delivery tracking flows',
      'Object-oriented design with modular entity classes and service layers',
      'Integrated cleanly with inventory and user management modules developed by teammates',
      'Maintained through GitHub collaboration and peer-reviewed development practices',
    ],
    tech: ['Java', 'OOP', 'CRUD Operations', 'Order Management'],
    github: 'https://github.com/IT24300015',
  },
]

function scrollToSection(selector) {
  const section = document.querySelector(selector)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

function renderSkills() {
  const grid = document.getElementById('skills-grid')
  if (!grid) return

  grid.innerHTML = skillCategories
    .map(
      (cat) => `
      <div class="skill-card">
        <h3>${cat.category}</h3>
        <div class="tag-list">
          ${cat.skills
            .map(
              (skill) =>
                `<span class="tag">${skill}</span>`
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('')
}

function renderProjects() {
  const grid = document.getElementById('projects-grid')
  if (!grid) return

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.alt}" class="project-image" />
        <div class="project-body">
          <h3>${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.tech
              .map(
                (tech) =>
                  `<span class="tag">${tech}</span>`
              )
              .join('')}
          </div>
          <ul class="bullet-list">
            ${project.highlights
              .map(
                (highlight) => `<li>${highlight}</li>`
              )
              .join('')}
          </ul>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary full">SOURCE</a>
        </div>
      </article>
    `
    )
    .join('')
}

function setupForm() {
  const form = document.getElementById('contact-form')
  const status = document.getElementById('form-status')
  if (!form || !status) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      status.className = 'field-status error'
      status.textContent = 'Please fill all fields'
      status.classList.remove('hidden')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      status.className = 'field-status error'
      status.textContent = 'Please enter a valid email'
      status.classList.remove('hidden')
      return
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com&su=${subject}&body=${body}`

    status.className = 'field-status success'
    status.textContent = 'Opening Gmail compose window...'
    status.classList.remove('hidden')

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    form.reset()

    setTimeout(() => {
      status.classList.add('hidden')
    }, 3000)
  })
}

function setupNav() {
  const menuToggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden')
      mobileMenu.classList.toggle('hidden')
      menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true')
    })
  }

  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll')
      if (!target) return
      scrollToSection(target)
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
        menuToggle?.setAttribute('aria-expanded', 'false')
      }
    })
  })
}

function setupProfileImageFallback() {
  const img = document.getElementById('profile-image')
  if (!img) return

  img.addEventListener('error', () => {
    const fallbackSvg = encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='100%' height='100%' fill='#f0f9ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#1a3a52' font-family='Segoe UI, Arial, sans-serif' font-size='160' font-weight='bold'>N</text></svg>"
    )
    img.src = `data:image/svg+xml;utf8,${fallbackSvg}`
  })
}

document.getElementById('current-year').textContent = String(new Date().getFullYear())
setupNav()
renderSkills()
renderProjects()
setupForm()
setupProfileImageFallback()
