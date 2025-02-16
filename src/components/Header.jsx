import React from 'react'

export default function Header() {
  return (
    <nav className="bg-purple-500 px-4 py-2 flex justify-between items-center sticky top-0 z-20">
    <h1 className="text-xl text-white">Webdcs</h1>
    <div className="flex space-x-4 items-center">
    <a href="/" className="text-white hover:text-black">Home</a>
    <a href="/" className="text-white hover:text-black">About</a>
    <a href="/" className="text-white hover:text-black">Setting</a>
    </div>
</nav>
  )
}
