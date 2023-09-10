import { useState } from 'react';

import './global.css'
import styles from './App.module.css'

import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskItemType } from './components/TaskItem';

// const tasks: TaskItemType[] = [
//   {
//     id: '1',
//     description: 'Minha primeira tarefa',
//     isDone: false,
//   },
//   {
//     id: '2',
//     description: 'Minha segunda tarefa',
//     isDone: true,
//   }
// ]

export function App() {
  const [taskList, setTaskList] = useState<TaskItemType[]>([])

  function addTask(taskDescription: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      description: taskDescription,
      isDone: false,
    }

    setTaskList([...taskList, newTask])
  }

  function checkTask(taskCheckId: string) {
    const tasksUpdated = taskList.map(task => {
      if (task.id === taskCheckId) {
        return {
          ...task,
          isDone: task.isDone ? false : true
        }
      }

      return task
    })

    setTaskList(tasksUpdated)
  }

  function deleteTask(taskDeleteId: string) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== taskDeleteId
    })

    setTaskList(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AddTask onAddTask={addTask} />
        <TaskList
          taskList={taskList}
          onDeleteTask={deleteTask}
          onCheckTask={checkTask}
        />
      </main>
    </>
  )
}

