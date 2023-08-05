import React from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <header className='flex items-center justify-between max-[500px]:flex-col py-5 mb-5'>
      <div>
        <h1 className={`font-bold text-3xl cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>Social Media Dashboard</h1>
        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} max-[500px]:text-center`}>Total Followers: 23,004</p>
      </div>
      <button className={`inline-flex items-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-white hover:bg-slate-100 text-gray-600'} border-0 py-1 px-3 focus:outline-none rounded text-base`} onClick={handleToggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
    </header>
  )
}

export default Header;