import React, { useEffect, useState } from "react"
import { Title } from "./components/Title"
import { TodoInput } from "./components/TodoInput"

import { TodoList } from "./components/TodoList"
import Img from "./assets/img/bg-desktop-dark.jpg"




function App() {

  const [todos, setTodos] = useState([

    {
      id: 1,
      title: 'mirar pelicula de Marvel',
      completed: false,
    },
    {
      id: 2,
      title: 'hacer spring de Makaia',
      completed: false,
    },
    {
      id: 3,
      title: 'hacer almuerzo',
      completed: true,
    },
    {
      id: 4,
      title: 'tomar agua',
      completed: true,
    }

  ]);

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  // Funcion para agregar Todo ala lista...
  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }
    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList)
  }

  // funcion para completar Todo
  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updateList);

  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList)
  }


  const handleClearComplete = () => {
    const updataList = todos.filter(todo => !todo.completed)
    setTodos(updataList);

  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos)

    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }

  }, [activeFilter, todos])


  return (
    <React.Fragment>
      <img className=" relative" src={Img} alt="" />
      <div className="bg-gray-900  min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
        <div className="container absolute top-20    bottom-0 flex flex-col max-w-xl">
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList
            todos={filteredTodos}
            activeFilter={activeFilter}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete}


          />
        </div>
      </div>

    </React.Fragment>

  )
}

export { App }
