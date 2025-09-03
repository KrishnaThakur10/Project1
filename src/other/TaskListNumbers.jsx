import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex justify-between gap-4 screen'>
        <div className='p-5 bg-[#007BFF] mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-3xl font-medium'>Active</h1>
            <h1 className='text-3xl font-semibold'>{data.taskNumber.active}</h1>
        </div>
        <div className='p-5 bg-[#6610f2] mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-2xl font-medium'>New Task</h1>
            <h1 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h1>
        </div>
        <div className='p-5 bg-[#28a745] mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-2xl font-medium'>Completed</h1>
            <h1 className='text-3xl font-semibold'>{data.taskNumber.completed}</h1>
        </div>
        <div className='p-5 bg-[#dc3545] mt-7 rounded-xl w-[45%] px-8 py-5 hover:scale-105 transition-transform duration-100'>
            <h1 className='text-2xl font-medium'>Failed</h1>
            <h1 className='text-3xl font-semibold'>{data.taskNumber.failed}</h1>
        </div>
    </div>
  )
}

export default TaskListNumbers
