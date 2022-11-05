import { Container } from './styles'

export function Checkbox() {
  return (
    <Container>
      <input id="task" type="checkbox" />
      <label htmlFor="task">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed.
      </label>
    </Container>
  )
}
