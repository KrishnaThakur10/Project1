function Header({data}) {

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload();
  }

  const firstname = data ? data.firstname : "Admin" ;
  return (
    <div className='flex justify-between items-center p-5'>
      <h1 className='text-2xl font-medium group'>Hello <br /> <span className='text-3xl font-semibold '>{firstname} </span> <span className='group-hover:animate-bounce inline-block'>👋</span> </h1>
      <button onClick={handleLogout} className='bg-orange-600 border-none px-2 py-1 rounded-md font-semibold hover:scale-110 transition-transform duration-200 hover:text-orange-600  hover:bg-white'>Log Out</button>
    </div>
  )
}

export default Header
