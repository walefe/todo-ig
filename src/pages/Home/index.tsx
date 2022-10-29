import { PlusCircle } from 'phosphor-react'
import {
ButtonForm,
Container,
CreatedTasks,
EmptyInfo,
Form,
Header,
Info,
InputForm,
Main,
TasksContainer,
TasksDone
} from './styles'

import Logo from '../../assets/Logo.svg'
import Clipboard from '../../assets/Clipboard.svg'

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

      <Main>
        <Info>
          <CreatedTasks>
            Tarefas criadas
            <span>0</span>
          </CreatedTasks>

          <TasksDone>Concluídas
            <span>0</span>
          </TasksDone>

        </Info>
        <TasksContainer>
          <EmptyInfo>
            <img src={Clipboard} alt="" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </EmptyInfo>
        </TasksContainer>
      </Main>
    </Container>
  )
}
