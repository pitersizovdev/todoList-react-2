import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, id) => (
        <Todo key={id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
