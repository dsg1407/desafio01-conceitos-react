import { useState } from "react"

import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"
import { EmptyTasksList } from "./components/EmptyTasksList"
import { Task } from "./components/Task"

import "./styles/global.css"
import styles from "./App.module.css"

export interface TaskProps {
  id: string
  completed: boolean
  description: string
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const completedTasks = tasks.filter((task) => task.completed === true)

  function deleteTask(id: string) {
    const newTaskList = tasks.filter((task) => task.id !== id)

    setTasks(newTaskList)
  }

  function createNewTask(newTask: TaskProps) {
    setTasks([...tasks, newTask])
  }

  function updateTaskList(taskUpdated: TaskProps) {
    const newTaskList = tasks.map((task) => {
      return task.id === taskUpdated.id ? taskUpdated : task
    })
    setTasks(newTaskList)
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskForm createNewTask={createNewTask} />
        <section className={styles.tasksSection}>
          <section className={styles.tasksStatusSection}>
            <div>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>
                {completedTasks.length > 0
                  ? `${completedTasks.length} de ${tasks.length}`
                  : completedTasks.length}
              </span>
            </div>
          </section>
          <section className={styles.tasksListSection}>
            {tasks.length > 0 ? (
              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    completed={task.completed}
                    description={task.description}
                    deleteTask={deleteTask}
                    updateTaskList={updateTaskList}
                  />
                )
              })
            ) : (
              <EmptyTasksList />
            )}
          </section>
        </section>
      </main>
    </>
  )
}
