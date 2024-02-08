import { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default TodoForm
