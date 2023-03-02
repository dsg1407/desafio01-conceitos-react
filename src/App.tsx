import { ClipboardText } from "phosphor-react"

import { Header } from "./components/Header"
import { TaskForm } from "./components/TaskForm"

import "./styles/global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskForm />
        <section className="tasks-section">
          <section className="tasks-status-section">
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </section>
          <section className="tasks-list-section">
            <div>
              <ClipboardText />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}
