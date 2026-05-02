import { useState, useEffect } from 'react'

export default function About() {
  const publicProfile = new URL('/profile.jpeg', import.meta.url).href
  const [imgSrc, setImgSrc] = useState(publicProfile)
  const [loaded, setLoaded] = useState(false)

  const handleImgError = () => {
    const svg = encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'>
        <rect width='100%' height='100%' fill='#f0f9ff' />
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#1a3a52' font-family='Inter, system-ui, sans-serif' font-size='160' font-weight='bold'>N</text>
      </svg>`)
    setImgSrc(`data:image/svg+xml;utf8,${svg}`)
    setLoaded(true)
  }

  useEffect(() => {
    // Preload image and detect failure
    const img = new Image()
    img.src = publicProfile
    img.onload = () => {
      setImgSrc(publicProfile)
      setLoaded(true)
    }
    img.onerror = () => handleImgError()
  }, [publicProfile])

  return (
    <section id="about" className="py-16 px-1 sm:px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-1">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left">ABOUT ME</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-full sm:w-11/12 md:w-full md:max-w-[420px] mx-auto md:mx-0 aspect-[4/5] bg-white p-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden flex items-center max-h-96 md:max-h-[720px]">
                {!loaded && (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded-xl">
                    <span className="text-gray-600">Loading image…</span>
                  </div>
                )}

                {loaded && (
                  <img
                    src={imgSrc}
                    alt="Nilakshan"
                    onError={handleImgError}
                    loading="lazy"
                    className="h-full w-full rounded-lg object-contain md:object-cover object-center block"
                    style={{ maxHeight: '100%' }}
                  />
                )}
              </div>
            </div>

            <div className="space-y-6 text-left md:pl-8 lg:pl-12 max-w-prose md:max-w-xl">
              <p className="text-sm md:text-base text-gray-700 leading-7">
                Self-driven and results-oriented Information Technology undergraduate with hands-on experience in full-stack web development, software engineering, and foundational cybersecurity practices. Possesses a strong understanding of network fundamentals including TCP/IP, routing, switching, and core network security concepts such as firewalls, encryption, and secure communication protocols.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-7">
                Proven ability to design and deliver collaborative software projects using modern frameworks such as React, Node.js and Java Spring Boot, along with SQL databases. Demonstrates leadership, analytical problem-solving, and effective communication in team environments.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-7">
                Actively seeking an internship or entry-level role to apply technical skills in a high-performing environment while continuing to expand knowledge in cybersecurity and network systems.
              </p>

              <div className="grid sm:grid-cols-1 gap-4 pt-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Work Phone
                  </p>
                  <a
                    href="tel:+94716536912"
                    className="text-base font-semibold text-gray-900 hover:text-blue-600 transition"
                  >
                    +94 71 653 6912
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white border border-gray-300 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-bold text-blue-600">5+</div>
            <p className="text-gray-700 mt-2 font-medium">OPERATIONS COMPLETED</p>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-bold text-blue-600">1+</div>
            <p className="text-gray-700 mt-2 font-medium">YEARS EXPERIENCE</p>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-bold text-blue-600">100%</div>
            <p className="text-gray-700 mt-2 font-medium">SUCCESS RATE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
