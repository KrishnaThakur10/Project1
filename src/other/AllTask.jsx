import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {

    const Authdata = useContext(AuthContext)
    console.log(Authdata);
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-96 overflow-auto'>
        
        <div className='bg-red-400 mb-4 py-2 px-4 flex justify-between rounded'>

            <h2>Name</h2>
            <h3>Make a Dish</h3>
            <h4>Status</h4>
        </div>
        <div>
            
        {Authdata.employees.map(function(elem){
            return  <div className='bg-red-400 mb-4 py-2 px-4 flex justify-between rounded'>
           <h2>{elem.firstname}</h2>
           <h3>Make a Dish</h3>
           <h4>Status</h4>
       </div>
        })}
        </div>
    </div>
  )
}

export default AllTask
