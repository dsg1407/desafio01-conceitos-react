import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import { Trash } from "phosphor-react"

import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={`${styles.wrapper} ${styles.finishedTaskWrapperXXX}`}>
      <Checkbox.Root className={styles.checkboxRoot}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={styles.finishedTaskDescriptionXXX}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        delectus sint alias numquam sapiente quibusdam a!
      </p>
      <button className={styles.deleteTaskButton}>
        <Trash size={16} />
      </button>
    </div>
  )
}
