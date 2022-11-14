import { Dispatch, SetStateAction } from 'react'
import { TasksProps } from '../../pages/Home'
import { Container } from './styles'

export function Checkbox({
  content,
  id,
  isChecked,
  handleTaskOnCheck,
}: {
  content: string
  id: string
  isChecked: boolean
  handleTaskOnCheck: Dispatch<SetStateAction<TasksProps[]>>
}) {
  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={(e) =>
          handleTaskOnCheck((state) => {
            const updateTask = state.map((task) => {
              if (task.id === id) {
                task.isChecked = e.target.checked
              }
              return task
            })
            return updateTask
          })
        }
      />
      <label htmlFor={id}>{content}</label>
    </Container>
  )
}
