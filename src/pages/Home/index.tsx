import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import {
  ButtonForm,
  Container,
  CreatedTasks,
  Form,
  Header,
  Info,
  InputForm,
  Main,
  TasksContainer,
  TasksDone,
} from './styles'

import Logo from '../../assets/Logo.svg'
import { Tasks } from '../../components/Task'
import { EmptyInfo } from '../../components/EmptyInfo'

export function Home() {
  const [tasks, setTasks] = useState([])

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

          <TasksDone>
            Concluídas
            <span>0</span>
          </TasksDone>
        </Info>
        <TasksContainer>
          {tasks.length <= 0 ? <EmptyInfo /> : <Tasks />}
        </TasksContainer>
      </Main>
    </Container>
  )
}
