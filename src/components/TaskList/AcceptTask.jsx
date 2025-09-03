import React from 'react'

function AcceptTask({elem}) {
  return (
    <div className="flex-shrink-0 h-full w-[300px]  py-4 px-5 bg-[#007BFF] rounded-lg">
        <div className="flex justify-between items-start mt-2 ">
          <button className="bg-orange-700 text-white border-none py-1 px-2 rounded-md text-sm font-semibold">
            {elem.category}
          </button>
          <h4 className="text-white font-semibold text-base">{elem.date}</h4>
        </div>
        <h4 className="mt-3 text-xl font-bold text-center">{elem.title}</h4>
        <p className="mt-2 text-center">
          {elem.description}
        </p>
        <div className='flex justify-between mt-6 '>
        <button className='border bg-green-500 p-1 text-xs rounded-md   text-white font-semibold active:bg-green-600 active:scale-95 transition'>Mark as Completed</button>
        <button className='border bg-red-500 p-1 text-xs rounded-md   text-white font-semibold active:bg-red-600 active:scale-95 transition'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask