import { FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
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

export interface TasksProps {
  id: string
  content: string
  isChecked: boolean
}

export function Home() {
  const [inputContent, setInputContent] = useState('')
  const [tasks, setTasks] = useState<TasksProps[]>([])

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newTask = {
      id: uuid(),
      content: inputContent,
      isChecked: false,
    }
    setTasks((state) => [...state, newTask])
    setInputContent('')
  }

  function handleDeleteTask(taskId: string) {
    const removedTask = tasks.filter((task) => task.id !== taskId)
    setTasks(removedTask)
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo to-do" />
      </Header>

      <Form onSubmit={handleCreateTask}>
        <InputForm
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setInputContent(e.target.value)}
          value={inputContent}
        />
        <ButtonForm type="submit">
          <span>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </ButtonForm>
      </Form>

      <Main>
        <Info>
          <CreatedTasks>
            Tarefas criadas
            <span>{tasks.length}</span>
          </CreatedTasks>

          <TasksDone>
            Concluídas
            <span>0</span>
          </TasksDone>
        </Info>
        <TasksContainer>
          {tasks.length <= 0 ? (
            <EmptyInfo />
          ) : (
            <Tasks tasks={tasks} deleteTask={handleDeleteTask} />
          )}
        </TasksContainer>
      </Main>
    </Container>
  )
}
