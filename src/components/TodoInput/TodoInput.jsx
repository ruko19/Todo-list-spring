import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    return (
        <div className='mt-6 relative'>
            <div className="absolute inset-y-0 left-0 top-4 pl-3 flex item-center pointer-events-none ">
                <span className='border border-gray-500 border-solid w-6 h-6 rounded-full'></span>
            </div>
            <input
                type="text"
                className='focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
                placeholder='Escribe un TODO...'
                onChange={e => console.log(e.target.value)}
            />
        </div>
    )
}

export { TodoInput }
