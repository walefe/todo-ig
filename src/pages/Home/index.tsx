import { ButtonForm, Container, Form, Header, InputForm } from './styles'

import Logo from '../../assets/Logo.svg'
import { PlusCircle } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo to-do" />
      </Header>

      <Form>
        <InputForm placeholder="Adicione uma nova tarefa" />
        <ButtonForm>
          <span>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </ButtonForm>
      </Form>
    </Container>
  )
}
