import Clipboard from '../../assets/Clipboard.svg'

import { Container } from './styles'

export function EmptyInfo() {
  return (
    <Container>
      <img src={Clipboard} alt="" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}
