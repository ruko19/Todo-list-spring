import React from 'react'
import { TodoFilters } from '../TodoFilter'
import { TodoItem } from '../TodoItem/TodoItem'


const TodoList = ({ todos, handleSetComplete, handleDelete, activeFilter, total, showActiveTodos, showAllTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
            {todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleSetComplete={handleSetComplete}
                        handleDelete={handleDelete}
                    />
                )
            })}
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}

            />

        </div>
    )
}

export { TodoList }
