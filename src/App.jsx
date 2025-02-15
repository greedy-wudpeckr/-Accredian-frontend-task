import React, { useState } from 'react';
import ReferralModal from './ReferralModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-violet-200 flex flex-col items-center">
      <nav className="w-full max-w-7xl h-15 bg-white rounded-2xl shadow-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
        <div>

          <h2 className="text-violet-600 text-center text-2xl font-semibold">Accredian</h2>
        </div>
        <div className="relative group text-xl mt-8 m-7">
            <button className="text-violet-600 hover:text-blue-700 transition duration-300 cursor-pull">Menu</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-blue-100 hover:underline transition duration-300">React Course</a>
              <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-blue-100  hover:underline transition duration-300">Backend Development</a>
              <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-blue-100 hover:underline transition duration-300">Web 3</a>
            </div>
          </div>
        </div>
        <div className="flex text-lg items-center space-x-4">
          <a href="#" className="text-violet-600 hover:text-violet-800 hover:underline transition duration-300">Login</a>
          <a href="#" className="text-violet-600 hover:text-violet-800 hover:underline transition duration-300">Sign In</a>
          <a href="#" className="text-violet-600 hover:text-violet-800 hover:underline transition duration-300">Refer and Earn</a>
        </div>
      </nav>

      <div className='flex flex-col md:flex-row bg-violet-200 p-4 items-center' id='centerr'>
        <div className='text-4xl md:text-6xl m-10 md:m-40 text-center md:text-left'>
          <h2 className='font-bold'> <span className='text-green-500 font-bold'>Rewards</span> are just a reference away!</h2> <br />
          <h2 className='font-bold'> <span className='text-4xl md:text-6xl font-serif'> Let's Earn </span> <br /> <span className='text-4xl md:text-6xl' > & Learn</span> </h2>
        <button onClick={() => setIsModalOpen(true)} className="relative inline-flex h-12 w-44 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full  w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl text-white backdrop-blur-3xl">
    Refer Now 
  </span>
        </button>
        </div>
        <div className="w-full max-w-4xl">
          <video className="w-full rounded-lg" src="rfv.webm" preload="none" autoPlay muted loop></video>
        </div>
      </div>
      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;