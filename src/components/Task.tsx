import * as Checkbox from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
import { Trash } from "phosphor-react"

import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={`${styles.wrapper} ${styles.finishedTaskWrapperXXX}`}>
      <Checkbox.Root className={styles.checkboxRoot}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={16} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={styles.finishedTaskDescriptionXXX}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.deleteTaskButton}>
        <Trash size={16} />
      </button>
    </div>
  )
}
