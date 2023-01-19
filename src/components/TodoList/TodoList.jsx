import React from 'react'
import { TodoFilters } from '../TodoFilter'
import { TodoItem } from '../TodoItem/TodoItem'


const TodoList = ({ todos }) => {
    return (
        <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} />
                )
            })}
            <TodoFilters />

        </div>
    )
}

export { TodoList }
