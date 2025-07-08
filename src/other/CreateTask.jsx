import React from 'react'

function CreateTask() {
  return (
      <div className='px-8 py-4'>
        <form>
            <div className='flex '>
                <div className='w-1/2 mr-5 '>
                   <div className='font-semibold text-lg'>Task Title</div>
                   <input className='w-full mt-1 p-2 bg-slate-800 outline-none rounded-md font-mono text-white' type="text" placeholder='Make a UI design' />
                  <div className='font-semibold text-lg'>Date</div>
                  <input className='w-full mt-1 p-2 bg-slate-800 outline-none rounded-md font-mono' type="date" name="" id="" />
            <div className='font-semibold text-lg mt-2'>Assign To</div>
            <input className='w-full mt-1 p-2 bg-slate-800 outline-none rounded-md font-mono' type="text" />
            <div className='font-semibold text-lg mt-2'>Category</div>
            <input className='w-full mt-1 p-2 bg-slate-800 outline-none rounded-md font-mono' type="text" placeholder='Design, development, etc.,' />
                </div>
                <div className='w-1/2 mr-5' >
            <div className='font-semibold text-lg '>Discription</div>
            <textarea 
  className='w-full mt-1 p-2 bg-slate-800 outline-none rounded-md font-mono text-white resize-none' 
  rows="11" 
  placeholder='Detail description of task. [Max 500 words]'
></textarea>
                </div>
            </div >
            <button className='bg-slate-800 font-semibold border-transparent block m-auto mt-3 rounded-lg px-4 py-3 outline-none border hover:border-slate-300 transition-colors '>Create a Task</button>
        </form>
      </div>
  )
}

export default CreateTask
