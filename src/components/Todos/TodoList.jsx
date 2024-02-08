import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, doneTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          doneTodo={doneTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
