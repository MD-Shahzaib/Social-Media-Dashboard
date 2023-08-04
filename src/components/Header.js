import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between max-[500px]:flex-col py-5 mb-5">
      <div>
        <h1 className="font-semibold text-3xl">Social Media Dashboard</h1>
        <p className="font-semibold text-slate-200 max-[500px]:text-center">Total Followers: 23,004</p>
      </div>
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Dark Mode
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
    </header>
  )
}

export default Header;