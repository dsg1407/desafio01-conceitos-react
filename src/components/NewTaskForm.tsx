import { PlusCircle } from "phosphor-react"

import styles from "./NewTaskForm.module.css"

export function NewTaskForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" required />
      <button type="submit">
        Criar
        <PlusCircle size={21.34} />
      </button>
    </form>
  )
}
