 "use client"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      setStatus("success")

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Decorative blurred accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ready to boost your journey? Drop your details we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all"
        >
          <div className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="xyz@gmail.com"
              />
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                placeholder="Tell us about your educational background and skills you wants to develop"
              />
            </div>

            {/* Status message */}
            {status === "success" && (
              <p className="text-green-400 text-sm font-medium">
                 Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">
                 Something went wrong. Please try again.
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}