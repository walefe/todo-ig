import { Trash } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import { TasksProps } from '../../pages/Home'
import { Checkbox } from '../Checkbox'

import { DeleteButton, TaskContent, TasksWrapper } from './styles'

interface Props {
  tasks: TasksProps[]
  deleteTask: (taskId: string) => void
  handleTaskOnCheck: Dispatch<SetStateAction<TasksProps[]>>
}

export function Tasks({ tasks, deleteTask, handleTaskOnCheck }: Props) {
  return (
    <TasksWrapper>
      {tasks.map((task) => (
        <TaskContent key={task.id}>
          <Checkbox
            content={task.content}
            id={task.id}
            isChecked={task.isChecked}
            handleTaskOnCheck={handleTaskOnCheck}
          />
          <DeleteButton onClick={() => deleteTask(task.id)}>
            <Trash size={24} weight="bold" />
          </DeleteButton>
        </TaskContent>
      ))}
    </TasksWrapper>
  )
}
