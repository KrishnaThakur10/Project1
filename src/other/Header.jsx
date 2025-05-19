import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center '>
      <h1 className='text-2xl font-medium group'>Hello <br /> <span className='text-3xl font-semibold '>Krishna </span> <span className='group-hover:animate-bounce inline-block'>👋</span> </h1>
      <button className='bg-orange-600 border-none px-2 py-1 rounded-md font-semibold hover:scale-110 transition-transform duration-200 hover:text-orange-600  hover:bg-white'>Log Out</button>
    </div>
  )
}

export default Header
