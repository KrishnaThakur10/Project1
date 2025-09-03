import React from 'react'

function FailedTask({elem}) {
  return (
    <div className="flex-shrink-0 h-full w-[300px]  py-4 px-5 bg-[#dc3545] rounded-lg">
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
        
      </div>
  )
}

export default FailedTask