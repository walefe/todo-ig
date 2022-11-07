import { Container } from './styles'

export function Checkbox({ content }: { content: string }) {
  return (
    <Container>
      <input id="task" type="checkbox" />
      <label htmlFor="task">{content}</label>
    </Container>
  )
}
