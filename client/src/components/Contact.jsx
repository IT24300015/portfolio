import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields' })
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' })
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const response = await axios.post(
        `${apiUrl}/api/contact`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      )

      setStatus({ type: 'success', message: 'Message sent successfully! 🎉' })
      setFormData({ name: '', email: '', message: '' })

      // Clear message after 3 seconds
      setTimeout(() => setStatus(null), 3000)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950 border-t border-cyan-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">SECURE_CHANNEL</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono glow-cyan">
              ESTABLISH_CONNECTION
            </h3>

            <p className="text-gray-300 mb-8 font-light">
              Have security concerns or project proposals? Initiate secure contact protocol. 
              Expect response within 24-48 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 border border-cyan-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-cyan-300 text-sm">EMAIL_PROTOCOL</p>
                  <a href="mailto:nimeshnilakshan858@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:glow-cyan transition">
                    nimeshnilakshan858@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 border border-purple-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-purple-300 text-sm">LOCATION</p>
                  <p className="text-gray-400">Colombo, Sri Lanka</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 border border-green-400 animate-pulse-glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-green-300 text-sm">STATUS</p>
                  <p className="text-green-400 font-bold">AVAILABLE_FOR_PROJECTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <form onSubmit={handleSubmit} className="glass border-glow p-8 rounded-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-cyan-300 font-mono text-sm mb-2">
                  NAME_INPUT
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-slate-800 border border-cyan-700 text-cyan-100 rounded-lg focus:outline-none focus:border-cyan-500 font-mono placeholder-gray-500"
                  disabled={loading}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-cyan-300 font-mono text-sm mb-2">
                  EMAIL_INPUT
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-slate-800 border border-cyan-700 text-cyan-100 rounded-lg focus:outline-none focus:border-cyan-500 font-mono placeholder-gray-500"
                  disabled={loading}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-cyan-300 font-mono text-sm mb-2">
                  MESSAGE_CONTENT
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 bg-slate-800 border border-cyan-700 text-cyan-100 rounded-lg focus:outline-none focus:border-cyan-500 font-mono resize-none placeholder-gray-500"
                  disabled={loading}
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`mb-4 p-3 rounded-lg text-sm font-mono ${
                  status.type === 'success'
                    ? 'bg-green-900 text-green-300 border border-green-600'
                    : 'bg-red-900 text-red-300 border border-red-600'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-mono"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING_TRANSMISSION...
                  </>
                ) : (
                  '>>> TRANSMIT_MESSAGE <<<'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
