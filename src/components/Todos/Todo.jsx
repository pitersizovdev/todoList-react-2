import React from 'react'
import styles from './Todo.module.css'

const Todo = ({ todo, deleteTodo, doneTodo }) => {
  return (
    <div className={styles.todo}>
      <div className={todo.isCompleted ? styles.completed : styles.todoText}>
        {todo.text}
      </div>
      <button onClick={() => doneTodo(todo.id)}>Done</button>
      <button onClick={() => deleteTodo(todo.id)}>-</button>
    </div>
  )
}

export default Todo