import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox'

import { DeleteButton, TaskContent, TasksWrapper } from './styles'

export function Tasks() {
  return (
    <TasksWrapper>
      <TaskContent>
        <Checkbox />
        <DeleteButton>
          <Trash size={24} weight="bold" />
        </DeleteButton>
      </TaskContent>
    </TasksWrapper>
  )
}
