import { useState, ChangeEvent, InvalidEvent, FormEvent } from 'react';

import styles from './AddForm.module.css'

import { PlusCircle } from 'phosphor-react'

interface AddTaskProps {
  onAddTask: (taskDescription: string) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onAddTask(newTaskText)

    setNewTaskText('')
  }

  const isNewTaskEmpty = newTaskText.length > 0 ? false : true

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}