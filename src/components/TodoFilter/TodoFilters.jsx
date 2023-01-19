import React from 'react'
import { FilterButton, FilterButtonsContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'

const TodoFilters = () => {
    return (
        <div>
            <FiltersContainer>
                <ItemsLeft />
                <FilterButtonsContainer>
                    <FilterButton action={() => { }} active="All" filter="All" />
                    <FilterButton action={() => { }} active="All" filter="Active" />
                    <FilterButton action={() => { }} active="All" filter="completed" />

                </FilterButtonsContainer>

                <button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in '>
                    Clear Completed

                </button>
            </FiltersContainer>

        </div>
    )
}

export { TodoFilters }
