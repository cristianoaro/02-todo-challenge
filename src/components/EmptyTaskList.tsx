import styles from './EmptyTaskList.module.css'

import clipboardIcon from '../assets/clipboard-icon.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.main}>
      <img src={clipboardIcon} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        <span>Crie taredas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}