export default function Skills() {
  const skillCategories = [
    {
      category: 'PROGRAMMING LANGUAGES',
      skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
      category: 'FRAMEWORKS & LIBRARIES',
      skills: ['React (Vite)', 'Node.js', 'Express.js', 'Java Spring Boot']
    },
    {
      category: 'DATABASES',
      skills: ['Microsoft SQL Server', 'MySQL']
    },
    {
      category: 'CONCEPTS & PRACTICES',
      skills: ['CRUD Operations', 'Object-Oriented Programming (OOP)', 'RESTful API Design', 'Database Design', 'Agile Methodology', 'Version Control (Git/GitHub)', 'Software Development Life Cycle (SDLC)', 'Cybersecurity Fundamentals']
    },
    {
      category: 'TOOLS',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Microsoft SQL Server Management Studio']
    },
    {
      category: 'SOFT SKILLS',
      skills: ['Team Leadership', 'Communication & Presentation', 'Time Management', 'Self-Learning & Adaptability', 'Customer Service Orientation']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">SKILLS & EXPERTISE</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.category}
              className="bg-white border border-gray-300 p-8 rounded-xl shadow-sm hover:shadow-md transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{cat.category}</h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200 hover:border-blue-400 hover:text-blue-800 transition font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 bg-white border border-gray-300 p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-gray-900">EDUCATION & CERTIFICATIONS</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#education-main"
                className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-semibold rounded hover:bg-gray-300 transition inline-flex items-center justify-center"
              >
                Education
              </a>
              <a
                href="#certificate-main"
                className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-semibold rounded hover:bg-gray-300 transition inline-flex items-center justify-center"
              >
                Certificate
              </a>
            </div>
          </div>

          <div className="space-y-8 text-gray-700">
            <div id="education-main" className="border border-gray-300 rounded-lg p-5 bg-gray-50 scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h4 className="text-lg font-semibold text-gray-900">BSc (Hons) in Information Technology</h4>
                <span className="text-sm text-blue-600 font-medium">2024 - Present</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-3">Sri Lanka Institute of Information Technology (SLIIT) | 2nd Year Undergraduate</p>
              <ul className="space-y-2 text-sm md:text-base list-disc pl-5">
                <li>Studying core modules in Software Engineering, Database Systems, Web Development, Information Systems, and Cybersecurity.</li>
                <li>Participating in collaborative team projects applying Agile methodologies and real-world development practices.</li>
                <li>Consistently applying theoretical knowledge in practical assignments across full-stack development and system design.</li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-5 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h4 className="text-lg font-semibold text-gray-900">Assured Diploma in Information Technology (DITEC)</h4>
                <span className="text-sm text-blue-600 font-medium">Completed 2020</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-3">ESOFT Metro Campus</p>
              <ul className="space-y-2 text-sm md:text-base list-disc pl-5">
                <li>Covered fundamentals of computing, programming logic, networking, and information systems.</li>
                <li>Gained foundational skills in software development and database management that support current undergraduate studies.</li>
              </ul>
            </div>

            <div id="certificate-main" className="border border-gray-300 rounded-lg p-5 bg-gray-50 scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <h4 className="text-lg font-semibold text-gray-900">CERTIFICATE: Introduction to Cybersecurity</h4>
                <a
                  href="https://www.credly.com/badges/5a985ff7-1196-4618-8143-bab5b51dd28c/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition inline-flex items-center justify-center"
                >
                  Verify Certificate
                </a>
              </div>

              <p className="text-sm md:text-base text-gray-700 mb-3">
                Cisco Networking Academy student-level badge demonstrating foundational cybersecurity awareness and threat-defense knowledge.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Cyber Best Practices',
                  'Cybersecurity',
                  'Network Vulnerabilities',
                  'Privacy And Data Confidentiality',
                  'Threat Detection'
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            <div className="border border-gray-300 rounded-lg p-5 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h4 className="text-lg font-semibold text-gray-900">Junior Cybersecurity Analyst Career Path (Ongoing) - Cisco Networking Academy</h4>
                <span className="text-sm text-blue-600 font-medium">Ongoing</span>
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Currently developing foundational skills in cybersecurity, including network security, threat detection, and risk management, as part of a structured career path program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
