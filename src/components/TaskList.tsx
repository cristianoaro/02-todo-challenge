import styles from './TaskList.module.css'

import { EmptyTaskList } from './EmptyTaskList'
import { TaskItem, TaskItemType } from './TaskItem';

interface TaskListProps {
  taskList: TaskItemType[],
  onDeleteTask: (taskDeleteId: string) => void;
  onCheckTask: (taskCheckId: string) => void;
}

export function TaskList({ taskList, onDeleteTask, onCheckTask }: TaskListProps) {
  const counterCreatedTasks = taskList.length
  const counterDoneTasks = taskList.filter(currentTask => currentTask.isDone).length

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.createdInfo}>
          <strong>Tarefas criadas</strong>
          <strong>{counterCreatedTasks}</strong>
        </div>

        <div className={styles.doneInfo}>
          <strong>Concluídas</strong>
          <strong>
            {counterCreatedTasks == 0 ?
              0
              :
              `${counterDoneTasks} de ${counterCreatedTasks}`
            }
          </strong>
        </div>
      </header>
      <div className={styles.list}>
        {counterCreatedTasks == 0 ?
          <EmptyTaskList />
          :
          taskList.map(
            task => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onCheckTask={onCheckTask} />
              )
            }
          )
        }
      </div>
    </div>
  )
}