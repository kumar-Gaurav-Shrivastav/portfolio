import React from 'react'

const RecentProject = () => {
  return (
    <div>
      <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 w-4xl'>
          <div className='col-span-2 row-span-2 min-h-[200px] bg-white text-black text-center rounded-lg'>
            <p>gaurav</p>
          </div>
          <div className='col-span-1 min-h-[200px] bg-gray-200 text-black text-center rounded-lg'>
            <p>Project 2</p>
          </div>
          <div className='col-span-1 min-h-[200px] bg-gray-200 text-black text-center rounded-lg'>
            <p>Project 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProject
