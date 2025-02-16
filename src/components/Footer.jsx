import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    
    <div>
      <h2 class="text-2xl font-bold">About Us</h2>
      <p class="mt-2 text-gray-300 text-sm">
        We provide the best services to help you grow and succeed. 
        Stay connected with us for more updates.
      </p>
    </div>
    <div>
      <h2 class="text-2xl font-bold">Quick Links</h2>
      <ul class="mt-3 space-y-2">
        <li><a href="#" class="text-gray-300 hover:text-blue-400 transition">Home</a></li>
        <li><a href="#" class="text-gray-300 hover:text-blue-400 transition">Services</a></li>
        <li><a href="#" class="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
        <li><a href="#" class="text-gray-300 hover:text-blue-400 transition">Privacy Policy</a></li>
      </ul>
    </div>

    <div>
      <h2 class="text-2xl font-bold">Follow Us</h2>
      <div class="flex space-x-4 mt-3">
        <a href="#" class="text-gray-300 hover:text-blue-400 transition text-xl">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="text-gray-300 hover:text-blue-400 transition text-xl">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-gray-300 hover:text-blue-400 transition text-xl">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="text-gray-300 hover:text-blue-400 transition text-xl">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

  </div>
  <div class="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
    © 2025 Your Company. All rights reserved.
  </div>
</footer>

  )
}
