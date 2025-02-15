import React, { useState } from 'react';
import ReferralModal from './ReferralModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-violet-200 flex flex-col items-center">
      <nav className="w-full max-w-7xl h-auto md:h-15 bg-white rounded-2xl shadow-md relative">
        <div className="flex justify-between items-center px-4 md:px-6 py-4">
          {/* Logo */}
          <h2 className="text-violet-600 text-2xl font-semibold">Accredian</h2>
          
          {/* Hamburger Button */}
          <button 
            className="md:hidden text-violet-600 hover:text-violet-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-violet-600 hover:text-violet-800 transition duration-300">
                Menu
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-violet-50 transition duration-300">React Course</a>
                <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-violet-50 transition duration-300">Backend Development</a>
                <a href="#" className="block px-4 py-2 text-violet-600 hover:bg-violet-50 transition duration-300">Web 3</a>
              </div>
            </div>
            <a href="#" className="text-violet-600 hover:text-violet-800 transition duration-300">Login</a>
            <a href="#" className="text-violet-600 hover:text-violet-800 transition duration-300">Sign In</a>
            <a href="#" className="text-violet-600 hover:text-violet-800 transition duration-300">Refer and Earn</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white border-t border-gray-200`}>
          <div className="px-4 py-2 space-y-3">
            <div className="relative">
              <button 
                className="text-violet-600 hover:text-violet-800 transition duration-300 w-full text-left py-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                Menu
              </button>
              <div className="pl-4 space-y-2">
                <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">React Course</a>
                <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">Backend Development</a>
                <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">Web 3</a>
              </div>
            </div>
            <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">Login</a>
            <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">Sign In</a>
            <a href="#" className="block text-violet-600 hover:text-violet-800 py-2">Refer and Earn</a>
          </div>
        </div>
      </nav>
      
      <div className='flex flex-col lg:flex-row bg-violet-200 p-4 items-center justify-center w-full' id='centerr'>
        <div className='text-3xl sm:text-4xl lg:text-6xl m-6 lg:m-20 text-center lg:text-left max-w-2xl'>
          <h2 className='font-bold'>
            <span className='text-green-500 font-bold'>Rewards</span> are just a reference away!
          </h2>
          <br />
          <h2 className='font-bold'>
            <span className='text-3xl sm:text-4xl lg:text-6xl font-serif'>Let's Earn</span>
            <br />
            <span className='text-3xl sm:text-4xl lg:text-6xl'>& Learn</span>
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative inline-flex h-12 w-44 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg sm:text-xl text-white backdrop-blur-3xl">
              Refer Now
            </span>
          </button>
        </div>
        <div className="w-full max-w-4xl px-4 mt-8 lg:mt-0">
          <video className="w-full rounded-lg" src="rfv.webm" preload="none" autoPlay muted loop></video>
        </div>
      </div>
      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
   

    </div>
  );
}

export default App;