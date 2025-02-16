import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-5 py-10">
    <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        
        {/* Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us 📩</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Please fill out the form below.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="w-full h-96 md:h-auto">
          <iframe
            className="w-full h-full"
           src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28356.93927196376!2d77.75665165!3d27.3251599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739695229508!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          ></iframe>
        </div>

      </div>
    </div>
  </div>
  )
}
