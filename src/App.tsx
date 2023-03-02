import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"

import "./styles/global.css"
import styles from "./App.module.css"
import { EmptyTasksList } from "./components/EmptyTasksList"

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskForm />
        <section className={styles.tasksSection}>
          <section className={styles.tasksStatusSection}>
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </section>
          <section>
            <EmptyTasksList />
          </section>
        </section>
      </main>
    </>
  )
}
