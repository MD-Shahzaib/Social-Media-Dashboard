import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <div>
        <h1 className="font-bold text-2xl text-white dark:text-white">Social Media Dashboard</h1>
        <p className="text-slate-600 font-bold dark:text-slate-400">Total Followers: 23,004</p>
      </div>
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
    </header>
  )
}

export default Header;