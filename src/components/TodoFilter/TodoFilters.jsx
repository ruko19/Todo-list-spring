import React from 'react'
import { FilterButton, FilterButtonsContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'

const TodoFilters = ({ activeFilter, total, showActiveTodos, showAllTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <div>
            <FiltersContainer>
                <ItemsLeft total={total} />
                <FilterButtonsContainer>
                    <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All" />
                    <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="Active" />
                    <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="completed" />

                </FilterButtonsContainer>

                <button onClick={() => (handleClearComplete())} className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in '>
                    Clear Completed

                </button>
            </FiltersContainer>

        </div>
    )
}

export { TodoFilters }
