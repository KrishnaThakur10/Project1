import React, { useState } from 'react'

function Login({handleLogin}) {
  
   
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

    const Submithandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        console.log("email: ",email)
        console.log("password: ",password)

        setEmail('')
        setPassword('')
    }

    

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
       <div className='border-2 border-emerald-600 px-10 py-12 rounded-xl'>
            <form 
            onSubmit={(e)=>{Submithandler(e)}}
            className='flex flex-col items-center justify-center'>
                <input value={email}onChange={(e)=>{setEmail(e.target.value)}} required className='text-lg bg-transparent rounded-full border-emerald-600 border-2 px-5 py-2 outline-none placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='text-lg bg-transparent rounded-full border-emerald-600 border-2 px-5 py-2 outline-none placeholder:text-gray-400 mt-4' type="password" placeholder='Enter your password' />
                <button className='text-white mt-7 text-lg border-none rounded-full bg-emerald-600 px-24 py-2 outline-none placeholder:text-gray-400 font-bold'>Log In</button>
            </form>
       </div>
    </div>
  )
}

export default Login
