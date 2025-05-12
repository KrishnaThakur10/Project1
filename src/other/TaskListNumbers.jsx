import React from 'react'

function TaskListNumbers() {
  return (
    <div className='flex justify-between gap-4 screen'>
        <div className='p-5 bg-orange-400 mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='p-5 bg-green-400 mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='p-5 bg-blue-400 mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='p-5 bg-red-400 mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
    </div>
  )
}

export default TaskListNumbers
