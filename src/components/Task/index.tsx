import { Trash } from 'phosphor-react'
import { TasksProps } from '../../pages/Home'
import { Checkbox } from '../Checkbox'

import { DeleteButton, TaskContent, TasksWrapper } from './styles'

interface Props {
  tasks: TasksProps[]
  deleteTask: (taskId: string) => void
}

export function Tasks({ tasks, deleteTask }: Props) {
  return (
    <TasksWrapper>
      {tasks.map((task) => (
        <TaskContent key={task.id}>
          <Checkbox content={task.content} />
          <DeleteButton onClick={() => deleteTask(task.id)}>
            <Trash size={24} weight="bold" />
          </DeleteButton>
        </TaskContent>
      ))}
    </TasksWrapper>
  )
}
