import { ClipboardText } from "phosphor-react"

import styles from "./EmptyTasksList.module.css"

export function EmptyTasksList() {
  return (
    <div className={styles.wrapper}>
      <ClipboardText size={56} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
