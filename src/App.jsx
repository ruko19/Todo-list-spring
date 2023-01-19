import React, { useState } from "react"
import { Title } from "./components/Title"
import { TodoFilters } from "./components/TodoFilter"
import { TodoInput } from "./components/TodoInput"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList"




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
      completed: false,
    },
    {
      id: 4,
      title: 'tomar agua',
      completed: true,
    }

  ]);

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


  return (
    <React.Fragment>
      <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
        <div className="container flex flex-col max-w-xl">
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList todos={todos} />








        </div>
      </div>



    </React.Fragment>

  )
}

export { App }
