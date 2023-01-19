import React from 'react'

const TodoItem = ({ todo }) => {
    const { title, completed } = todo


    return (
        <div className='flex items-center justify-between p-4 bg-gray-700 border-b-solid border-gray-600'>
            <div className="flex items-center">
                {
                    completed ? (
                        <div className='bg-green-700 p-1 rounded-full cursor-pointer'>
                            <img className='h-4 w-4' src="/public/check-icon.svg" alt="" />
                        </div>

                    ) : (

                        <span
                            className='w-5 h-5 border-solid border border-gray-500 rounded-full  cursor-pointer'>
                        </span>

                    )
                }

                <p className={'pl-3 ' + (completed && "line-through")}>
                    {title}
                </p>
            </div>
            <img className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in' src="/close-icon.svg" alt="" />


        </div >
    )
}

export { TodoItem }
