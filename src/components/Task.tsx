import * as Checkbox from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
import { Trash } from "phosphor-react"

import { TaskProps } from "../App"
interface TaskItemProps extends TaskProps {
  deleteTask: (id: string) => void
  updateTaskList: (newTask: TaskProps) => void
}

import styles from "./Task.module.css"

export function Task({
  id,
  completed,
  description,
  deleteTask,
  updateTaskList,
}: TaskItemProps) {
  function handleCompletedButtonClick() {
    updateTaskList({
      id,
      completed: !completed,
      description,
    })
  }

  return (
    <div
      className={`${styles.wrapper} ${completed && styles.finishedTaskWrapper}`}
    >
      <Checkbox.Root
        className={styles.checkboxRoot}
        defaultChecked={completed}
        onCheckedChange={handleCompletedButtonClick}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={16} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={`${completed && styles.finishedTaskDescription}`}>
        {description}
      </p>
      <button
        className={styles.deleteTaskButton}
        onClick={() => deleteTask(id)}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}
