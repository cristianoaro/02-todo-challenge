import { GoTrash, GoCircle } from 'react-icons/go';

import styles from './TaskItem.module.css'

import { ReactComponent as CheckIcon } from "../assets/check.svg";

export interface TaskItemType {
  id: string;
  description: string;
  isDone: boolean;
}

interface TaskItemProps {
  task: TaskItemType;
  onDeleteTask: (taskDeleteId: string) => void;
  onCheckTask: (taskCheckId: string) => void;
}

export function TaskItem({ task, onDeleteTask, onCheckTask }: TaskItemProps) {
  const { description, isDone } = task

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleCheckTask() {
    onCheckTask(task.id)
  }

  return (
    <div className={styles.taskItem}>
      <div className={styles.check}>
        <button onClick={handleCheckTask}>
          {
            isDone ?
              <CheckIcon className={styles.checked} />
              :
              <GoCircle className={styles.noCheck} />
          }
        </button>
      </div>
      <p className={isDone ? styles.isDone : ''}>
        {description}
      </p>
      <button onClick={handleDeleteTask}>
        <GoTrash size={24} className={styles.trash} />
      </button>
    </div>
  )
}