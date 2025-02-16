import React from 'react'
import { useState } from 'react'
export default function Card(props) {
    const [counter,setCounter] = useState(0);
    const btn = ()=>{
        setCounter(counter+1);
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-5 py-10">
    <div className="max-w-5xl w-full text-center">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Explore Our Features 🚀
      </h1>
      <p className="text-lg text-gray-200 mb-10">
        Our services are designed to bring you the best experience.
      </p>

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://source.unsplash.com/200x200/?technology"
            alt="Tech"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Innovative Tech
            <h1 className='text-red-600'>{props.title}</h1>
          </h3>
          <p className="text-gray-600 mt-2">
            Stay ahead with the latest advancements in technology.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://source.unsplash.com/200x200/?design"
            alt="Design"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Creative Design</h3>
          <p className="text-gray-600 mt-2">
            Experience modern and elegant UI/UX design trends.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://source.unsplash.com/200x200/?coding"
            alt="Coding"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">High Performance</h3>
          <p className="text-gray-600 mt-2">
            Optimized solutions for fast and efficient applications.
          </p>
        </div>
      </div>
      <div className=' mt-4 space-y-2'>
      <h1 className='text-xl text-white'>counter:{counter}</h1>
    <button className='bg-red-500 active:bg-red-800 p-2 rounded-lg text-white'onClick={btn}>Click me</button>
      </div>
    </div>
  </div>
  )
}
