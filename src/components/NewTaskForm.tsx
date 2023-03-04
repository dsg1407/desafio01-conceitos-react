import { useState, ChangeEvent, FormEvent } from "react"
import { v4 as uuidv4 } from "uuid"
import { PlusCircle } from "phosphor-react"

import { TaskProps } from "../App"

import styles from "./NewTaskForm.module.css"

interface TaskFormProps {
  createNewTask: (newTask: TaskProps) => void
}

export function NewTaskForm({ createNewTask }: TaskFormProps) {
  const [taskDescription, setTaskDescription] = useState("")

  const hasNoDescription = taskDescription.length === 0

  function handleTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(event.target.value)
  }

  function handleNewTaskForm(event: FormEvent) {
    event.preventDefault()

    const task: TaskProps = {
      id: uuidv4(),
      description: taskDescription,
      completed: false,
    }

    createNewTask(task)
    setTaskDescription("")
  }

  return (
    <form className={styles.form} onSubmit={handleNewTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        required
      />
      <button type="submit" disabled={hasNoDescription}>
        Criar
        <PlusCircle size={21.34} />
      </button>
    </form>
  )
}
