import { Trash } from 'phosphor-react'
import { CheckTask, TaskContent, TasksWrapper } from './styles'

export function Task() {
  return (
    <TasksWrapper>
      <TaskContent>
        <CheckTask />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash size={24} weight="bold" />
      </TaskContent>
    </TasksWrapper>
  )
}
