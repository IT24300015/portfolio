import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields' })
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' })
      return
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')

    setStatus({ type: 'success', message: 'Opening Gmail compose window...' })
    setTimeout(() => setStatus(null), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">GET IN TOUCH</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
            <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-600 mb-8">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              I'll get back to you within 24-48 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">EMAIL</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition">
                    nimeshnilakshan858@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">WORK PHONE</p>
                  <a href="tel:+94716536912" className="text-blue-600 hover:text-blue-700 transition">
                    +94 71 653 6912
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">GITHUB</p>
                  <a href="https://github.com/IT24300015" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition">
                    github.com/IT24300015
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">LOCATION</p>
                  <p className="text-gray-600">Colombo, Sri Lanka</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">STATUS</p>
                  <p className="text-green-600 font-bold">AVAILABLE FOR PROJECTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border border-gray-300 p-8 rounded-xl shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-blue-600 placeholder-gray-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-blue-600 placeholder-gray-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-blue-600 resize-none placeholder-gray-400"
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-300'
                    : 'bg-red-50 text-red-700 border border-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Open Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
